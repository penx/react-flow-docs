---
title: Building a Flow
description: Here's how to install the React Flow package using npm (as reactflow), and how to include it in your own project
sidebar_position: 2
---

import CodeViewer from '/src/components/CodeViewer';
const editorOptions = { editorHeight: 400, editorWidthPercentage: 45, wrapContent: true }

In this section we are explaining how to create a controlled flow component. Now that you've installed React Flow into your React project, all files are in place to start using React Flow.

## Getting Started

Let's create an empty flow with a controls panel and a background. For this we need to import the components from the `reactflow` package:

```js
import ReactFlow, { Background, Controls } from 'reactflow';
```

We can now use the components to render an empty flow:

<CodeViewer codePath="api-flows/GettingStarted1" applyStyles={false} options={editorOptions} />

There are two important things to keep in mind here:

1. You need to **import the styles**. Otherwise React Flow won't work.
2. The **parent container needs a width and a height**, because React Flow uses its parent dimensions.

## Adding Nodes

Now that the flow is set up, let's add some nodes. To do this, you need to create an array with [node objects](/docs/api/nodes/node-options/) like this:

```js
const nodes = [
  {
    id: '1', // required
    position: { x: 0, y: 0 }, // required
  },
];
```

These nodes can now be added to the flow:

<CodeViewer codePath="api-flows/GettingStarted2" applyStyles={false} options={editorOptions} />

Let's add another node, configure labels and use the node type `input` for the first node.

```js
const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
    type: 'input',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'World' },
  },
];
```

<CodeViewer codePath="api-flows/GettingStarted3" applyStyles={false} options={editorOptions} />

There are plenty of ways to configure nodes. You can see the full list of options on the [node option site](/docs/api/nodes/node-options/).

This looks good. Let's attach these two nodes.

## Adding an Edge

Now that we have two nodes, let's connect them with an edge.

To make an edge, we need to specify two attributes: the source node (where the edge begins) and the target node (where the edge ends). We use the `id` of the two nodes to specify this (in our example, our two nodes have ids of "A" and "B"):

```js
const edges = [{ id: '1-2', source: '1', target: '2' }];
```

<CodeViewer codePath="api-flows/GettingStarted4" applyStyles={false} options={editorOptions} />

Let's give this edge two properties that are built into React Flow, a `label` and a different `type`.

<CodeViewer codePath="api-flows/GettingStarted5" applyStyles={false} options={editorOptions} />

You made your first edge, nice work! You might have realised that you can't drag or select nodes. In the next part you'll learn how to make the flow interactive.
