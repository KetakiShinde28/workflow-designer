import { useWorkflowStore } from "../state/workflowStore";

export default function NodeToolbar() {
  const addNode = useWorkflowStore((s) => s.addNode);

  const createNode = (type: string) => {
    const id = `node-${Date.now()}`;
    addNode({
      id,
      type,
      position: { x: 250, y: 100 }, // temporary placement
      data: { label: `${type} node` },
    });
  };

  const btn =
    "block w-full text-left px-3 py-2 rounded-md hover:bg-neutral-200 transition cursor-pointer";

  return (
    <div className="w-40 h-screen border-r border-neutral-300 bg-neutral-100 p-4 space-y-2">
      <h2 className="text-neutral-700 font-semibold mb-3">Add Nodes</h2>

      <button type="button" className={btn} onClick={() => createNode("start")}>
        Start
      </button>
      <button type="button" className={btn} onClick={() => createNode("task")}>
        Task
      </button>
      <button type="button" className={btn} onClick={() => createNode("approval")}>
        Approval
      </button>
      <button type="button" className={btn} onClick={() => createNode("automated")}>
        Automated
      </button>
      <button type="button" className={btn} onClick={() => createNode("end")}>
        End
      </button>
    </div>
  );
}
