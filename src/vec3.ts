import Mat4 from './mat4';

export interface IVec3Like {
  x: number;
  y: number;
  z: number;
}

export interface IMat4Like {
  m00: number;
  m01: number;
  m02: number;
  m03: number;
  m04: number;
  m05: number;
  m06: number;
  m07: number;
  m08: number;
  m09: number;
  m10: number;
  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m15: number;
}

export default class Vec3 {
  public declare x: number;
  public declare y: number;
  public declare z: number;

  constructor(v: Vec3);

  constructor(x?: number, y?: number, z?: number);

  constructor(x?: number | Vec3, y?: number, z?: number) {
    if (x && typeof x === 'object') {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z;
    } else {
      this.x = (x as number) || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
  }

  public set(other: Vec3): Vec3;

  public set(x?: number, y?: number, z?: number): Vec3;

  public set(x?: number | Vec3, y?: number, z?: number): Vec3 {
    if (x && typeof x === 'object') {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z;
    } else {
      this.x = (x as number) || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
    return this;
  }

  /**
   * @en Transforms the vec3 with a mat4. 4th vector component is implicitly '1'
   * @zh 将当前向量视为 w 分量为 1 的四维向量，应用四维矩阵变换到当前矩阵
   * @param matrix matrix to transform with
   */
  public static transformMat4<Out extends IVec3Like>(
    out: Out,
    a: IVec3Like,
    m: IMat4Like,
  ): Out {
    const x = a.x;
    const y = a.y;
    const z = a.z;
    let rhw = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
    rhw = rhw ? Math.abs(1 / rhw) : 1;
    out.x = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) * rhw;
    out.y = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) * rhw;
    out.z = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) * rhw;
    return out;
  }

  public toString(): string {
    return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)}, ${this.z.toFixed(2)})`;
  }

  public static copy<Out extends IVec3Like, Vec3Like extends IVec3Like>(
    out: Out,
    a: Vec3Like,
  ) {
    out.x = a.x;
    out.y = a.y;
    out.z = a.z;
    return out;
  }
}
