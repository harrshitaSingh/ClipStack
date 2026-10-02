import type { Clip } from "./types";

export const clips: Clip[] = [
  {
    id: "js",
    kind: "code",
    title: (
      <>
        const users = <span className="text-[#7c5cfc]">await</span> fetch('/api/users');
        <br />
        const data = <span className="text-[#7c5cfc]">await</span> users.json();
      </>
    ),
    meta: "Just now • JavaScript • 2 lines",
    starred: true,
  },
  {
    id: "link",
    kind: "link",
    title: "https://github.com/openai/awesome...",
    subtitle: "https://github.com/openai/awesome-chatgpt",
    meta: "2 min ago • Link",
    starred: false,
  },
  {
    id: "text",
    kind: "text",
    title: "Meeting at 3 PM with the design team to discuss the new feature rollout...",
    meta: "5 min ago • Text • 142 characters",
    starred: false,
  },
  {
    id: "html",
    kind: "code",
    title: (
      <>
        {'<div className="container">'}
        <br />
        {"  <h1>Welcome to ClipStack</h1>"}
        <br />
        {"</div>"}
      </>
    ),
    meta: "8 min ago • HTML • 3 lines",
    starred: true,
  },
  {
    id: "image",
    kind: "image",
    title: "Screenshot 2024-06-15 at 10.24.36 PM",
    meta: "12 min ago • Image • 1920 × 1080",
    starred: false,
  },
  {
    id: "npm",
    kind: "text",
    title: "npm install react vite",
    meta: "18 min ago • Text • 22 characters",
    starred: false,
  },
];
