export type Participant = { id: string; name: string };

export type Conversation = {
  id: string;
  type: "single" | "group";
  title?: string;
  participants: Participant[];
  currentUserId: string;
};

export type BaseMessage = {
  id: string;
  conversation_id: string;
  sender_id: string;
  timestamp: string;
  edited?: boolean;
  deleted?: boolean;
};

export type TextMsg = BaseMessage & { type: "text"; content: string };
export type ImageMsg = BaseMessage & { type: "image"; content: string; caption?: string };
export type VideoMsg = BaseMessage & { type: "video"; content: string; thumbnail?: string };
export type PdfMsg = BaseMessage & { type: "pdf"; content: string; file_name?: string };

export type Message = TextMsg | ImageMsg | VideoMsg | PdfMsg;

export type ChatData = {
  conversation: Conversation;
  messages: Message[];
};
