import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  ConnectionMode,
} from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from 'dagre';

import PrecipitateNode from './components/nodes/PrecipitateNode';
import SolutionNode from './components/nodes/SolutionNode';
import ConfirmationNode from './components/nodes/ConfirmationNode';
import ChemicalNode from './components/nodes/ChemicalNode';
import ActionEdge from './components/edges/ActionEdge';
import { initialNodes, initialEdges } from './data/flowData';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 200;
const nodeHeight = 100;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
  dagreGraph.setGraph({ rankdir: direction, nodesep: 150, ranksep: 100 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: 'top',
      sourcePosition: 'bottom',
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const nodeTypes = useMemo(() => ({
    precipitate: PrecipitateNode,
    solution: SolutionNode,
    confirmation: ConfirmationNode,
    chemical: ChemicalNode
  }), []);

  const edgeTypes = useMemo(() => ({
    actionEdge: ActionEdge
  }), []);

  return (
    <div className="w-screen h-screen font-sans bg-gray-50 flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 shadow-sm flex justify-between items-center px-8">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            <span className="text-3xl">🧪</span> การวิเคราะห์เชิงคุณภาพสำหรับแคทไอออน 9 ชนิด
          </h1>
          <p className="text-gray-500 text-sm font-medium">แดชบอร์ดคู่มือปฏิบัติการเคมีดิจิทัล - แผนผังแบบอินเทอร์แอกทีฟ</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full"><span className="w-3 h-3 rounded-sm bg-yellow-400 border border-gray-300"></span> ตะกอน</div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full"><span className="w-3 h-3 rounded-full bg-blue-400 border border-gray-300 blur-[1px]"></span> สารละลาย</div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full"><span className="w-4 h-4 rounded-full flex items-center justify-center text-xs">🌟</span> ยืนยันผล</div>
        </div>
      </header>

      <div className="flex-grow w-full h-full pt-[80px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          connectionMode={ConnectionMode.Loose}
          fitView
          fitViewOptions={{ padding: 0.5 }}
          minZoom={0.2}
          maxZoom={2}
          className="bg-[#f8fafc]"
        >
          <Background color="#cbd5e1" gap={20} size={2} />
          <Controls className="drop-shadow-lg" />
          <MiniMap
            nodeColor={(node) => {
              if (node.type === 'precipitate') return '#94a3b8';
              if (node.type === 'solution') return '#60a5fa';
              if (node.type === 'confirmation') return '#facc15';
              return '#e2e8f0';
            }}
            maskColor="rgba(248, 250, 252, 0.7)"
            className="border border-gray-200 shadow-xl rounded-xl"
          />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
