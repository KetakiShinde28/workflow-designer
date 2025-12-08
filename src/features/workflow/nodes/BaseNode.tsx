import { Handle, Position } from "@xyflow/react";

export default function BaseNode({ data, color }: { data: any; color: string }) {
  return (
    <div
      className="rounded-md shadow-sm border bg-white px-3 py-2 text-sm min-w-[140px]"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      <div className="font-medium text-neutral-800">{data.label}</div>

      {/* Handles for connections */}
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  );
}
