import { useEffect, useState } from "react";
import { fetchAutomations } from "../api/client";

export default function AutomationSelector({
  value,
  onChange,
  params,
  onParamsChange,
}: {
  value: string;
  onChange: (v: string) => void;
  params: Record<string, string>;
  onParamsChange: (p: Record<string, string>) => void;
}) {
  const [actions, setActions] = useState<any[]>([]);

  useEffect(() => {
    fetchAutomations().then(setActions);
  }, []);

  const selectedAction = actions.find((a) => a.id === value);

  return (
    <div>
      <select
        className="w-full border rounded-md px-2 py-1 mt-1 mb-4"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select an action</option>
        {actions.map((action) => (
          <option key={action.id} value={action.id}>
            {action.label}
          </option>
        ))}
      </select>

      {selectedAction && (
        <div className="space-y-3">
          {selectedAction.params.map((p: string) => (
            <div key={p}>
              <label className="text-sm">{p}</label>
              <input
                className="w-full border rounded-md px-2 py-1 mt-1"
                value={params[p] || ""}
                onChange={(e) =>
                  onParamsChange({
                    ...params,
                    [p]: e.target.value,
                  })
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
