export interface IQuatLike {
  x: number;
  y: number;
  z: number;
  w: number;
}

export default class Quat {
  /**
   * @en x component.
   * @zh x 分量。
   */
  public declare x: number;

  /**
   * @en y component.
   * @zh y 分量。
   */
  public declare y: number;

  /**
   * @en z component.
   * @zh z 分量。
   */
  public declare z: number;

  /**
   * @en w component.
   * @zh w 分量。
   */
  public declare w: number;

  constructor(other: Quat);

  constructor(x?: number, y?: number, z?: number, w?: number);

  constructor(x?: number | IQuatLike, y?: number, z?: number, w?: number) {
    if (x && typeof x === 'object') {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z;
      this.w = x.w;
    } else {
      this.x = (x as number) || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.w = w ?? 1;
    }
  }

  /**
   * @en Quaternion multiplication and save the results to out quaternion
   * @zh 四元数乘法
   */
  public static multiply<
    Out extends IQuatLike,
    QuatLike_1 extends IQuatLike,
    QuatLike_2 extends IQuatLike,
  >(out: Out, a: QuatLike_1, b: QuatLike_2) {
    const x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;
    const y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;
    const z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;
    const w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;
    out.x = x;
    out.y = y;
    out.z = z;
    out.w = w;
    return out;
  }

  /**
   * @en Copy the given quaternion to the out quaternion
   * @zh 复制目标四元数
   */
  public static copy<Out extends IQuatLike, QuatLike extends IQuatLike>(
    out: Out,
    a: QuatLike,
  ) {
    out.x = a.x;
    out.y = a.y;
    out.z = a.z;
    out.w = a.w;
    return out;
  }

  /**
   * @en Conjugating a quaternion, it's equivalent to the inverse of the unit quaternion, but more efficient
   * @zh 求共轭四元数，对单位四元数与求逆等价，但更高效
   */
  public static conjugate<Out extends IQuatLike>(out: Out, a: Out) {
    out.x = -a.x;
    out.y = -a.y;
    out.z = -a.z;
    out.w = a.w;
    return out;
  }

  /**
   * @en Calculates the quaternion with Euler angles, the rotation order is YZX
   * @zh 根据欧拉角信息计算四元数，旋转顺序为 YZX
   */
  public static fromEuler<Out extends IQuatLike>(
    out: Out,
    x: number,
    y: number,
    z: number,
  ) {
    const halfToRad = (0.5 * Math.PI) / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    const sx = Math.sin(x);
    const cx = Math.cos(x);
    const sy = Math.sin(y);
    const cy = Math.cos(y);
    const sz = Math.sin(z);
    const cz = Math.cos(z);

    out.x = sx * cy * cz + cx * sy * sz;
    out.y = cx * sy * cz + sx * cy * sz;
    out.z = cx * cy * sz - sx * sy * cz;
    out.w = cx * cy * cz - sx * sy * sz;

    return out;
  }
}
