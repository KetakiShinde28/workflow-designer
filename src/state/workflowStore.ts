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
  updateNodePosition: (id: string, position: { x: number; y: number }) => void;

  removeNode: (id: string) => void;

  addEdge: (edge: WorkflowEdge) => void;
  removeEdge: (id: string) => void;

  selectedNodeId?: string | null;
  setSelectedNodeId: (id: string | null) => void;

  reset: () => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  workflow: {
    nodes: [],
    edges: [],
  },

  addNode: (node) =>
    set((state) => ({
      workflow: {
        ...state.workflow,
        nodes: [
          ...state.workflow.nodes,
          {
            ...node,
            position: {
              x: 150 + Math.random() * 400,
              y: 150 + Math.random() * 300,
            },
          },
        ],
      },
    })),

  updateNodePosition: (id, position) =>
    set((state) => ({
      workflow: {
        ...state.workflow,
        nodes: state.workflow.nodes.map((n) =>
          n.id === id ? { ...n, position } : n
        ),
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
      selectedNodeId: null,
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

  selectedNodeId: null,
  setSelectedNodeId: (id) => set(() => ({ selectedNodeId: id })),

  reset: () =>
    set(() => ({
      workflow: { nodes: [], edges: [] },
      selectedNodeId: null,
    })),
}));
