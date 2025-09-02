export const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    height: "100vh",
    maxWidth: 860,
    padding: "0 8px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    background: "#0b141a",
    color: "#e6edf3",
    fontFamily: "system-ui, sans-serif",  
    border: "1px solid #233043",
    overflow: "hidden",   
    overflowX: "hidden",
    boxSizing: "border-box",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "#0b141a",
    color: "#e6edf3",
    borderRadius: 0,
  },

  header: {
    padding: "16px 20px",
    borderBottom: "1px solid #233043",
    position: "sticky",
    top: 0,
    background: "#0b141a",
    zIndex: 1,
  },
  headerTitle: { fontSize: 18, fontWeight: 700 },
  headerSubtitle: { fontSize: 12, opacity: 0.7, marginTop: 4 },

  chatArea: {
    flex: 1,
    overflowY: "auto",
    padding: "16px 12px",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  list: { display: "flex", flexDirection: "column", gap: 14 },
  row: { display: "flex" },

  bubble: {
    maxWidth: "78%",
    borderRadius: 18,
    padding: "12px 14px",
    fontSize: 15,
    lineHeight: 1.5,
    wordBreak: "break-word",
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
    transition: "background 0.2s ease",
  },
  bubbleMe: {
    background: "#081d36",
    color: "white",
    borderTopRightRadius: 6,
  },
  bubbleOther: {
    background: "#161b22",
    borderTopLeftRadius: 6,
    border: "1px solid #233043",
  },

  sender: { fontSize: 12, opacity: 0.7, marginBottom: 6 },
  text: { whiteSpace: "pre-wrap" },
  media: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 12,
    display: "block",
    boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
  },
  caption: { fontSize: 12, opacity: 0.85, marginTop: 6 },
  meta: { marginTop: 6, fontSize: 11, opacity: 0.7 },

    composer: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 10px",
    borderTop: "1px solid #233043",
    background: "#0b141a",
    },

    input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    padding: "10px 12px",
    borderRadius: 20,
    border: "1px solid #233043",
    background: "#0d1117",
    color: "#e6edf3",
    outline: "none",
    fontSize: 15,
    lineHeight: 1.4,
    },

    send: {
    flexShrink: 0,
    height: 40,
    padding: "0 14px",
    borderRadius: 20,
    border: "1px solid #233043",
    background: "#161b22",
    color: "#e6edf3",
    cursor: "pointer",
    transition: "background 0.2s ease",
    fontSize: 14,
    },

  link: {
    display: "inline-block",
    padding: "8px 10px",
    borderRadius: 8,
    background: "#10151c",
    border: "1px solid #233043",
    color: "#e6edf3",
    textDecoration: "none",
  },

  mainLayout: {
    display: "flex",
    height: "100%",
  },

  sidebar: {
    width: 240,
    background: "#11161d",
    borderRight: "1px solid #233043",
    padding: "12px 0",
    overflowY: "auto",
  },

  sidebarTitle: {
    fontSize: 14,
    fontWeight: 700,
    padding: "0 16px",
    marginBottom: 12,
    color: "#8b949e",
  },

  userList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  userItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "8px 16px",
    cursor: "pointer",
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#1f6feb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    color: "white",
  },

  userName: { fontSize: 14, fontWeight: 600 },
  userRole: { fontSize: 12, opacity: 0.7 },

  chatWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  chatFull: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  search: {
    width: "100%",
    padding: "8px 10px",
    margin: "8px 0",
    borderRadius: 8,
    border: "1px solid #233043",
    background: "#0d1117",
    color: "#e6edf3",
    outline: "none",
    fontSize: 14,
  },
};
