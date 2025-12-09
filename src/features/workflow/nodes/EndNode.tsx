import { Handle, Position } from "@xyflow/react";

export default function EndNode(props: any) {
const { data } = props;
  return (
    <div
      className="rounded-lg shadow-sm border bg-white w-40"
      style={{ cursor: "grab" }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      <div
        className="px-3 py-1 text-white text-sm rounded-t-lg"
        style={{ backgroundColor: "#dc2626" }}
      >
        End
      </div>

      <div className="p-3 text-xs text-neutral-700">
        {data.endMessage || "End Node"}
      </div>
    </div>
  );
}
