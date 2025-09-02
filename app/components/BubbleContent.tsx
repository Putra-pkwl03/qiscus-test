"use client";
import { styles } from "./styles";

export default function BubbleContent({ msg }: { msg: any }) {
  switch (msg.type) {
    case "text":
      return <div style={styles.text}>{msg.message}</div>;
    case "image":
      return (
        <div>
          <img src={msg.message} alt={msg.caption || "image"} style={styles.media} />
          {msg.caption && <div style={styles.caption}>{msg.caption}</div>}
        </div>
      );
    case "video":
      return <video src={msg.message} style={styles.media} controls playsInline />;
    case "pdf":
      return (
        <a href={msg.message} target="_blank" rel="noreferrer" style={styles.link}>
          📄 {msg.file_name || "Open PDF"}
        </a>
      );
    default:
      return <div>Unsupported</div>;
  }
}