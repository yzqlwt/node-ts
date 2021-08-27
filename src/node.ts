import Vec3 from './vec3';
import Mat3 from './mat3';
import Mat4 from './mat4';
import Quat from './quat';

export enum TransformBit {
  /**
   * @zh
   * 无改变
   */
  NONE = 0,
  /**
   * @zh
   * 节点位置改变
   */
  POSITION = 1 << 0,
  /**
   * @zh
   * 节点旋转
   */
  ROTATION = 1 << 1,
  /**
   * @zh
   * 节点缩放
   */
  SCALE = 1 << 2,
  /**
   * @zh
   * 节点旋转及缩放
   */
  RS = TransformBit.ROTATION | TransformBit.SCALE,
  /**
   * @zh
   * 节点平移，旋转及缩放
   */
  TRS = TransformBit.POSITION | TransformBit.ROTATION | TransformBit.SCALE,
  TRS_MASK = ~TransformBit.TRS,
}

const qt_1 = new Quat();
const m3_1 = new Mat3();
const dirtyNodes: any[] = [];

export default class Node {
  public _parent: this | null = null;

  public declare _pos: Vec3;
  public declare _rot: Quat;
  public declare _scale: Vec3;
  public declare _mat: Mat4;

  // local transform
  public _lpos = new Vec3();
  public _lrot = new Quat();
  public _lscale = new Vec3(1, 1, 1);
  public _euler = new Vec3();

  private _dirtyFlagsPri = TransformBit.NONE; // does the world transform need to update?

  constructor() {
    this._pos = new Vec3();
    this._rot = new Quat();
    this._scale = new Vec3(1, 1, 1);
    this._mat = new Mat4();
  }

  public get _dirtyFlags() {
    return this._dirtyFlagsPri;
  }

  public set _dirtyFlags(flags) {
    this._dirtyFlagsPri = flags;
  }

  protected _setDirtyNode(idx: number, currNode: this) {
    dirtyNodes[idx] = currNode;
  }

  /**
   * @en Update the world transform information if outdated
   * @zh 更新节点的世界变换信息
   */
  public updateWorldTransform() {
    if (!this._dirtyFlags) {
      return;
    }
    // we need to recursively iterate this
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let cur: this | null = this;
    let i = 0;
    while (cur && cur._dirtyFlags) {
      // top level node
      this._setDirtyNode(i++, cur);
      cur = cur._parent;
    }
    let child: this;
    let dirtyBits = 0;

    while (i) {
      child = dirtyNodes[--i];
      dirtyBits |= child._dirtyFlags;
      if (cur) {
        if (dirtyBits & TransformBit.POSITION) {
          Vec3.transformMat4(child._pos, child._lpos, cur._mat);
          child._mat.m12 = child._pos.x;
          child._mat.m13 = child._pos.y;
          child._mat.m14 = child._pos.z;
        }
        if (dirtyBits & TransformBit.RS) {
          Mat4.fromRTS(child._mat, child._lrot, child._lpos, child._lscale);
          Mat4.multiply(child._mat, cur._mat, child._mat);
          if (dirtyBits & TransformBit.ROTATION) {
            Quat.multiply(child._rot, cur._rot, child._lrot);
          }
          Mat3.fromQuat(m3_1, Quat.conjugate(qt_1, child._rot));
          Mat3.multiplyMat4(m3_1, m3_1, child._mat);
          child._scale.x = m3_1.m00;
          child._scale.y = m3_1.m04;
          child._scale.z = m3_1.m08;
        }
      } else {
        if (dirtyBits & TransformBit.POSITION) {
          Vec3.copy(child._pos, child._lpos);
          child._mat.m12 = child._pos.x;
          child._mat.m13 = child._pos.y;
          child._mat.m14 = child._pos.z;
        }
        if (dirtyBits & TransformBit.RS) {
          if (dirtyBits & TransformBit.ROTATION) {
            Quat.copy(child._rot, child._lrot);
          }
          if (dirtyBits & TransformBit.SCALE) {
            Vec3.copy(child._scale, child._lscale);
            Mat4.fromRTS(child._mat, child._rot, child._pos, child._scale);
          }
        }
      }

      child._dirtyFlags = TransformBit.NONE;
      cur = child;
    }
  }

  public static clearDirtyNodes() {
    dirtyNodes.length = 0;
  }

}
