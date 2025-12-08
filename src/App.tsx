import WorkflowCanvas from "./features/workflow/WorkflowCanvas";
import NodeToolbar from "./components/NodeToolbar";
import NodeEditorPanel from "./components/NodeEditorPanel";
import SimulateButton from "./components/SimulateButton";

function App() {
  return (
    <div className="flex w-full h-screen bg-neutral-50 relative">
      <NodeToolbar />
      <div className="flex-1 relative">
        <WorkflowCanvas />
      </div>

      <NodeEditorPanel />
      <SimulateButton />
    </div>
  );
}

export default App;
