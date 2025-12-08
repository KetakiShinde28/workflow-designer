import { useWorkflowStore } from "../state/workflowStore";
import { useState } from "react";

export default function SimulateButton() {
  const { workflow } = useWorkflowStore();
  const [logs, setLogs] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const runSimulation = async () => {
    const res = await fetch("/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workflow),
    });

    const data = await res.json();
    setLogs(data.steps);
    setOpen(true);
  };

  return (
    <>
      <button
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
        onClick={runSimulation}
      >
        Simulate
      </button>

      {open && (
        <div className="fixed right-0 top-0 w-80 h-full bg-white border-l border-neutral-300 shadow-lg p-4 overflow-y-auto">
          <h2 className="font-semibold text-neutral-700 mb-4">Simulation Output</h2>

          {logs.map((log, i) => (
            <div key={i} className="text-sm text-neutral-700 mb-2">
              • {log}
            </div>
          ))}

          <button
            className="mt-4 bg-neutral-200 px-3 py-1 rounded-md hover:bg-neutral-300"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
