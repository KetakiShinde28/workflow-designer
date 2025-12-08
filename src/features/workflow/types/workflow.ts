export interface WorkflowNode {
  id: string;
  type: string; // start, task, approval, automated, end
  position: { x: number; y: number };
  data: {
    label?: string;

    // Task
    description?: string;
    assignee?: string;
    dueDate?: string;

    // Approval
    approverRole?: string;
    threshold?: number;

    // Automated
    actionId?: string;
    params?: Record<string, string>;

    // End
    endMessage?: string;
    summary?: boolean;
  };
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
