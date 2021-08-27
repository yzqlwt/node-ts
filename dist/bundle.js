/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mat3.ts":
/*!*********************!*\
  !*** ./src/mat3.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Mat3 = /** @class */ (function () {
    function Mat3(m00, m01, m02, m03, m04, m05, m06, m07, m08) {
        if (m00 === void 0) { m00 = 1; }
        if (m01 === void 0) { m01 = 0; }
        if (m02 === void 0) { m02 = 0; }
        if (m03 === void 0) { m03 = 0; }
        if (m04 === void 0) { m04 = 1; }
        if (m05 === void 0) { m05 = 0; }
        if (m06 === void 0) { m06 = 0; }
        if (m07 === void 0) { m07 = 0; }
        if (m08 === void 0) { m08 = 1; }
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
        }
        else {
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
    Mat3.fromQuat = function (out, q) {
        var x = q.x;
        var y = q.y;
        var z = q.z;
        var w = q.w;
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
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
    };
    /**
     * @en Take the first third order of the fourth order matrix and multiply by the third order matrix
     * @zh 取四阶矩阵的前三阶，与三阶矩阵相乘
     */
    Mat3.multiplyMat4 = function (out, a, b) {
        var a00 = a.m00;
        var a01 = a.m01;
        var a02 = a.m02;
        var a10 = a.m03;
        var a11 = a.m04;
        var a12 = a.m05;
        var a20 = a.m06;
        var a21 = a.m07;
        var a22 = a.m08;
        var b00 = b.m00;
        var b01 = b.m01;
        var b02 = b.m02;
        var b10 = b.m04;
        var b11 = b.m05;
        var b12 = b.m06;
        var b20 = b.m08;
        var b21 = b.m09;
        var b22 = b.m10;
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
    };
    return Mat3;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mat3);


/***/ }),

/***/ "./src/mat4.ts":
/*!*********************!*\
  !*** ./src/mat4.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Mat4 = /** @class */ (function () {
    function Mat4(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15) {
        if (m00 === void 0) { m00 = 1; }
        if (m01 === void 0) { m01 = 0; }
        if (m02 === void 0) { m02 = 0; }
        if (m03 === void 0) { m03 = 0; }
        if (m04 === void 0) { m04 = 0; }
        if (m05 === void 0) { m05 = 1; }
        if (m06 === void 0) { m06 = 0; }
        if (m07 === void 0) { m07 = 0; }
        if (m08 === void 0) { m08 = 0; }
        if (m09 === void 0) { m09 = 0; }
        if (m10 === void 0) { m10 = 1; }
        if (m11 === void 0) { m11 = 0; }
        if (m12 === void 0) { m12 = 0; }
        if (m13 === void 0) { m13 = 0; }
        if (m14 === void 0) { m14 = 0; }
        if (m15 === void 0) { m15 = 1; }
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
        }
        else {
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
    Mat4.fromRTS = function (out, q, v, s) {
        var x = q.x;
        var y = q.y;
        var z = q.z;
        var w = q.w;
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s.x;
        var sy = s.y;
        var sz = s.z;
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
    };
    /**
     * @en Multiply two matrices and save the results to out matrix
     * @zh 矩阵乘法
     */
    Mat4.multiply = function (out, a, b) {
        var a00 = a.m00;
        var a01 = a.m01;
        var a02 = a.m02;
        var a03 = a.m03;
        var a10 = a.m04;
        var a11 = a.m05;
        var a12 = a.m06;
        var a13 = a.m07;
        var a20 = a.m08;
        var a21 = a.m09;
        var a22 = a.m10;
        var a23 = a.m11;
        var a30 = a.m12;
        var a31 = a.m13;
        var a32 = a.m14;
        var a33 = a.m15;
        // Cache only the current line of the second matrix
        var b0 = b.m00;
        var b1 = b.m01;
        var b2 = b.m02;
        var b3 = b.m03;
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
    };
    return Mat4;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mat4);


/***/ }),

/***/ "./src/node.ts":
/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformBit": () => (/* binding */ TransformBit),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ "./src/vec3.ts");
/* harmony import */ var _mat3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3 */ "./src/mat3.ts");
/* harmony import */ var _mat4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4 */ "./src/mat4.ts");
/* harmony import */ var _quat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quat */ "./src/quat.ts");




