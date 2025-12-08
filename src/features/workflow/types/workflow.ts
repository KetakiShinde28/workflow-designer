export type NodeType =
  | "start"
  | "task"
  | "approval"
  | "automated"
  | "end";

export interface BaseNodeData {
  label: string;
}

export interface TaskNodeData extends BaseNodeData {
  assignee: string;
}

export interface ApprovalNodeData extends BaseNodeData {
  approver: string;
}

export interface AutomatedNodeData extends BaseNodeData {
  script: string;
}

export interface WorkflowNode {
  id: string;
  type: NodeType;
  data: BaseNodeData | TaskNodeData | ApprovalNodeData | AutomatedNodeData;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
}

export interface Workflow {
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}
