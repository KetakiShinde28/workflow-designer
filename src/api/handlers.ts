import { http, HttpResponse } from "msw";

// Mock automation list
const automations = [
  {
    id: "send_email",
    label: "Send Email",
    params: ["to", "subject"],
  },
  {
    id: "generate_doc",
    label: "Generate Document",
    params: ["template", "recipient"],
  },
];

export const handlers = [
  // GET /automations
  http.get("/automations", () => {
    return HttpResponse.json(automations);
  }),

  // POST /simulate
  http.post("/simulate", async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json({
      status: "ok",
      steps: [
        "Workflow received",
        `Nodes: ${body.nodes.length}`,
        `Edges: ${body.edges.length}`,
        "Simulation complete",
      ],
    });
  }),
];
