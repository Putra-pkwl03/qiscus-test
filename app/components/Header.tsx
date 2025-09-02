"use client";
import { Participant } from "../../types/chat";
import { styles } from "./styles";

export default function Header({ title, participants }: { title: string; participants: Participant[] }) {
  return (
    <div style={styles.header}>
      <div style={styles.headerTitle}>{title}</div>
      <div style={styles.headerSubtitle}>
        {participants.map((p) => p.name).join(", ")}
      </div>
    </div>
  );
}
