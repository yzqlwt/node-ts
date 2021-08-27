import Node, { TransformBit } from './node';
import Quat from './quat';

const node1 = new Node();
const node2 = new Node();
node1._parent = node2;
node2._lscale.x = 2;
node2._lscale.y = 2;
Quat.fromEuler(node2._lrot, 0, 0, 30);
Quat.fromEuler(node1._lrot, 0, 0, 30);
node1._dirtyFlags = TransformBit.ROTATION;
node2._dirtyFlags = TransformBit.RS;
node1.updateWorldTransform();

const func = () => {
  console.log('start');
  const canvas: any = document.getElementById('canvas');
  const gl = canvas.getContext('webgl');
  gl.clearColor(0, 0, 0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
};

setTimeout(func, 1000);
