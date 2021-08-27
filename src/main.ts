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
setTimeout(() => {
  document.body.innerText = JSON.stringify(node1, null, 2);
});
