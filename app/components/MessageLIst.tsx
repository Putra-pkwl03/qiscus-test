"use client";
import BubbleContent from "./BubbleContent";
import { styles } from "./styles";

// pakai tipe sama dengan BubbleContent
type Message =
  | { id: string; type: "text"; message: string; sender: string }
  | { id: string; type: "image"; message: string; sender: string; caption?: string }
  | { id: string; type: "video"; message: string; sender: string }
  | { id: string; type: "pdf"; message: string; sender: string; file_name?: string };

export default function MessageList({
  messages,
  nameOf,
  currentUserId,
}: {
  messages: Message[];
  nameOf: (id: string) => string;
  currentUserId: string;
}) {
  return (
    <div style={styles.list}>
      {messages.map((m: Message) => {
        const isMine = m.sender === currentUserId;

        return (
          <div
            key={m.id}
            style={{
              ...styles.row,
              justifyContent: isMine ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                ...styles.bubble,
                ...(isMine ? styles.bubbleMe : styles.bubbleOther),
              }}
            >
              {!isMine && <div style={styles.sender}>{nameOf(m.sender)}</div>}
              <BubbleContent msg={m} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
