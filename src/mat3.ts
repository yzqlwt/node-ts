import Quat, { IQuatLike } from './quat';

export interface IMat3Like {
  m00: number;
  m01: number;
  m02: number;
  m03: number;
  m04: number;
  m05: number;
  m06: number;
  m07: number;
  m08: number;
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

export default class Mat3 {
  /**
   * @en Value at column 0 row 0 of the matrix.
   * @zh 矩阵第 0 列第 0 行的元素。
   */
  public declare m00: number;

  /**
   * @en Value at column 0 row 1 of the matrix.
   * @zh 矩阵第 0 列第 1 行的元素。
   */
  public declare m01: number;

  /**
   * @en Value at column 0 row 2 of the matrix.
   * @zh 矩阵第 0 列第 2 行的元素。
   */
  public declare m02: number;

  /**
   * @en Value at column 1 row 0 of the matrix.
   * @zh 矩阵第 1 列第 0 行的元素。
   */
  public declare m03: number;

  /**
   * @en Value at column 1 row 1 of the matrix.
   * @zh 矩阵第 1 列第 1 行的元素。
   */
  public declare m04: number;

  /**
   * @en Value at column 1 row 2 of the matrix.
   * @zh 矩阵第 1 列第 2 行的元素。
   */
  public declare m05: number;

  /**
   * @en Value at column 2 row 0 of the matrix.
   * @zh 矩阵第 2 列第 0 行的元素。
   */
  public declare m06: number;

  /**
   * @en Value at column 2 row 1 of the matrix.
   * @zh 矩阵第 2 列第 1 行的元素。
   */
  public declare m07: number;

  /**
   * @en Value at column 2 row 2 of the matrix.
   * @zh 矩阵第 2 列第 2 行的元素。
   */
  public declare m08: number;

  constructor(other: Mat3);

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
  );

  constructor(
    m00: number | Mat3 = 1,
    m01 = 0,
    m02 = 0,
    m03 = 0,
    m04 = 1,
    m05 = 0,
    m06 = 0,
    m07 = 0,
    m08 = 1,
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
    }
  }

  /**
   * @en Sets the given matrix with the given quaternion and save the results to out matrix
   * @zh 根据四元数旋转信息计算矩阵
   */
  public static fromQuat<Out extends IMat3Like>(out: Out, q: IQuatLike) {
    const x = q.x;
    const y = q.y;
    const z = q.z;
    const w = q.w;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;

    const xx = x * x2;
    const yx = y * x2;
    const yy = y * y2;
    const zx = z * x2;
    const zy = z * y2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;

    out.m00 = 1 - yy - zz;
    out.m03 = yx - wz;
    out.m06 = zx + wy;

    out.m01 = yx + wz;
    out.m04 = 1 - xx - zz;
    out.m07 = zy - wx;

    out.m02 = zx - wy;
    out.m05 = zy + wx;
    out.m08 = 1 - xx - yy;

    return out;
  }

  /**
   * @en Take the first third order of the fourth order matrix and multiply by the third order matrix
   * @zh 取四阶矩阵的前三阶，与三阶矩阵相乘
   */
  public static multiplyMat4<Out extends IMat3Like>(
    out: Out,
    a: Out,
    b: IMat4Like,
  ): Out {
    const a00 = a.m00;
    const a01 = a.m01;
    const a02 = a.m02;
    const a10 = a.m03;
    const a11 = a.m04;
    const a12 = a.m05;
    const a20 = a.m06;
    const a21 = a.m07;
    const a22 = a.m08;

    const b00 = b.m00;
    const b01 = b.m01;
    const b02 = b.m02;
    const b10 = b.m04;
    const b11 = b.m05;
    const b12 = b.m06;
    const b20 = b.m08;
    const b21 = b.m09;
    const b22 = b.m10;

    out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
    out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
    out.m02 = b00 * a02 + b01 * a12 + b02 * a22;

    out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
    out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
    out.m05 = b10 * a02 + b11 * a12 + b12 * a22;

    out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
    out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
    out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
  }
}
