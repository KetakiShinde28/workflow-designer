import AutomationSelector from "./AutomationSelector";
import { useWorkflowStore } from "../state/workflowStore";
import { useEffect, useState } from "react";

export default function NodeEditorPanel() {
  const { workflow, selectedNodeId, updateNode } = useWorkflowStore();

  const node = workflow.nodes.find((n) => n.id === selectedNodeId);

  const [localData, setLocalData] = useState<any>({});

  useEffect(() => {
    if (node) setLocalData(node.data);
  }, [node]);

  if (!node) return null;

  const updateField = (field: string, value: any) => {
    setLocalData((d: any) => ({ ...d, [field]: value }));
    updateNode(node.id, { [field]: value });
  };

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white border-l border-neutral-300 shadow-lg p-4 overflow-y-auto">
      <h2 className="font-semibold text-neutral-700 mb-4">Edit Node</h2>

      {/* LABEL (universal) */}
      <label className="text-sm text-neutral-600">Label</label>
      <input
        className="w-full border border-neutral-300 rounded-md px-2 py-1 mt-1 mb-4"
        value={localData.label || ""}
        onChange={(e) => updateField("label", e.target.value)}
      />

      {/* Render type-specific fields */}
      {node.type === "task" && (
        <>
          <label className="text-sm text-neutral-600">Description</label>
          <textarea
            className="w-full border rounded-md px-2 py-1 mt-1 mb-4"
            value={localData.description || ""}
            onChange={(e) => updateField("description", e.target.value)}
          />

          <label className="text-sm text-neutral-600">Assignee</label>
          <input
            className="w-full border rounded-md px-2 py-1 mt-1 mb-4"
            value={localData.assignee || ""}
            onChange={(e) => updateField("assignee", e.target.value)}
          />

          <label className="text-sm text-neutral-600">Due Date</label>
          <input
            type="date"
            className="w-full border rounded-md px-2 py-1 mt-1 mb-4"
            value={localData.dueDate || ""}
            onChange={(e) => updateField("dueDate", e.target.value)}
          />
        </>
      )}

      {node.type === "approval" && (
        <>
          <label className="text-sm text-neutral-600">Approver Role</label>
          <input
            className="w-full border rounded-md px-2 py-1 mt-1 mb-4"
            value={localData.approverRole || ""}
            onChange={(e) => updateField("approverRole", e.target.value)}
          />

          <label className="text-sm text-neutral-600">Approval Threshold</label>
          <input
            type="number"
            className="w-full border rounded-md px-2 py-1 mt-1 mb-4"
            value={localData.threshold || ""}
            onChange={(e) => updateField("threshold", Number(e.target.value))}
          />
        </>
      )}

     {node.type === "automated" && (
  <>
    <label className="text-sm text-neutral-600">Action</label>

    <AutomationSelector
      value={localData.actionId || ""}
      onChange={(value) => updateField("actionId", value)}
      params={localData.params || {}}
      onParamsChange={(p) => updateField("params", p)}
    />
  </>
)}


      {node.type === "end" && (
        <>
          <label className="text-sm text-neutral-600">End Message</label>
          <input
            className="w-full border rounded-md px-2 py-1 mt-1 mb-4"
            value={localData.endMessage || ""}
            onChange={(e) => updateField("endMessage", e.target.value)}
          />

          <label className="flex items-center gap-2 text-sm text-neutral-600">
            <input
              type="checkbox"
              checked={localData.summary || false}
              onChange={(e) => updateField("summary", e.target.checked)}
            />
            Include Summary
          </label>
        </>
      )}
    </div>
  );
}
