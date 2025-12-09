import WorkflowCanvas from "./features/workflow/WorkflowCanvas";
import NodeToolbar from "./components/NodeToolbar";
import NodeEditorPanel from "./components/NodeEditorPanel";
import { useWorkflowStore } from "./state/workflowStore";

export default function App() {
  const workflow = useWorkflowStore((s) => s.workflow);

  const exportJSON = () => {
    const json = JSON.stringify(workflow, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "workflow.json";
    link.click();

    URL.revokeObjectURL(url);
  };

  const runSimulation = () => {
    alert("Simulation running...\n\n" + JSON.stringify(workflow, null, 2));
  };

  return (
    <div className="flex w-full h-screen bg-neutral-50 relative">
      {/* Left toolbar */}
      <NodeToolbar />

      {/* Main area */}
      <div className="flex-1">
        <WorkflowCanvas />
      </div>

      {/* Right panel */}
      <NodeEditorPanel />

     {/* Top-center buttons */}
<div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-3 z-50">
  <button
    onClick={runSimulation}
    className="px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition"
  >
    Simulate
  </button>

  <button
    onClick={exportJSON}
    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
  >
    Export JSON
  </button>
</div>

    </div>
  );
}
