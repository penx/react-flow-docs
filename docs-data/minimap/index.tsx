const props = [
  {
    name: 'pannable',
    type: 'boolean',
    default: 'false',
    description:
      'If set to true you can control the React Flow viewport position by dragging the minimap.',
  },
  {
    name: 'zoomable',
    type: 'boolean',
    default: 'false',
    description:
      'If set to true you can control the React Flow viewport scale by zooming (scroll or pinch) the minimap.',
  },
  {
    name: 'nodeColor',
    type: 'string or function',
    default: '#fff',
    description:
      'If you pass a color string, all nodes get that color. If you pass a function you can return a color depending on the passed node',
  },
  {
    name: 'nodeStrokeColor',
    type: 'string or function',
    default: '#555',
    description:
      'If you pass a color string, all nodes get that strokecolor. If you pass a function you can return a color depending on the passed node',
  },
  {
    name: 'nodeBorderRadius',
    type: 'number',
    default: '5',
    description: 'Node border radius',
  },
  {
    name: 'nodeStrokeWidth',
    type: 'number',
    default: '2',
    description: 'Node stroke width',
  },
  {
    name: 'nodeClassName',
    type: 'string or function',
    default: "''",
    description: 'Node class name',
  },
  {
    name: 'maskColor',
    type: 'string or function',
    default: 'rgb(240, 242, 243, 0.7)',
    description: 'Mini map mask color',
  },
  {
    name: 'onClick',
    type: 'function',
    default: 'undfined',
    description: `Get's called when the minimap is clicked.`,
  },
  {
    name: 'onNodeClick',
    type: 'function',
    default: 'undfined',
    description: `Get's called when a minimap node is clicked.`,
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Mini map style attributes',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name',
  },
];

export default props;