var TransformBit;
(function (TransformBit) {
    /**
     * @zh
     * 无改变
     */
    TransformBit[TransformBit["NONE"] = 0] = "NONE";
    /**
     * @zh
     * 节点位置改变
     */
    TransformBit[TransformBit["POSITION"] = 1] = "POSITION";
    /**
     * @zh
     * 节点旋转
     */
    TransformBit[TransformBit["ROTATION"] = 2] = "ROTATION";
    /**
     * @zh
     * 节点缩放
     */
    TransformBit[TransformBit["SCALE"] = 4] = "SCALE";
    /**
     * @zh
     * 节点旋转及缩放
     */
    TransformBit[TransformBit["RS"] = 6] = "RS";
    /**
     * @zh
     * 节点平移，旋转及缩放
     */
    TransformBit[TransformBit["TRS"] = 7] = "TRS";
    TransformBit[TransformBit["TRS_MASK"] = -8] = "TRS_MASK";
})(TransformBit || (TransformBit = {}));
var qt_1 = new _quat__WEBPACK_IMPORTED_MODULE_3__.default();
var m3_1 = new _mat3__WEBPACK_IMPORTED_MODULE_1__.default();
var dirtyNodes = [];
var Node = /** @class */ (function () {
    function Node() {
        this._parent = null;
        // local transform
        this._lpos = new _vec3__WEBPACK_IMPORTED_MODULE_0__.default();
        this._lrot = new _quat__WEBPACK_IMPORTED_MODULE_3__.default();
        this._lscale = new _vec3__WEBPACK_IMPORTED_MODULE_0__.default(1, 1, 1);
        this._euler = new _vec3__WEBPACK_IMPORTED_MODULE_0__.default();
        this._dirtyFlagsPri = TransformBit.NONE; // does the world transform need to update?
        this._pos = new _vec3__WEBPACK_IMPORTED_MODULE_0__.default();
        this._rot = new _quat__WEBPACK_IMPORTED_MODULE_3__.default();
        this._scale = new _vec3__WEBPACK_IMPORTED_MODULE_0__.default(1, 1, 1);
        this._mat = new _mat4__WEBPACK_IMPORTED_MODULE_2__.default();
    }
    Object.defineProperty(Node.prototype, "_dirtyFlags", {
        get: function () {
            return this._dirtyFlagsPri;
        },
        set: function (flags) {
            this._dirtyFlagsPri = flags;
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype._setDirtyNode = function (idx, currNode) {
        dirtyNodes[idx] = currNode;
    };
    /**
     * @en Update the world transform information if outdated
     * @zh 更新节点的世界变换信息
     */
    Node.prototype.updateWorldTransform = function () {
        if (!this._dirtyFlags) {
            return;
        }
        // we need to recursively iterate this
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var cur = this;
        var i = 0;
        while (cur && cur._dirtyFlags) {
            // top level node
            this._setDirtyNode(i++, cur);
            cur = cur._parent;
        }
        var child;
        var dirtyBits = 0;
        while (i) {
            child = dirtyNodes[--i];
            dirtyBits |= child._dirtyFlags;
            if (cur) {
                if (dirtyBits & TransformBit.POSITION) {
                    _vec3__WEBPACK_IMPORTED_MODULE_0__.default.transformMat4(child._pos, child._lpos, cur._mat);
                    child._mat.m12 = child._pos.x;
                    child._mat.m13 = child._pos.y;
                    child._mat.m14 = child._pos.z;
                }
                if (dirtyBits & TransformBit.RS) {
                    _mat4__WEBPACK_IMPORTED_MODULE_2__.default.fromRTS(child._mat, child._lrot, child._lpos, child._lscale);
                    _mat4__WEBPACK_IMPORTED_MODULE_2__.default.multiply(child._mat, cur._mat, child._mat);
                    if (dirtyBits & TransformBit.ROTATION) {
                        _quat__WEBPACK_IMPORTED_MODULE_3__.default.multiply(child._rot, cur._rot, child._lrot);
                    }
                    _mat3__WEBPACK_IMPORTED_MODULE_1__.default.fromQuat(m3_1, _quat__WEBPACK_IMPORTED_MODULE_3__.default.conjugate(qt_1, child._rot));
                    _mat3__WEBPACK_IMPORTED_MODULE_1__.default.multiplyMat4(m3_1, m3_1, child._mat);
                    child._scale.x = m3_1.m00;
                    child._scale.y = m3_1.m04;
                    child._scale.z = m3_1.m08;
                }
            }
            else {
                if (dirtyBits & TransformBit.POSITION) {
                    _vec3__WEBPACK_IMPORTED_MODULE_0__.default.copy(child._pos, child._lpos);
                    child._mat.m12 = child._pos.x;
                    child._mat.m13 = child._pos.y;
                    child._mat.m14 = child._pos.z;
                }
                if (dirtyBits & TransformBit.RS) {
                    if (dirtyBits & TransformBit.ROTATION) {
                        _quat__WEBPACK_IMPORTED_MODULE_3__.default.copy(child._rot, child._lrot);
                    }
                    if (dirtyBits & TransformBit.SCALE) {
                        _vec3__WEBPACK_IMPORTED_MODULE_0__.default.copy(child._scale, child._lscale);
                        _mat4__WEBPACK_IMPORTED_MODULE_2__.default.fromRTS(child._mat, child._rot, child._pos, child._scale);
                    }
                }
            }
            child._dirtyFlags = TransformBit.NONE;
            cur = child;
        }
    };
    Node.clearDirtyNodes = function () {
        dirtyNodes.length = 0;
    };
    return Node;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);


/***/ }),

/***/ "./src/quat.ts":
/*!*********************!*\
  !*** ./src/quat.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Quat = /** @class */ (function () {
    function Quat(x, y, z, w) {
        if (x && typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
            this.w = x.w;
        }
        else {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
            this.w = w !== null && w !== void 0 ? w : 1;
        }
    }
    /**
     * @en Quaternion multiplication and save the results to out quaternion
     * @zh 四元数乘法
     */
    Quat.multiply = function (out, a, b) {
        var x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;
        var y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;
        var z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;
        var w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;
        out.x = x;
        out.y = y;
        out.z = z;
        out.w = w;
        return out;
    };
    /**
     * @en Copy the given quaternion to the out quaternion
     * @zh 复制目标四元数
     */
    Quat.copy = function (out, a) {
        out.x = a.x;
        out.y = a.y;
        out.z = a.z;
        out.w = a.w;
        return out;
    };
    /**
     * @en Conjugating a quaternion, it's equivalent to the inverse of the unit quaternion, but more efficient
     * @zh 求共轭四元数，对单位四元数与求逆等价，但更高效
     */
    Quat.conjugate = function (out, a) {
        out.x = -a.x;
        out.y = -a.y;
        out.z = -a.z;
        out.w = a.w;
        return out;
    };
    /**
     * @en Calculates the quaternion with Euler angles, the rotation order is YZX
     * @zh 根据欧拉角信息计算四元数，旋转顺序为 YZX
     */
    Quat.fromEuler = function (out, x, y, z) {
        var halfToRad = (0.5 * Math.PI) / 180.0;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;
        var sx = Math.sin(x);
        var cx = Math.cos(x);
        var sy = Math.sin(y);
        var cy = Math.cos(y);
        var sz = Math.sin(z);
        var cz = Math.cos(z);
        out.x = sx * cy * cz + cx * sy * sz;
        out.y = cx * sy * cz + sx * cy * sz;
        out.z = cx * cy * sz - sx * sy * cz;
        out.w = cx * cy * cz - sx * sy * sz;
        return out;
    };
    return Quat;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quat);


/***/ }),

/***/ "./src/vec3.ts":
/*!*********************!*\
  !*** ./src/vec3.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Vec3 = /** @class */ (function () {
    function Vec3(x, y, z) {
        if (x && typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        }
        else {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
        }
    }
    Vec3.prototype.set = function (x, y, z) {
        if (x && typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        }
        else {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
        }
        return this;
    };
    /**
     * @en Transforms the vec3 with a mat4. 4th vector component is implicitly '1'
     * @zh 将当前向量视为 w 分量为 1 的四维向量，应用四维矩阵变换到当前矩阵
     * @param matrix matrix to transform with
     */
    Vec3.transformMat4 = function (out, a, m) {
        var x = a.x;
        var y = a.y;
        var z = a.z;
        var rhw = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
        rhw = rhw ? Math.abs(1 / rhw) : 1;
        out.x = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) * rhw;
        out.y = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) * rhw;
        out.z = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) * rhw;
        return out;
    };
    Vec3.prototype.toString = function () {
        return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.z.toFixed(2) + ")";
    };
    Vec3.copy = function (out, a) {
        out.x = a.x;
        out.y = a.y;
        out.z = a.z;
        return out;
    };
    return Vec3;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vec3);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.ts");
/* harmony import */ var _quat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat */ "./src/quat.ts");


