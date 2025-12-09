import { Handle, Position } from "@xyflow/react";

export default function StartNode(props: any) {
  const { data, style: propsStyle, className: propsClassName, ...rest } = props;

  return (
    <div
      {...rest}
      className={`${propsClassName ?? ""} rounded-lg shadow-sm border bg-white w-40`}
      style={{ ...(propsStyle ?? {}), cursor: "grab" }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      <div
        className="px-3 py-1 text-white text-sm rounded-t-lg"
        style={{ backgroundColor: "#16a34a" }}
      >
        Start
      </div>

      <div className="p-3 text-xs text-neutral-700">
        {data?.label || "Start Node"}
      </div>
    </div>
  );
}
