import { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { Smile, Send, ArrowDown } from "lucide-react";
import axios from "axios";
import useAuth from "../auth/auth";


interface Message {
  content: string;
  sender_id: number;
  sender_username: string;
  sender_first_name: string;
  sender_last_name: string;
  created_at: string;
}

export default function Chat() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const { user = null } = useAuth() || {};
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [online_users, setOnlines] = useState<any[]>([]);

 
 



  useEffect(() => {
  const fetchOnlineUsers = () => {
    axios
      .get("http://localhost:8000/user/online", { withCredentials: true })
      .then(res => {
        setOnlines(res.data);
      })
      .catch(e => console.error(e));
  };

  fetchOnlineUsers(); 
  const interval = setInterval(fetchOnlineUsers, 5000); // har 5 soniyada yangilash

  return () => clearInterval(interval);
}, []);


  useEffect(() => {
    const container = document.getElementById("messages-container");

    if (!container) return;

    const handleScroll = () => {
      const distanceFromBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight;
      setShowScrollDown(distanceFromBottom > 600);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const socketUrl = `ws://localhost:8000/chat/ws/global`;
    const newWs = new WebSocket(socketUrl);

    newWs.onopen = () => {
      console.log("✅ Global WebSocket connected");
      setWs(newWs);

      axios
        .get("http://localhost:8000/chat/global/messages", { withCredentials: true })
        .then(res => {
          setMessages(res.data);
        })
        .catch(err => console.error("Error loading global messages:", err));
    };

    newWs.onmessage = (event) => {
      try {
        const newMessage = JSON.parse(event.data);
        setMessages((prev) => [...prev, newMessage]);
      } catch (err) {
        console.error("Error parsing message:", err);
      }
    };

    newWs.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    newWs.onclose = () => {
      console.log("❌ WebSocket disconnected");
    };

    setWs(newWs);

    return () => {
      newWs.close();
    };
  }, []);

  const handleDown = () => {
    const container = document.getElementById("messages-container");
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  const handleEmojiClick = (emojiData: any) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && ws && ws.readyState === WebSocket.OPEN) {
      ws.send(message);
      setMessage("");
    }
  };


  return (
    <div className="h-[91.7vh] mt-[60px] w-full bg-black relative overflow-hidden">
      <div className="flex w-full h-full">

        <div className="w-1/3 md:w-1/4 border-r border-[var(--green-border)] bg-black overflow-y-auto">
          <div className="divide-y divide-[var(--green-border)]">
            <div className="flex items-center gap-3 p-3 hover:bg-[var(--green-hover)] cursor-pointer transition">
              <div className="w-12 h-12 rounded-full bg-[var(--green-border)] flex items-center justify-center text-black font-bold">
                G
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-[var(--green-text)]">
                  <span className="font-semibold">Global chat</span>
                  <span className="text-xs opacity-60 flex items-center gap-1">
                    <div className="relative h-2 w-2 bg-[var(--green-text)] rounded-full z-10">
                      <div className="absolute h-2 w-2 bg-[var(--green-text)] rounded-full animate-pulse-signal -z-10"></div>
                    </div>
                    Online
                  </span>
                </div>
                <div className="text-sm text-[var(--green-text)] opacity-70 truncate">
                  Chat with everyone
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-black flex flex-col text-green-500">

          <div className="h-14 border-b border-[var(--green-border)] flex items-center px-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--green-border)] flex items-center justify-center font-bold text-black">
                G
              </div>
              <div>
                <p className="text-base text-[var(--green-text)] font-semibold">
                  Global Chat
                </p>
                <p className="text-xs text-[var(--green-text)] opacity-70 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-[var(--green-text)]"></div>
                  {online_users.length} online users yet
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex-1 p-4 text-[var(--green-text)] overflow-y-auto"
            style={{ maxHeight: "calc(91.7vh - 64px - 40px)" }}
            id="messages-container"
          >
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${msg.sender_id === user?.id ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`inline-flex p-[5px] rounded-2xl justify-center min-w-[60px] border min-h-[50px] flex-col text-left
                  ${msg.sender_id === user?.id
                        ? "bg-[var(--green-bg)] border-[0.5px] border-[var(--green-border)] text-white rounded-br-none"
                        : "bg-[var(--card-bg)] border-[0.5px] border-[var(--green-border)] rounded-bl-none"
                      }`}
                  >
                    <div className="ml-1 text-xs font-semibold">
                      {msg.sender_first_name} {msg.sender_last_name}
                    </div>
                    <div className="p-[5px] text-[14px] rounded-2xl relative flex items-end justify-end">
                      <span className="max-w-[300px] break-words min-w-[60px]">
                        {msg.content}
                      </span>
                      <span className="flex items-center gap-1 ml-auto text-[10px] opacity-60">
                        {new Date(msg.created_at)
                          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                          .replace("PM", "")
                          .replace("AM", "")
                        }
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-[var(--green-text)] opacity-50">
                  No messages in global chat yet
                </p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="relative h-[50px] w-full border-t border-[var(--green-border)] flex items-center"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-[80%] h-full ml-4 bg-transparent text-[var(--green-text)] placeholder-[var(--green-text)] focus:placeholder-[var(--green-border)] duration-500 transition-colors focus:outline-none"
            />

            {/* Emoji toggle */}
            <div
              onMouseEnter={() => setShowEmoji(true)}
              onMouseLeave={() => setShowEmoji(false)}
              className="ml-auto mr-2 text-[var(--green-text)] hover:text-[var(--green-border)] transition-colors cursor-pointer"
            >
              <Smile size={22} />
            </div>

            {/* Send button */}
            <button
              type="submit"
              className="mr-4 text-[var(--green-text)] hover:text-[var(--green-border)] transition-colors"
              disabled={!message.trim()}
            >
              <Send size={22} />
            </button>

            {/* Emoji Picker */}
            {showEmoji && (
              <div
                className="absolute bottom-[55px] right-4 z-50"
                onMouseEnter={() => setShowEmoji(true)}
                onMouseLeave={() => setShowEmoji(false)}
              >
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    border: "1px solid var(--green-border)",
                    borderRadius: "0",
                    backdropFilter: "blur(10px)",
                  }}
                />
              </div>
            )}
          </form>

          {showScrollDown && (
            <div
              className="fixed bottom-16 right-5 h-10 w-10 border border-[var(--green-text)] flex items-center justify-center rounded-full animate-pulse hover:cursor-pointer"
              onClick={handleDown}
            >
              <ArrowDown className="text-[var(--green-text)]" />
            </div>
          )}
        </div>
      </div>
    </div>

  );
}