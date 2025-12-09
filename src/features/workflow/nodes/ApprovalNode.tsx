import { Handle, Position } from "@xyflow/react";

export default function ApprovalNode({ data }: any) {
  return (
    <div
      className="rounded-lg shadow-sm border bg-white w-48"
      style={{ cursor: "grab" }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      <div
        className="px-3 py-1 text-white text-sm rounded-t-lg"
        style={{ backgroundColor: "#d97706" }}
      >
        Approval
      </div>

      <div className="p-3 text-xs text-neutral-700">
        <div className="font-semibold">{data.label || "Approval"}</div>
        {data.approverRole && <div>🛂 {data.approverRole}</div>}
        {data.threshold && <div>⚖️ ≥ {data.threshold}</div>}
      </div>
    </div>
  );
}
