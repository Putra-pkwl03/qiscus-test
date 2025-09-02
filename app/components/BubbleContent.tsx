"use client";
import Image from "next/image";
import { styles } from "./styles";

// definisikan tipe message
type Message =
  | { type: "text"; message: string }
  | { type: "image"; message: string; caption?: string }
  | { type: "video"; message: string }
  | { type: "pdf"; message: string; file_name?: string }
  | { type: string; message?: string };

export default function BubbleContent({ msg }: { msg: Message }) {
  switch (msg.type) {
    case "text":
      return <div style={styles.text}>{msg.message}</div>;

    case "image":
      const imageMsg = msg as { type: "image"; message: string; caption?: string };
      return (
        <div>
          <Image
            src={imageMsg.message || ""}
            alt={imageMsg.caption || "image"}
            width={300}
            height={200}
            style={styles.media}
          />
          {imageMsg.caption && <div style={styles.caption}>{imageMsg.caption}</div>}
        </div>
      );

    case "video":
      return <video src={msg.message} style={styles.media} controls playsInline />;

    case "pdf":
      const pdfMsg = msg as { type: "pdf"; message: string; file_name?: string };
      return (
        <a href={pdfMsg.message} target="_blank" rel="noreferrer" style={styles.link}>
          📄 {pdfMsg.file_name || "Open PDF"}
        </a>
      );

    default:
      return <div>Unsupported</div>;
  }
}
