"use client";
import BubbleContent from "./BubbleContent";
import { styles } from "./styles";

type Comment = any;

export default function MessageList({
  messages,
  nameOf,
  currentUserId,
}: {
  messages: Comment[];
  nameOf: (id: string) => string;
  currentUserId: string;
}) {
  return (
    <div style={styles.list}>
      {messages.map((m: Comment) => {
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
