import { useWorkflowStore } from "../state/workflowStore";

export default function NodeToolbar() {
  const addNode = useWorkflowStore((s) => s.addNode);

  const create = (type: string, label: string) => {
    addNode({
      id: type + "-" + Date.now(),
      type,
      data: { label },
      position: { x: 200, y: 200 },
    });
  };

  return (
    <div className="w-48 border-r bg-white p-4 shadow-md">
      <h2 className="font-semibold text-neutral-700 mb-4">Add Nodes</h2>

      <div className="space-y-3">
        <button
          onClick={() => create("start", "Start")}
          className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition"
        >
          Start
        </button>

        <button
          onClick={() => create("task", "Task")}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Task
        </button>

        <button
          onClick={() => create("approval", "Approval")}
          className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
        >
          Approval
        </button>

        <button
          onClick={() => create("automated", "Automated")}
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Automated
        </button>

        <button
          onClick={() => create("end", "End")}
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          End
        </button>
      </div>
    </div>
  );
}
