export async function fetchAutomations() {
  const res = await fetch("/automations");
  return res.json();
}
