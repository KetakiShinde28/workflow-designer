\# Workflow Designer – React + TypeScript



This project is a mini Workflow Builder built as part of the Frontend Internship assignment.  

It allows users to visually create workflows by adding nodes, connecting them, editing their properties, and exporting the workflow as JSON.



\### 🚀 Features Implemented



\#### 🧱 Node Types  

\- \*\*Start Node\*\*

\- \*\*Task Node\*\*

\- \*\*Approval Node\*\*

\- \*\*Automated Node\*\* (with action selector + dynamic parameters)

\- \*\*End Node\*\*



\#### 🎨 Canvas \& Interaction

\- Drag-and-drop nodes  

\- Random initial placement to avoid overlap  

\- Connect nodes by dragging handles  

\- Delete nodes or edges using \*\*Delete / Backspace\*\*  

\- Visual MiniMap with color-coded nodes  

\- Clean left-side toolbar for adding nodes  

\- Right-side editor panel for modifying selected node details  



\#### 📝 Node Editing Panel  

Each node opens an editor panel where you can update:

\- Labels  

\- Task details (assignee, description, due date)  

\- Approval settings  

\- Automated action + parameters  

\- End node summary options  



\#### 💾 JSON Export  

One-click \*\*Export JSON\*\* downloads the complete workflow data:

```json

{

&nbsp; "nodes": \[...],

&nbsp; "edges": \[...]

}



---



\## ▶️ How to Run the Project Locally



Follow these steps to run the Workflow Designer on your system:



\### 1. Clone the repository

```sh

git clone https://github.com/KetakiShinde28/workflow-designer.git

cd workflow-designer

\### 2. Install dependencies

npm install

\### 2. Start the development server

npm run dev

