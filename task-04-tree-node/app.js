const output = document.querySelector('#result');

let nodes = {};
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

arr.forEach((item) => {
    nodes[item] = { value: item };
});

nodes.a.left = nodes.b;
nodes.a.right = nodes.e;

nodes.b.right = nodes.d;
nodes.b.left = nodes.c;

nodes.e.left = nodes.f;

nodes.f.right = nodes.h
nodes.f.left = nodes.g;

let result = '';

function tree(node) {
    if (!node) return;

    tree(node.left);

    result = result + node.value;

    tree(node.right);
}

tree(nodes.a);

output.innerHTML = result;
