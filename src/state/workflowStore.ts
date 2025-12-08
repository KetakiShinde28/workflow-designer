import { create } from "zustand";
import type {
  Workflow,
  WorkflowNode,
  WorkflowEdge,
} from "../features/workflow/types/workflow";

interface WorkflowState {
  workflow: Workflow;

  addNode: (node: WorkflowNode) => void;
  updateNode: (id: string, data: Partial<WorkflowNode["data"]>) => void;
  removeNode: (id: string) => void;

  addEdge: (edge: WorkflowEdge) => void;
  removeEdge: (id: string) => void;

  selectedNodeId?: string;
  setSelectedNode: (id?: string) => void;

  reset: () => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  workflow: {
    nodes: [],
    edges: [],
  },

  selectedNodeId: undefined,

  setSelectedNode: (id) => set(() => ({ selectedNodeId: id })),

  addNode: (node) =>
    set((state) => ({
      workflow: {
        ...state.workflow,
        nodes: [...state.workflow.nodes, node],
      },
    })),

  updateNode: (id, data) =>
    set((state) => ({
      workflow: {
        ...state.workflow,
        nodes: state.workflow.nodes.map((n) =>
          n.id === id ? { ...n, data: { ...n.data, ...data } } : n
        ),
      },
    })),

  removeNode: (id) =>
    set((state) => ({
      workflow: {
        ...state.workflow,
        nodes: state.workflow.nodes.filter((n) => n.id !== id),
        edges: state.workflow.edges.filter(
          (e) => e.source !== id && e.target !== id
        ),
      },
    })),

  addEdge: (edge) =>
    set((state) => ({
      workflow: {
        ...state.workflow,
        edges: [...state.workflow.edges, edge],
      },
    })),

  removeEdge: (id) =>
    set((state) => ({
      workflow: {
        ...state.workflow,
        edges: state.workflow.edges.filter((e) => e.id !== id),
      },
    })),

  reset: () =>
    set(() => ({
      workflow: {
        nodes: [],
        edges: [],
      },
    })),
}));
