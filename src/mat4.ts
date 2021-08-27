import Vec3, { IMat4Like, IVec3Like } from './vec3';
import Quat from './quat';

export default class Mat4 {
  /**
   * @en Value at column 0 row 0 of the matrix.
   * @zh 矩阵第 0 列第 0 行的元素。
   */
  public m00: number;

  /**
   * @en Value at column 0 row 1 of the matrix.
   * @zh 矩阵第 0 列第 1 行的元素。
   */
  public m01: number;

  /**
   * @en Value at column 0 row 2 of the matrix.
   * @zh 矩阵第 0 列第 2 行的元素。
   */
  public m02: number;

  /**
   * @en Value at column 0 row 3 of the matrix.
   * @zh 矩阵第 0 列第 3 行的元素。
   */
  public m03: number;

  /**
   * @en Value at column 1 row 0 of the matrix.
   * @zh 矩阵第 1 列第 0 行的元素。
   */
  public m04: number;

  /**
   * @en Value at column 1 row 1 of the matrix.
   * @zh 矩阵第 1 列第 1 行的元素。
   */
  public m05: number;

  /**
   * @en Value at column 1 row 2 of the matrix.
   * @zh 矩阵第 1 列第 2 行的元素。
   */
  public m06: number;

  /**
   * @en Value at column 1 row 3 of the matrix.
   * @zh 矩阵第 1 列第 3 行的元素。
   */
  public m07: number;

  /**
   * @en Value at column 2 row 0 of the matrix.
   * @zh 矩阵第 2 列第 0 行的元素。
   */
  public m08: number;

  /**
   * @en Value at column 2 row 1 of the matrix.
   * @zh 矩阵第 2 列第 1 行的元素。
   */
  public m09: number;

  /**
   * @en Value at column 2 row 2 of the matrix.
   * @zh 矩阵第 2 列第 2 行的元素。
   */
  public m10: number;

  /**
   * @en Value at column 2 row 3 of the matrix.
   * @zh 矩阵第 2 列第 3 行的元素。
   */
  public m11: number;

  /**
   * @en Value at column 3 row 0 of the matrix.
   * @zh 矩阵第 3 列第 0 行的元素。
   */
  public m12: number;

  /**
   * @en Value at column 3 row 1 of the matrix.
   * @zh 矩阵第 3 列第 1 行的元素。
   */
  public m13: number;

  /**
   * @en Value at column 3 row 2 of the matrix.
   * @zh 矩阵第 3 列第 2 行的元素。
   */
  public m14: number;

  /**
   * @en Value at column 3 row 3 of the matrix.
   * @zh 矩阵第 3 列第 3 行的元素。
   */
  public m15: number;

  constructor(other: Mat4);

  constructor(
    m00?: number,
    m01?: number,
    m02?: number,
    m03?: number,
    m04?: number,
    m05?: number,
    m06?: number,
    m07?: number,
    m08?: number,
    m09?: number,
    m10?: number,
    m11?: number,
    m12?: number,
    m13?: number,
    m14?: number,
    m15?: number,
  );

  constructor(
    m00: Mat4 | number = 1,
    m01 = 0,
    m02 = 0,
    m03 = 0,
    m04 = 0,
    m05 = 1,
    m06 = 0,
    m07 = 0,
    m08 = 0,
    m09 = 0,
    m10 = 1,
    m11 = 0,
    m12 = 0,
    m13 = 0,
    m14 = 0,
    m15 = 1,
  ) {
    if (typeof m00 === 'object') {
      this.m00 = m00.m00;
      this.m01 = m00.m01;
      this.m02 = m00.m02;
      this.m03 = m00.m03;
      this.m04 = m00.m04;
      this.m05 = m00.m05;
      this.m06 = m00.m06;
      this.m07 = m00.m07;
      this.m08 = m00.m08;
      this.m09 = m00.m09;
      this.m10 = m00.m10;
      this.m11 = m00.m11;
      this.m12 = m00.m12;
      this.m13 = m00.m13;
      this.m14 = m00.m14;
      this.m15 = m00.m15;
    } else {
      this.m00 = m00;
      this.m01 = m01;
      this.m02 = m02;
      this.m03 = m03;
      this.m04 = m04;
      this.m05 = m05;
      this.m06 = m06;
      this.m07 = m07;
      this.m08 = m08;
      this.m09 = m09;
      this.m10 = m10;
      this.m11 = m11;
      this.m12 = m12;
      this.m13 = m13;
      this.m14 = m14;
      this.m15 = m15;
    }
  }

  /**
   * @en Resets the matrix values by the given rotation quaternion, translation vector and scale vector
   * @zh 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。
   * @param q Rotation quaternion
   * @param v Translation vector
   * @param s Scaling vector
   * @return `this`
   */
  public static fromRTS<Out extends IMat4Like, VecLike extends IVec3Like>(
    out: Out,
    q: Quat,
    v: VecLike,
    s: VecLike,
  ): Out {
    const x = q.x;
    const y = q.y;
    const z = q.z;
    const w = q.w;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;

    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const sx = s.x;
    const sy = s.y;
    const sz = s.z;

    out.m00 = (1 - (yy + zz)) * sx;
    out.m01 = (xy + wz) * sx;
    out.m02 = (xz - wy) * sx;
    out.m03 = 0;
    out.m04 = (xy - wz) * sy;
    out.m05 = (1 - (xx + zz)) * sy;
    out.m06 = (yz + wx) * sy;
    out.m07 = 0;
    out.m08 = (xz + wy) * sz;
    out.m09 = (yz - wx) * sz;
    out.m10 = (1 - (xx + yy)) * sz;
    out.m11 = 0;
    out.m12 = v.x;
    out.m13 = v.y;
    out.m14 = v.z;
    out.m15 = 1;

    return out;
  }

  /**
   * @en Multiply two matrices and save the results to out matrix
   * @zh 矩阵乘法
   */
  public static multiply<Out extends IMat4Like>(out: Out, a: Out, b: Out) {
    const a00 = a.m00;
    const a01 = a.m01;
    const a02 = a.m02;
    const a03 = a.m03;
    const a10 = a.m04;
    const a11 = a.m05;
    const a12 = a.m06;
    const a13 = a.m07;
    const a20 = a.m08;
    const a21 = a.m09;
    const a22 = a.m10;
    const a23 = a.m11;
    const a30 = a.m12;
    const a31 = a.m13;
    const a32 = a.m14;
    const a33 = a.m15;

    // Cache only the current line of the second matrix
    let b0 = b.m00;
    let b1 = b.m01;
    let b2 = b.m02;
    let b3 = b.m03;
    out.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b.m04;
    b1 = b.m05;
    b2 = b.m06;
    b3 = b.m07;
    out.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b.m08;
    b1 = b.m09;
    b2 = b.m10;
    b3 = b.m11;
    out.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b.m12;
    b1 = b.m13;
    b2 = b.m14;
    b3 = b.m15;
    out.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
}
