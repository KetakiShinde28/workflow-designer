import WorkflowCanvas from "./features/workflow/WorkflowCanvas";
import NodeToolbar from "./components/NodeToolbar";

function App() {
  return (
    <div className="flex w-full h-screen bg-neutral-50">
      <NodeToolbar />
      <div className="flex-1">
        <WorkflowCanvas />
      </div>
    </div>
  );
}

export default App;
