import React, { useState, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  isNode,
} from 'react-flow-renderer';
import dagre from 'dagre';
import initialElements from './mocks';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));


const getLayoutedElements = (elements, direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });
  elements.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: 150, height: 0 });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);
  return elements.map((el) => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      // el.targetPosition = isHorizontal ? 'left' : 'top';
      // el.sourcePosition = isHorizontal ? 'right' : 'bottom';

    let y = 300;
    let x = 0;
    if (el.direction === 'bottom') {
        y += 300
        x += window.innerWidth / 4
        
    }
    if (el.direction === 'top'){
        y -= 100
        x -= 125 
    }

    if (el.direction === 'left'){
        // x = window.innerWidth / 4
    }

      el.position = {
        x: x + nodeWithPosition.x,
        y: y + nodeWithPosition.y,
      };
    }
    return el;
  });
};
const layoutedElements = getLayoutedElements(initialElements);
const LayoutFlow = () => {
  const [elements, setElements] = useState(layoutedElements);
  const onConnect = (params) =>
    setElements((els) =>
      addEdge({ ...params, type: 'smoothstep', animated: true }, els)
    );
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onLayout = useCallback(
    (direction) => {
      const layoutedElements = getLayoutedElements(elements, direction);
      setElements(layoutedElements);
    },
    [elements]
  );
  return (
      <ReactFlowProvider>
        <div className="controls">
          <button onClick={() => onLayout('TB')}>vertical layout</button>
          <button onClick={() => onLayout('LR')}>horizontal layout</button>
        </div>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          connectionLineType="smoothstep"
        />
      </ReactFlowProvider>
  );
};
export default LayoutFlow;