var node1 = new _node__WEBPACK_IMPORTED_MODULE_0__.default();
var node2 = new _node__WEBPACK_IMPORTED_MODULE_0__.default();
node1._parent = node2;
node2._lscale.x = 2;
node2._lscale.y = 2;
_quat__WEBPACK_IMPORTED_MODULE_1__.default.fromEuler(node2._lrot, 0, 0, 30);
_quat__WEBPACK_IMPORTED_MODULE_1__.default.fromEuler(node1._lrot, 0, 0, 30);
// node2._lpos.x = 100;
node1._dirtyFlags = _node__WEBPACK_IMPORTED_MODULE_0__.TransformBit.ROTATION;
node2._dirtyFlags = _node__WEBPACK_IMPORTED_MODULE_0__.TransformBit.RS;
node1.updateWorldTransform();
console.log(node1);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RHcEI7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSk07QUFDQTtBQUNBO0FBQ0E7QUFDbkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7QUFDckMsZUFBZSwwQ0FBSTtBQUNuQixlQUFlLDBDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQUk7QUFDN0IseUJBQXlCLDBDQUFJO0FBQzdCLDJCQUEyQiwwQ0FBSTtBQUMvQiwwQkFBMEIsMENBQUk7QUFDOUIsaURBQWlEO0FBQ2pELHdCQUF3QiwwQ0FBSTtBQUM1Qix3QkFBd0IsMENBQUk7QUFDNUIsMEJBQTBCLDBDQUFJO0FBQzlCLHdCQUF3QiwwQ0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFZO0FBQ2hDLG9CQUFvQixtREFBYTtBQUNqQztBQUNBLHdCQUF3QixtREFBYTtBQUNyQztBQUNBLG9CQUFvQixtREFBYSxPQUFPLG9EQUFjO0FBQ3RELG9CQUFvQix1REFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFTO0FBQ2pDO0FBQ0E7QUFDQSx3QkFBd0IsK0NBQVM7QUFDakMsd0JBQXdCLGtEQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4SXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3JEcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDbEI7QUFDMUIsZ0JBQWdCLDBDQUFJO0FBQ3BCLGdCQUFnQiwwQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxvREFBYztBQUNkLG9EQUFjO0FBQ2Q7QUFDQSxvQkFBb0Isd0RBQXFCO0FBQ3pDLG9CQUFvQixrREFBZTtBQUNuQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL21hdDMudHMiLCJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL21hdDQudHMiLCJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL3F1YXQudHMiLCJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL3ZlYzMudHMiLCJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vZGUtdHlwZXNjcmlwdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm9kZS10eXBlc2NyaXB0LWJvaWxlcnBsYXRlLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIE1hdDMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXQzKG0wMCwgbTAxLCBtMDIsIG0wMywgbTA0LCBtMDUsIG0wNiwgbTA3LCBtMDgpIHtcclxuICAgICAgICBpZiAobTAwID09PSB2b2lkIDApIHsgbTAwID0gMTsgfVxyXG4gICAgICAgIGlmIChtMDEgPT09IHZvaWQgMCkgeyBtMDEgPSAwOyB9XHJcbiAgICAgICAgaWYgKG0wMiA9PT0gdm9pZCAwKSB7IG0wMiA9IDA7IH1cclxuICAgICAgICBpZiAobTAzID09PSB2b2lkIDApIHsgbTAzID0gMDsgfVxyXG4gICAgICAgIGlmIChtMDQgPT09IHZvaWQgMCkgeyBtMDQgPSAxOyB9XHJcbiAgICAgICAgaWYgKG0wNSA9PT0gdm9pZCAwKSB7IG0wNSA9IDA7IH1cclxuICAgICAgICBpZiAobTA2ID09PSB2b2lkIDApIHsgbTA2ID0gMDsgfVxyXG4gICAgICAgIGlmIChtMDcgPT09IHZvaWQgMCkgeyBtMDcgPSAwOyB9XHJcbiAgICAgICAgaWYgKG0wOCA9PT0gdm9pZCAwKSB7IG0wOCA9IDE7IH1cclxuICAgICAgICBpZiAodHlwZW9mIG0wMCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5tMDAgPSBtMDAubTAwO1xyXG4gICAgICAgICAgICB0aGlzLm0wMSA9IG0wMC5tMDE7XHJcbiAgICAgICAgICAgIHRoaXMubTAyID0gbTAwLm0wMjtcclxuICAgICAgICAgICAgdGhpcy5tMDMgPSBtMDAubTAzO1xyXG4gICAgICAgICAgICB0aGlzLm0wNCA9IG0wMC5tMDQ7XHJcbiAgICAgICAgICAgIHRoaXMubTA1ID0gbTAwLm0wNTtcclxuICAgICAgICAgICAgdGhpcy5tMDYgPSBtMDAubTA2O1xyXG4gICAgICAgICAgICB0aGlzLm0wNyA9IG0wMC5tMDc7XHJcbiAgICAgICAgICAgIHRoaXMubTA4ID0gbTAwLm0wODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubTAwID0gbTAwO1xyXG4gICAgICAgICAgICB0aGlzLm0wMSA9IG0wMTtcclxuICAgICAgICAgICAgdGhpcy5tMDIgPSBtMDI7XHJcbiAgICAgICAgICAgIHRoaXMubTAzID0gbTAzO1xyXG4gICAgICAgICAgICB0aGlzLm0wNCA9IG0wNDtcclxuICAgICAgICAgICAgdGhpcy5tMDUgPSBtMDU7XHJcbiAgICAgICAgICAgIHRoaXMubTA2ID0gbTA2O1xyXG4gICAgICAgICAgICB0aGlzLm0wNyA9IG0wNztcclxuICAgICAgICAgICAgdGhpcy5tMDggPSBtMDg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gU2V0cyB0aGUgZ2l2ZW4gbWF0cml4IHdpdGggdGhlIGdpdmVuIHF1YXRlcm5pb24gYW5kIHNhdmUgdGhlIHJlc3VsdHMgdG8gb3V0IG1hdHJpeFxyXG4gICAgICogQHpoIOagueaNruWbm+WFg+aVsOaXi+i9rOS/oeaBr+iuoeeul+efqemYtVxyXG4gICAgICovXHJcbiAgICBNYXQzLmZyb21RdWF0ID0gZnVuY3Rpb24gKG91dCwgcSkge1xyXG4gICAgICAgIHZhciB4ID0gcS54O1xyXG4gICAgICAgIHZhciB5ID0gcS55O1xyXG4gICAgICAgIHZhciB6ID0gcS56O1xyXG4gICAgICAgIHZhciB3ID0gcS53O1xyXG4gICAgICAgIHZhciB4MiA9IHggKyB4O1xyXG4gICAgICAgIHZhciB5MiA9IHkgKyB5O1xyXG4gICAgICAgIHZhciB6MiA9IHogKyB6O1xyXG4gICAgICAgIHZhciB4eCA9IHggKiB4MjtcclxuICAgICAgICB2YXIgeXggPSB5ICogeDI7XHJcbiAgICAgICAgdmFyIHl5ID0geSAqIHkyO1xyXG4gICAgICAgIHZhciB6eCA9IHogKiB4MjtcclxuICAgICAgICB2YXIgenkgPSB6ICogeTI7XHJcbiAgICAgICAgdmFyIHp6ID0geiAqIHoyO1xyXG4gICAgICAgIHZhciB3eCA9IHcgKiB4MjtcclxuICAgICAgICB2YXIgd3kgPSB3ICogeTI7XHJcbiAgICAgICAgdmFyIHd6ID0gdyAqIHoyO1xyXG4gICAgICAgIG91dC5tMDAgPSAxIC0geXkgLSB6ejtcclxuICAgICAgICBvdXQubTAzID0geXggLSB3ejtcclxuICAgICAgICBvdXQubTA2ID0genggKyB3eTtcclxuICAgICAgICBvdXQubTAxID0geXggKyB3ejtcclxuICAgICAgICBvdXQubTA0ID0gMSAtIHh4IC0geno7XHJcbiAgICAgICAgb3V0Lm0wNyA9IHp5IC0gd3g7XHJcbiAgICAgICAgb3V0Lm0wMiA9IHp4IC0gd3k7XHJcbiAgICAgICAgb3V0Lm0wNSA9IHp5ICsgd3g7XHJcbiAgICAgICAgb3V0Lm0wOCA9IDEgLSB4eCAtIHl5O1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZW4gVGFrZSB0aGUgZmlyc3QgdGhpcmQgb3JkZXIgb2YgdGhlIGZvdXJ0aCBvcmRlciBtYXRyaXggYW5kIG11bHRpcGx5IGJ5IHRoZSB0aGlyZCBvcmRlciBtYXRyaXhcclxuICAgICAqIEB6aCDlj5blm5vpmLbnn6npmLXnmoTliY3kuInpmLbvvIzkuI7kuInpmLbnn6npmLXnm7jkuZhcclxuICAgICAqL1xyXG4gICAgTWF0My5tdWx0aXBseU1hdDQgPSBmdW5jdGlvbiAob3V0LCBhLCBiKSB7XHJcbiAgICAgICAgdmFyIGEwMCA9IGEubTAwO1xyXG4gICAgICAgIHZhciBhMDEgPSBhLm0wMTtcclxuICAgICAgICB2YXIgYTAyID0gYS5tMDI7XHJcbiAgICAgICAgdmFyIGExMCA9IGEubTAzO1xyXG4gICAgICAgIHZhciBhMTEgPSBhLm0wNDtcclxuICAgICAgICB2YXIgYTEyID0gYS5tMDU7XHJcbiAgICAgICAgdmFyIGEyMCA9IGEubTA2O1xyXG4gICAgICAgIHZhciBhMjEgPSBhLm0wNztcclxuICAgICAgICB2YXIgYTIyID0gYS5tMDg7XHJcbiAgICAgICAgdmFyIGIwMCA9IGIubTAwO1xyXG4gICAgICAgIHZhciBiMDEgPSBiLm0wMTtcclxuICAgICAgICB2YXIgYjAyID0gYi5tMDI7XHJcbiAgICAgICAgdmFyIGIxMCA9IGIubTA0O1xyXG4gICAgICAgIHZhciBiMTEgPSBiLm0wNTtcclxuICAgICAgICB2YXIgYjEyID0gYi5tMDY7XHJcbiAgICAgICAgdmFyIGIyMCA9IGIubTA4O1xyXG4gICAgICAgIHZhciBiMjEgPSBiLm0wOTtcclxuICAgICAgICB2YXIgYjIyID0gYi5tMTA7XHJcbiAgICAgICAgb3V0Lm0wMCA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMDtcclxuICAgICAgICBvdXQubTAxID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxO1xyXG4gICAgICAgIG91dC5tMDIgPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjI7XHJcbiAgICAgICAgb3V0Lm0wMyA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMDtcclxuICAgICAgICBvdXQubTA0ID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxO1xyXG4gICAgICAgIG91dC5tMDUgPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjI7XHJcbiAgICAgICAgb3V0Lm0wNiA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMDtcclxuICAgICAgICBvdXQubTA3ID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxO1xyXG4gICAgICAgIG91dC5tMDggPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjI7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0MztcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgTWF0MztcclxuIiwidmFyIE1hdDQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXQ0KG0wMCwgbTAxLCBtMDIsIG0wMywgbTA0LCBtMDUsIG0wNiwgbTA3LCBtMDgsIG0wOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSkge1xyXG4gICAgICAgIGlmIChtMDAgPT09IHZvaWQgMCkgeyBtMDAgPSAxOyB9XHJcbiAgICAgICAgaWYgKG0wMSA9PT0gdm9pZCAwKSB7IG0wMSA9IDA7IH1cclxuICAgICAgICBpZiAobTAyID09PSB2b2lkIDApIHsgbTAyID0gMDsgfVxyXG4gICAgICAgIGlmIChtMDMgPT09IHZvaWQgMCkgeyBtMDMgPSAwOyB9XHJcbiAgICAgICAgaWYgKG0wNCA9PT0gdm9pZCAwKSB7IG0wNCA9IDA7IH1cclxuICAgICAgICBpZiAobTA1ID09PSB2b2lkIDApIHsgbTA1ID0gMTsgfVxyXG4gICAgICAgIGlmIChtMDYgPT09IHZvaWQgMCkgeyBtMDYgPSAwOyB9XHJcbiAgICAgICAgaWYgKG0wNyA9PT0gdm9pZCAwKSB7IG0wNyA9IDA7IH1cclxuICAgICAgICBpZiAobTA4ID09PSB2b2lkIDApIHsgbTA4ID0gMDsgfVxyXG4gICAgICAgIGlmIChtMDkgPT09IHZvaWQgMCkgeyBtMDkgPSAwOyB9XHJcbiAgICAgICAgaWYgKG0xMCA9PT0gdm9pZCAwKSB7IG0xMCA9IDE7IH1cclxuICAgICAgICBpZiAobTExID09PSB2b2lkIDApIHsgbTExID0gMDsgfVxyXG4gICAgICAgIGlmIChtMTIgPT09IHZvaWQgMCkgeyBtMTIgPSAwOyB9XHJcbiAgICAgICAgaWYgKG0xMyA9PT0gdm9pZCAwKSB7IG0xMyA9IDA7IH1cclxuICAgICAgICBpZiAobTE0ID09PSB2b2lkIDApIHsgbTE0ID0gMDsgfVxyXG4gICAgICAgIGlmIChtMTUgPT09IHZvaWQgMCkgeyBtMTUgPSAxOyB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtMDAgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubTAwID0gbTAwLm0wMDtcclxuICAgICAgICAgICAgdGhpcy5tMDEgPSBtMDAubTAxO1xyXG4gICAgICAgICAgICB0aGlzLm0wMiA9IG0wMC5tMDI7XHJcbiAgICAgICAgICAgIHRoaXMubTAzID0gbTAwLm0wMztcclxuICAgICAgICAgICAgdGhpcy5tMDQgPSBtMDAubTA0O1xyXG4gICAgICAgICAgICB0aGlzLm0wNSA9IG0wMC5tMDU7XHJcbiAgICAgICAgICAgIHRoaXMubTA2ID0gbTAwLm0wNjtcclxuICAgICAgICAgICAgdGhpcy5tMDcgPSBtMDAubTA3O1xyXG4gICAgICAgICAgICB0aGlzLm0wOCA9IG0wMC5tMDg7XHJcbiAgICAgICAgICAgIHRoaXMubTA5ID0gbTAwLm0wOTtcclxuICAgICAgICAgICAgdGhpcy5tMTAgPSBtMDAubTEwO1xyXG4gICAgICAgICAgICB0aGlzLm0xMSA9IG0wMC5tMTE7XHJcbiAgICAgICAgICAgIHRoaXMubTEyID0gbTAwLm0xMjtcclxuICAgICAgICAgICAgdGhpcy5tMTMgPSBtMDAubTEzO1xyXG4gICAgICAgICAgICB0aGlzLm0xNCA9IG0wMC5tMTQ7XHJcbiAgICAgICAgICAgIHRoaXMubTE1ID0gbTAwLm0xNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubTAwID0gbTAwO1xyXG4gICAgICAgICAgICB0aGlzLm0wMSA9IG0wMTtcclxuICAgICAgICAgICAgdGhpcy5tMDIgPSBtMDI7XHJcbiAgICAgICAgICAgIHRoaXMubTAzID0gbTAzO1xyXG4gICAgICAgICAgICB0aGlzLm0wNCA9IG0wNDtcclxuICAgICAgICAgICAgdGhpcy5tMDUgPSBtMDU7XHJcbiAgICAgICAgICAgIHRoaXMubTA2ID0gbTA2O1xyXG4gICAgICAgICAgICB0aGlzLm0wNyA9IG0wNztcclxuICAgICAgICAgICAgdGhpcy5tMDggPSBtMDg7XHJcbiAgICAgICAgICAgIHRoaXMubTA5ID0gbTA5O1xyXG4gICAgICAgICAgICB0aGlzLm0xMCA9IG0xMDtcclxuICAgICAgICAgICAgdGhpcy5tMTEgPSBtMTE7XHJcbiAgICAgICAgICAgIHRoaXMubTEyID0gbTEyO1xyXG4gICAgICAgICAgICB0aGlzLm0xMyA9IG0xMztcclxuICAgICAgICAgICAgdGhpcy5tMTQgPSBtMTQ7XHJcbiAgICAgICAgICAgIHRoaXMubTE1ID0gbTE1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGVuIFJlc2V0cyB0aGUgbWF0cml4IHZhbHVlcyBieSB0aGUgZ2l2ZW4gcm90YXRpb24gcXVhdGVybmlvbiwgdHJhbnNsYXRpb24gdmVjdG9yIGFuZCBzY2FsZSB2ZWN0b3JcclxuICAgICAqIEB6aCDph43nva7lvZPliY3nn6npmLXnmoTlgLzvvIzkvb/lhbbooajnpLrmjIflrprnmoTml4vovazjgIHnvKnmlL7jgIHkvY3np7vkvp3mrKHnu4TlkIjnmoTlj5jmjaLjgIJcclxuICAgICAqIEBwYXJhbSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cclxuICAgICAqIEBwYXJhbSB2IFRyYW5zbGF0aW9uIHZlY3RvclxyXG4gICAgICogQHBhcmFtIHMgU2NhbGluZyB2ZWN0b3JcclxuICAgICAqIEByZXR1cm4gYHRoaXNgXHJcbiAgICAgKi9cclxuICAgIE1hdDQuZnJvbVJUUyA9IGZ1bmN0aW9uIChvdXQsIHEsIHYsIHMpIHtcclxuICAgICAgICB2YXIgeCA9IHEueDtcclxuICAgICAgICB2YXIgeSA9IHEueTtcclxuICAgICAgICB2YXIgeiA9IHEuejtcclxuICAgICAgICB2YXIgdyA9IHEudztcclxuICAgICAgICB2YXIgeDIgPSB4ICsgeDtcclxuICAgICAgICB2YXIgeTIgPSB5ICsgeTtcclxuICAgICAgICB2YXIgejIgPSB6ICsgejtcclxuICAgICAgICB2YXIgeHggPSB4ICogeDI7XHJcbiAgICAgICAgdmFyIHh5ID0geCAqIHkyO1xyXG4gICAgICAgIHZhciB4eiA9IHggKiB6MjtcclxuICAgICAgICB2YXIgeXkgPSB5ICogeTI7XHJcbiAgICAgICAgdmFyIHl6ID0geSAqIHoyO1xyXG4gICAgICAgIHZhciB6eiA9IHogKiB6MjtcclxuICAgICAgICB2YXIgd3ggPSB3ICogeDI7XHJcbiAgICAgICAgdmFyIHd5ID0gdyAqIHkyO1xyXG4gICAgICAgIHZhciB3eiA9IHcgKiB6MjtcclxuICAgICAgICB2YXIgc3ggPSBzLng7XHJcbiAgICAgICAgdmFyIHN5ID0gcy55O1xyXG4gICAgICAgIHZhciBzeiA9IHMuejtcclxuICAgICAgICBvdXQubTAwID0gKDEgLSAoeXkgKyB6eikpICogc3g7XHJcbiAgICAgICAgb3V0Lm0wMSA9ICh4eSArIHd6KSAqIHN4O1xyXG4gICAgICAgIG91dC5tMDIgPSAoeHogLSB3eSkgKiBzeDtcclxuICAgICAgICBvdXQubTAzID0gMDtcclxuICAgICAgICBvdXQubTA0ID0gKHh5IC0gd3opICogc3k7XHJcbiAgICAgICAgb3V0Lm0wNSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xyXG4gICAgICAgIG91dC5tMDYgPSAoeXogKyB3eCkgKiBzeTtcclxuICAgICAgICBvdXQubTA3ID0gMDtcclxuICAgICAgICBvdXQubTA4ID0gKHh6ICsgd3kpICogc3o7XHJcbiAgICAgICAgb3V0Lm0wOSA9ICh5eiAtIHd4KSAqIHN6O1xyXG4gICAgICAgIG91dC5tMTAgPSAoMSAtICh4eCArIHl5KSkgKiBzejtcclxuICAgICAgICBvdXQubTExID0gMDtcclxuICAgICAgICBvdXQubTEyID0gdi54O1xyXG4gICAgICAgIG91dC5tMTMgPSB2Lnk7XHJcbiAgICAgICAgb3V0Lm0xNCA9IHYuejtcclxuICAgICAgICBvdXQubTE1ID0gMTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGVuIE11bHRpcGx5IHR3byBtYXRyaWNlcyBhbmQgc2F2ZSB0aGUgcmVzdWx0cyB0byBvdXQgbWF0cml4XHJcbiAgICAgKiBAemgg55+p6Zi15LmY5rOVXHJcbiAgICAgKi9cclxuICAgIE1hdDQubXVsdGlwbHkgPSBmdW5jdGlvbiAob3V0LCBhLCBiKSB7XHJcbiAgICAgICAgdmFyIGEwMCA9IGEubTAwO1xyXG4gICAgICAgIHZhciBhMDEgPSBhLm0wMTtcclxuICAgICAgICB2YXIgYTAyID0gYS5tMDI7XHJcbiAgICAgICAgdmFyIGEwMyA9IGEubTAzO1xyXG4gICAgICAgIHZhciBhMTAgPSBhLm0wNDtcclxuICAgICAgICB2YXIgYTExID0gYS5tMDU7XHJcbiAgICAgICAgdmFyIGExMiA9IGEubTA2O1xyXG4gICAgICAgIHZhciBhMTMgPSBhLm0wNztcclxuICAgICAgICB2YXIgYTIwID0gYS5tMDg7XHJcbiAgICAgICAgdmFyIGEyMSA9IGEubTA5O1xyXG4gICAgICAgIHZhciBhMjIgPSBhLm0xMDtcclxuICAgICAgICB2YXIgYTIzID0gYS5tMTE7XHJcbiAgICAgICAgdmFyIGEzMCA9IGEubTEyO1xyXG4gICAgICAgIHZhciBhMzEgPSBhLm0xMztcclxuICAgICAgICB2YXIgYTMyID0gYS5tMTQ7XHJcbiAgICAgICAgdmFyIGEzMyA9IGEubTE1O1xyXG4gICAgICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxyXG4gICAgICAgIHZhciBiMCA9IGIubTAwO1xyXG4gICAgICAgIHZhciBiMSA9IGIubTAxO1xyXG4gICAgICAgIHZhciBiMiA9IGIubTAyO1xyXG4gICAgICAgIHZhciBiMyA9IGIubTAzO1xyXG4gICAgICAgIG91dC5tMDAgPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcclxuICAgICAgICBvdXQubTAxID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XHJcbiAgICAgICAgb3V0Lm0wMiA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xyXG4gICAgICAgIG91dC5tMDMgPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcclxuICAgICAgICBiMCA9IGIubTA0O1xyXG4gICAgICAgIGIxID0gYi5tMDU7XHJcbiAgICAgICAgYjIgPSBiLm0wNjtcclxuICAgICAgICBiMyA9IGIubTA3O1xyXG4gICAgICAgIG91dC5tMDQgPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcclxuICAgICAgICBvdXQubTA1ID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XHJcbiAgICAgICAgb3V0Lm0wNiA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xyXG4gICAgICAgIG91dC5tMDcgPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcclxuICAgICAgICBiMCA9IGIubTA4O1xyXG4gICAgICAgIGIxID0gYi5tMDk7XHJcbiAgICAgICAgYjIgPSBiLm0xMDtcclxuICAgICAgICBiMyA9IGIubTExO1xyXG4gICAgICAgIG91dC5tMDggPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcclxuICAgICAgICBvdXQubTA5ID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XHJcbiAgICAgICAgb3V0Lm0xMCA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xyXG4gICAgICAgIG91dC5tMTEgPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcclxuICAgICAgICBiMCA9IGIubTEyO1xyXG4gICAgICAgIGIxID0gYi5tMTM7XHJcbiAgICAgICAgYjIgPSBiLm0xNDtcclxuICAgICAgICBiMyA9IGIubTE1O1xyXG4gICAgICAgIG91dC5tMTIgPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcclxuICAgICAgICBvdXQubTEzID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XHJcbiAgICAgICAgb3V0Lm0xNCA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xyXG4gICAgICAgIG91dC5tMTUgPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYXQ0O1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBNYXQ0O1xyXG4iLCJpbXBvcnQgVmVjMyBmcm9tICcuL3ZlYzMnO1xyXG5pbXBvcnQgTWF0MyBmcm9tICcuL21hdDMnO1xyXG5pbXBvcnQgTWF0NCBmcm9tICcuL21hdDQnO1xyXG5pbXBvcnQgUXVhdCBmcm9tICcuL3F1YXQnO1xyXG5leHBvcnQgdmFyIFRyYW5zZm9ybUJpdDtcclxuKGZ1bmN0aW9uIChUcmFuc2Zvcm1CaXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDml6DmlLnlj5hcclxuICAgICAqL1xyXG4gICAgVHJhbnNmb3JtQml0W1RyYW5zZm9ybUJpdFtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOiKgueCueS9jee9ruaUueWPmFxyXG4gICAgICovXHJcbiAgICBUcmFuc2Zvcm1CaXRbVHJhbnNmb3JtQml0W1wiUE9TSVRJT05cIl0gPSAxXSA9IFwiUE9TSVRJT05cIjtcclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDoioLngrnml4vovaxcclxuICAgICAqL1xyXG4gICAgVHJhbnNmb3JtQml0W1RyYW5zZm9ybUJpdFtcIlJPVEFUSU9OXCJdID0gMl0gPSBcIlJPVEFUSU9OXCI7XHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6IqC54K557yp5pS+XHJcbiAgICAgKi9cclxuICAgIFRyYW5zZm9ybUJpdFtUcmFuc2Zvcm1CaXRbXCJTQ0FMRVwiXSA9IDRdID0gXCJTQ0FMRVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOiKgueCueaXi+i9rOWPiue8qeaUvlxyXG4gICAgICovXHJcbiAgICBUcmFuc2Zvcm1CaXRbVHJhbnNmb3JtQml0W1wiUlNcIl0gPSA2XSA9IFwiUlNcIjtcclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDoioLngrnlubPnp7vvvIzml4vovazlj4rnvKnmlL5cclxuICAgICAqL1xyXG4gICAgVHJhbnNmb3JtQml0W1RyYW5zZm9ybUJpdFtcIlRSU1wiXSA9IDddID0gXCJUUlNcIjtcclxuICAgIFRyYW5zZm9ybUJpdFtUcmFuc2Zvcm1CaXRbXCJUUlNfTUFTS1wiXSA9IC04XSA9IFwiVFJTX01BU0tcIjtcclxufSkoVHJhbnNmb3JtQml0IHx8IChUcmFuc2Zvcm1CaXQgPSB7fSkpO1xyXG52YXIgcXRfMSA9IG5ldyBRdWF0KCk7XHJcbnZhciBtM18xID0gbmV3IE1hdDMoKTtcclxudmFyIGRpcnR5Tm9kZXMgPSBbXTtcclxudmFyIE5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOb2RlKCkge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XHJcbiAgICAgICAgLy8gbG9jYWwgdHJhbnNmb3JtXHJcbiAgICAgICAgdGhpcy5fbHBvcyA9IG5ldyBWZWMzKCk7XHJcbiAgICAgICAgdGhpcy5fbHJvdCA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgdGhpcy5fbHNjYWxlID0gbmV3IFZlYzMoMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5fZXVsZXIgPSBuZXcgVmVjMygpO1xyXG4gICAgICAgIHRoaXMuX2RpcnR5RmxhZ3NQcmkgPSBUcmFuc2Zvcm1CaXQuTk9ORTsgLy8gZG9lcyB0aGUgd29ybGQgdHJhbnNmb3JtIG5lZWQgdG8gdXBkYXRlP1xyXG4gICAgICAgIHRoaXMuX3BvcyA9IG5ldyBWZWMzKCk7XHJcbiAgICAgICAgdGhpcy5fcm90ID0gbmV3IFF1YXQoKTtcclxuICAgICAgICB0aGlzLl9zY2FsZSA9IG5ldyBWZWMzKDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMuX21hdCA9IG5ldyBNYXQ0KCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwiX2RpcnR5RmxhZ3NcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlydHlGbGFnc1ByaTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGZsYWdzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5RmxhZ3NQcmkgPSBmbGFncztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBOb2RlLnByb3RvdHlwZS5fc2V0RGlydHlOb2RlID0gZnVuY3Rpb24gKGlkeCwgY3Vyck5vZGUpIHtcclxuICAgICAgICBkaXJ0eU5vZGVzW2lkeF0gPSBjdXJyTm9kZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBlbiBVcGRhdGUgdGhlIHdvcmxkIHRyYW5zZm9ybSBpbmZvcm1hdGlvbiBpZiBvdXRkYXRlZFxyXG4gICAgICogQHpoIOabtOaWsOiKgueCueeahOS4lueVjOWPmOaNouS/oeaBr1xyXG4gICAgICovXHJcbiAgICBOb2RlLnByb3RvdHlwZS51cGRhdGVXb3JsZFRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RpcnR5RmxhZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGl0ZXJhdGUgdGhpc1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xyXG4gICAgICAgIHZhciBjdXIgPSB0aGlzO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB3aGlsZSAoY3VyICYmIGN1ci5fZGlydHlGbGFncykge1xyXG4gICAgICAgICAgICAvLyB0b3AgbGV2ZWwgbm9kZVxyXG4gICAgICAgICAgICB0aGlzLl9zZXREaXJ0eU5vZGUoaSsrLCBjdXIpO1xyXG4gICAgICAgICAgICBjdXIgPSBjdXIuX3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNoaWxkO1xyXG4gICAgICAgIHZhciBkaXJ0eUJpdHMgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpKSB7XHJcbiAgICAgICAgICAgIGNoaWxkID0gZGlydHlOb2Rlc1stLWldO1xyXG4gICAgICAgICAgICBkaXJ0eUJpdHMgfD0gY2hpbGQuX2RpcnR5RmxhZ3M7XHJcbiAgICAgICAgICAgIGlmIChjdXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJ0eUJpdHMgJiBUcmFuc2Zvcm1CaXQuUE9TSVRJT04pIHtcclxuICAgICAgICAgICAgICAgICAgICBWZWMzLnRyYW5zZm9ybU1hdDQoY2hpbGQuX3BvcywgY2hpbGQuX2xwb3MsIGN1ci5fbWF0KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fbWF0Lm0xMiA9IGNoaWxkLl9wb3MueDtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fbWF0Lm0xMyA9IGNoaWxkLl9wb3MueTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fbWF0Lm0xNCA9IGNoaWxkLl9wb3MuejtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaXJ0eUJpdHMgJiBUcmFuc2Zvcm1CaXQuUlMpIHtcclxuICAgICAgICAgICAgICAgICAgICBNYXQ0LmZyb21SVFMoY2hpbGQuX21hdCwgY2hpbGQuX2xyb3QsIGNoaWxkLl9scG9zLCBjaGlsZC5fbHNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBNYXQ0Lm11bHRpcGx5KGNoaWxkLl9tYXQsIGN1ci5fbWF0LCBjaGlsZC5fbWF0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlydHlCaXRzICYgVHJhbnNmb3JtQml0LlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1YXQubXVsdGlwbHkoY2hpbGQuX3JvdCwgY3VyLl9yb3QsIGNoaWxkLl9scm90KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0My5mcm9tUXVhdChtM18xLCBRdWF0LmNvbmp1Z2F0ZShxdF8xLCBjaGlsZC5fcm90KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0My5tdWx0aXBseU1hdDQobTNfMSwgbTNfMSwgY2hpbGQuX21hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuX3NjYWxlLnggPSBtM18xLm0wMDtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fc2NhbGUueSA9IG0zXzEubTA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLl9zY2FsZS56ID0gbTNfMS5tMDg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlydHlCaXRzICYgVHJhbnNmb3JtQml0LlBPU0lUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVmVjMy5jb3B5KGNoaWxkLl9wb3MsIGNoaWxkLl9scG9zKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fbWF0Lm0xMiA9IGNoaWxkLl9wb3MueDtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fbWF0Lm0xMyA9IGNoaWxkLl9wb3MueTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fbWF0Lm0xNCA9IGNoaWxkLl9wb3MuejtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaXJ0eUJpdHMgJiBUcmFuc2Zvcm1CaXQuUlMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlydHlCaXRzICYgVHJhbnNmb3JtQml0LlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1YXQuY29weShjaGlsZC5fcm90LCBjaGlsZC5fbHJvdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJ0eUJpdHMgJiBUcmFuc2Zvcm1CaXQuU0NBTEUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmVjMy5jb3B5KGNoaWxkLl9zY2FsZSwgY2hpbGQuX2xzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdDQuZnJvbVJUUyhjaGlsZC5fbWF0LCBjaGlsZC5fcm90LCBjaGlsZC5fcG9zLCBjaGlsZC5fc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGlsZC5fZGlydHlGbGFncyA9IFRyYW5zZm9ybUJpdC5OT05FO1xyXG4gICAgICAgICAgICBjdXIgPSBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTm9kZS5jbGVhckRpcnR5Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGlydHlOb2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOb2RlO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xyXG4iLCJ2YXIgUXVhdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFF1YXQoeCwgeSwgeiwgdykge1xyXG4gICAgICAgIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4Lng7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHgueTtcclxuICAgICAgICAgICAgdGhpcy56ID0geC56O1xyXG4gICAgICAgICAgICB0aGlzLncgPSB4Lnc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy56ID0geiB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLncgPSB3ICE9PSBudWxsICYmIHcgIT09IHZvaWQgMCA/IHcgOiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGVuIFF1YXRlcm5pb24gbXVsdGlwbGljYXRpb24gYW5kIHNhdmUgdGhlIHJlc3VsdHMgdG8gb3V0IHF1YXRlcm5pb25cclxuICAgICAqIEB6aCDlm5vlhYPmlbDkuZjms5VcclxuICAgICAqL1xyXG4gICAgUXVhdC5tdWx0aXBseSA9IGZ1bmN0aW9uIChvdXQsIGEsIGIpIHtcclxuICAgICAgICB2YXIgeCA9IGEueCAqIGIudyArIGEudyAqIGIueCArIGEueSAqIGIueiAtIGEueiAqIGIueTtcclxuICAgICAgICB2YXIgeSA9IGEueSAqIGIudyArIGEudyAqIGIueSArIGEueiAqIGIueCAtIGEueCAqIGIuejtcclxuICAgICAgICB2YXIgeiA9IGEueiAqIGIudyArIGEudyAqIGIueiArIGEueCAqIGIueSAtIGEueSAqIGIueDtcclxuICAgICAgICB2YXIgdyA9IGEudyAqIGIudyAtIGEueCAqIGIueCAtIGEueSAqIGIueSAtIGEueiAqIGIuejtcclxuICAgICAgICBvdXQueCA9IHg7XHJcbiAgICAgICAgb3V0LnkgPSB5O1xyXG4gICAgICAgIG91dC56ID0gejtcclxuICAgICAgICBvdXQudyA9IHc7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBlbiBDb3B5IHRoZSBnaXZlbiBxdWF0ZXJuaW9uIHRvIHRoZSBvdXQgcXVhdGVybmlvblxyXG4gICAgICogQHpoIOWkjeWItuebruagh+Wbm+WFg+aVsFxyXG4gICAgICovXHJcbiAgICBRdWF0LmNvcHkgPSBmdW5jdGlvbiAob3V0LCBhKSB7XHJcbiAgICAgICAgb3V0LnggPSBhLng7XHJcbiAgICAgICAgb3V0LnkgPSBhLnk7XHJcbiAgICAgICAgb3V0LnogPSBhLno7XHJcbiAgICAgICAgb3V0LncgPSBhLnc7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBlbiBDb25qdWdhdGluZyBhIHF1YXRlcm5pb24sIGl0J3MgZXF1aXZhbGVudCB0byB0aGUgaW52ZXJzZSBvZiB0aGUgdW5pdCBxdWF0ZXJuaW9uLCBidXQgbW9yZSBlZmZpY2llbnRcclxuICAgICAqIEB6aCDmsYLlhbHova3lm5vlhYPmlbDvvIzlr7nljZXkvY3lm5vlhYPmlbDkuI7msYLpgIbnrYnku7fvvIzkvYbmm7Tpq5jmlYhcclxuICAgICAqL1xyXG4gICAgUXVhdC5jb25qdWdhdGUgPSBmdW5jdGlvbiAob3V0LCBhKSB7XHJcbiAgICAgICAgb3V0LnggPSAtYS54O1xyXG4gICAgICAgIG91dC55ID0gLWEueTtcclxuICAgICAgICBvdXQueiA9IC1hLno7XHJcbiAgICAgICAgb3V0LncgPSBhLnc7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBlbiBDYWxjdWxhdGVzIHRoZSBxdWF0ZXJuaW9uIHdpdGggRXVsZXIgYW5nbGVzLCB0aGUgcm90YXRpb24gb3JkZXIgaXMgWVpYXHJcbiAgICAgKiBAemgg5qC55o2u5qyn5ouJ6KeS5L+h5oGv6K6h566X5Zub5YWD5pWw77yM5peL6L2s6aG65bqP5Li6IFlaWFxyXG4gICAgICovXHJcbiAgICBRdWF0LmZyb21FdWxlciA9IGZ1bmN0aW9uIChvdXQsIHgsIHksIHopIHtcclxuICAgICAgICB2YXIgaGFsZlRvUmFkID0gKDAuNSAqIE1hdGguUEkpIC8gMTgwLjA7XHJcbiAgICAgICAgeCAqPSBoYWxmVG9SYWQ7XHJcbiAgICAgICAgeSAqPSBoYWxmVG9SYWQ7XHJcbiAgICAgICAgeiAqPSBoYWxmVG9SYWQ7XHJcbiAgICAgICAgdmFyIHN4ID0gTWF0aC5zaW4oeCk7XHJcbiAgICAgICAgdmFyIGN4ID0gTWF0aC5jb3MoeCk7XHJcbiAgICAgICAgdmFyIHN5ID0gTWF0aC5zaW4oeSk7XHJcbiAgICAgICAgdmFyIGN5ID0gTWF0aC5jb3MoeSk7XHJcbiAgICAgICAgdmFyIHN6ID0gTWF0aC5zaW4oeik7XHJcbiAgICAgICAgdmFyIGN6ID0gTWF0aC5jb3Moeik7XHJcbiAgICAgICAgb3V0LnggPSBzeCAqIGN5ICogY3ogKyBjeCAqIHN5ICogc3o7XHJcbiAgICAgICAgb3V0LnkgPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XHJcbiAgICAgICAgb3V0LnogPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XHJcbiAgICAgICAgb3V0LncgPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUXVhdDtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgUXVhdDtcclxuIiwidmFyIFZlYzMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWMzKHgsIHksIHopIHtcclxuICAgICAgICBpZiAoeCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geC54O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB4Lnk7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IHguejtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLnogPSB6IHx8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVmVjMy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHgsIHksIHopIHtcclxuICAgICAgICBpZiAoeCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geC54O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB4Lnk7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IHguejtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLnogPSB6IHx8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGVuIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDQuIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXHJcbiAgICAgKiBAemgg5bCG5b2T5YmN5ZCR6YeP6KeG5Li6IHcg5YiG6YeP5Li6IDEg55qE5Zub57u05ZCR6YeP77yM5bqU55So5Zub57u055+p6Zi15Y+Y5o2i5Yiw5b2T5YmN55+p6Zi1XHJcbiAgICAgKiBAcGFyYW0gbWF0cml4IG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gICAgICovXHJcbiAgICBWZWMzLnRyYW5zZm9ybU1hdDQgPSBmdW5jdGlvbiAob3V0LCBhLCBtKSB7XHJcbiAgICAgICAgdmFyIHggPSBhLng7XHJcbiAgICAgICAgdmFyIHkgPSBhLnk7XHJcbiAgICAgICAgdmFyIHogPSBhLno7XHJcbiAgICAgICAgdmFyIHJodyA9IG0ubTAzICogeCArIG0ubTA3ICogeSArIG0ubTExICogeiArIG0ubTE1O1xyXG4gICAgICAgIHJodyA9IHJodyA/IE1hdGguYWJzKDEgLyByaHcpIDogMTtcclxuICAgICAgICBvdXQueCA9IChtLm0wMCAqIHggKyBtLm0wNCAqIHkgKyBtLm0wOCAqIHogKyBtLm0xMikgKiByaHc7XHJcbiAgICAgICAgb3V0LnkgPSAobS5tMDEgKiB4ICsgbS5tMDUgKiB5ICsgbS5tMDkgKiB6ICsgbS5tMTMpICogcmh3O1xyXG4gICAgICAgIG91dC56ID0gKG0ubTAyICogeCArIG0ubTA2ICogeSArIG0ubTEwICogeiArIG0ubTE0KSAqIHJodztcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIFZlYzMucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueC50b0ZpeGVkKDIpICsgXCIsIFwiICsgdGhpcy55LnRvRml4ZWQoMikgKyBcIiwgXCIgKyB0aGlzLnoudG9GaXhlZCgyKSArIFwiKVwiO1xyXG4gICAgfTtcclxuICAgIFZlYzMuY29weSA9IGZ1bmN0aW9uIChvdXQsIGEpIHtcclxuICAgICAgICBvdXQueCA9IGEueDtcclxuICAgICAgICBvdXQueSA9IGEueTtcclxuICAgICAgICBvdXQueiA9IGEuejtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWMzO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBWZWMzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBOb2RlLCB7IFRyYW5zZm9ybUJpdCB9IGZyb20gJy4vbm9kZSc7XHJcbmltcG9ydCBRdWF0IGZyb20gJy4vcXVhdCc7XHJcbnZhciBub2RlMSA9IG5ldyBOb2RlKCk7XHJcbnZhciBub2RlMiA9IG5ldyBOb2RlKCk7XHJcbm5vZGUxLl9wYXJlbnQgPSBub2RlMjtcclxubm9kZTIuX2xzY2FsZS54ID0gMjtcclxubm9kZTIuX2xzY2FsZS55ID0gMjtcclxuUXVhdC5mcm9tRXVsZXIobm9kZTIuX2xyb3QsIDAsIDAsIDMwKTtcclxuUXVhdC5mcm9tRXVsZXIobm9kZTEuX2xyb3QsIDAsIDAsIDMwKTtcclxuLy8gbm9kZTIuX2xwb3MueCA9IDEwMDtcclxubm9kZTEuX2RpcnR5RmxhZ3MgPSBUcmFuc2Zvcm1CaXQuUk9UQVRJT047XHJcbm5vZGUyLl9kaXJ0eUZsYWdzID0gVHJhbnNmb3JtQml0LlJTO1xyXG5ub2RlMS51cGRhdGVXb3JsZFRyYW5zZm9ybSgpO1xyXG5jb25zb2xlLmxvZyhub2RlMSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==