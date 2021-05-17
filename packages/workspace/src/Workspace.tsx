import React, { useState } from 'react';

import ReactFlow, {
  addEdge,
  removeElements, 
  MiniMap,
  Controls,
  Background,
  Elements
} from 'react-flow-renderer';

const onLoad = (reactFlowInstance: any) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const staticElements: Elements<any> = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          Welcome to React Flow!
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          This is a default node
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          This one has a custom style
        </>
      ),
    },
    position: { x: 400, y: 100 },
    style: {
      background: '#D6D5E6',
      color: '#333',
      border: '1px solid #222138',
      width: 180,
    },
  },
]

const Workspace = () => {
  const [elements, setElements] = useState(staticElements)
  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params: any) => setElements((els: Elements) => addEdge(params, els))

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
    >
      <MiniMap
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};
 
export default Workspace;
