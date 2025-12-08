import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  type Connection,
  type Edge,
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
  const { workflow, addNode, addEdge: addEdgeToStore } = useWorkflowStore();

  const onConnect = useCallback(
    (connection: Connection | Edge) => {
      const id = `edge-${Date.now()}`;
      addEdgeToStore({
        id,
        source: connection.source!,
        target: connection.target!,
      });
    },
    [addEdgeToStore]
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={workflow.nodes}
        edges={workflow.edges}
        onConnect={onConnect}
	nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
