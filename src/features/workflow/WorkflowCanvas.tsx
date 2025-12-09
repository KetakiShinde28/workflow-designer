import { useCallback, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Connection,
  type Edge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useWorkflowStore } from "../../state/workflowStore";
import StartNode from "./nodes/StartNode";
import TaskNode from "./nodes/TaskNode";
import ApprovalNode from "./nodes/ApprovalNode";
import AutomatedNode from "./nodes/AutomatedNode";
import EndNode from "./nodes/EndNode";

const nodeTypes = {
  start: StartNode,
  task: TaskNode,
  approval: ApprovalNode,
  automated: AutomatedNode,
  end: EndNode,
};

export default function WorkflowCanvas() {
  const {
    workflow,
    addEdge: addEdgeToStore,
    removeNode,
    removeEdge,
    selectedNodeId,
    setSelectedNodeId,
    updateNodePosition,
  } = useWorkflowStore();

  const [nodes, setNodes, onNodesChange] = useNodesState(workflow.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(workflow.edges);

  useEffect(() => {
    setNodes(workflow.nodes);
    setEdges(workflow.edges);
  }, [workflow]);

  const handleNodesChange = (changes: any) => {
    changes.forEach((change: any) => {
      if (change.type === "position" && change.position) {
        updateNodePosition(change.id, change.position);
      }
    });

    onNodesChange(changes);
  };

  const onConnect = useCallback(
    (connection: Connection | Edge) => {
      addEdgeToStore({
        id: `edge-${Date.now()}`,
        source: connection.source!,
        target: connection.target!,
      });
    },
    [addEdgeToStore]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (!selectedNodeId) return;

        removeNode(selectedNodeId);
        setSelectedNodeId(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedNodeId]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => setSelectedNodeId(node.id)}
        onPaneClick={() => setSelectedNodeId(null)}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap
  nodeStrokeColor={(node) => {
    return {
      start: "#16a34a",
      task: "#2563eb",
      approval: "#d97706",
      automated: "#7c3aed",
      end: "#dc2626",
    }[node.type] || "#000";
  }}
  nodeColor={(node) => {
    return {
      start: "#a7f3d0",
      task: "#bfdbfe",
      approval: "#fde68a",
      automated: "#ddd6fe",
      end: "#fecaca",
    }[node.type] || "#fff";
  }}
  nodeBorderRadius={6}
/>
      </ReactFlow>
    </div>
  );
}
