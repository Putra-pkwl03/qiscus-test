"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MessageList from "./components/MessageLIst";
import Composer from "./components/Composer";
import { styles } from "./components/styles";

type Participant = { id: string; name: string; role: number };
type Room = { name: string; id: number; image_url: string; participant: Participant[] };
type Comment =
  | { id: number; type: "text"; message: string; sender: string }
  | { id: number; type: "image"; message: string; caption?: string; sender: string }
  | { id: number; type: "video"; message: string; thumbnail?: string; sender: string }
  | { id: number; type: "pdf"; message: string; file_name?: string; sender: string };

type ChatData = { room: Room; comments: Comment[] };

export default function Page() {
  const [data, setData] = useState<ChatData | null>(null);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch("/chat.json")
      .then((res) => res.json())
      .then((json) => setData(json.results[0]))
      .catch((e) => setError(String(e)));
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) return <div style={styles.container}>Failed: {error}</div>;
  if (!data)
    return (
      <div
        style={styles.container}
        className="flex flex-col items-center justify-center h-screen gap-4"
      >
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-gray-600 font-medium">Loading chat...</p>
      </div>
    );

  const { room, comments } = data;
  const nameOf = (id: string) =>
    room.participant.find((p) => p.id === id)?.name || "Unknown";

  // filter participants by query
  const filtered = room.participant.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

 return (
  <div
    className="h-screen max-w-[860px] mx-auto flex flex-col bg-[#0b141a] text-[#e6edf3] 
               border border-[#233043] overflow-hidden box-border 
               rounded-none md:rounded-2xl"
  >
    <div style={styles.mainLayout}>
      {/* Sidebar list user */}
      {!isMobile && (
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Participants</h3>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.search}
          />

          <ul style={styles.userList}>
            {filtered.map((p) => (
              <li key={p.id} style={styles.userItem}>
                <div style={styles.avatar}>{p.name.charAt(0)}</div>
                <div>
                  <div style={styles.userName}>{p.name}</div>
                  <div style={styles.userRole}>
                    {p.role === 0
                      ? "Admin"
                      : p.role === 1
                      ? "Agent"
                      : "Customer"}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Chat Area */}
      <div style={isMobile ? styles.chatFull : styles.chatWrapper}>
        <Header title={room.name} participants={room.participant} />
        <div style={styles.chatArea}>
          <MessageList
            messages={comments}
            nameOf={nameOf}
            currentUserId="customer@mail.com"
          />
        </div>
        <Composer />
      </div>
    </div>
  </div>
);

}
