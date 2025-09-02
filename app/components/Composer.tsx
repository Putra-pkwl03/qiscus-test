"use client";
import { styles } from "./styles";

export default function Composer() {
  return (
    <div style={styles.composer}>
      <input style={styles.input} placeholder="Type a message…" />
      <button style={styles.send} disabled>Send</button>
    </div>
  );
}
