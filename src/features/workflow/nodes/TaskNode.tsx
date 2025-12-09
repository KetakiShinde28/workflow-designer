import { Handle, Position } from "@xyflow/react";

export default function TaskNode({ data }: any) {
  return (
    <div
      className="rounded-lg shadow-sm border bg-white w-48"
      style={{ cursor: "grab" }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      <div
        className="px-3 py-1 text-white text-sm rounded-t-lg"
        style={{ backgroundColor: "#2563eb" }}
      >
        Task
      </div>

      <div className="p-3 text-xs text-neutral-700">
        <div className="font-semibold">{data.label || "Task"}</div>
        {data.assignee && <div>👤 {data.assignee}</div>}
        {data.dueDate && <div>📅 {data.dueDate}</div>}
      </div>
    </div>
  );
}
