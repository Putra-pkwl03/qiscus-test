```mermaid
sequenceDiagram
  participant Client
  participant StaticServer as Public/chat.json
  participant Browser

  Client->>StaticServer: GET /chat.json
  StaticServer-->>Client: JSON payload (rooms + comments)
  Client->>Browser: Render UI (Header, MessageList, Composer)
  Browser-->>User: Menampilkan pesan (text/image/video/pdf)
