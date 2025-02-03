import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "./firebase";
import { collection, addDoc, serverTimestamp, query, orderBy } from "firebase/firestore";

function ChatRoom() {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"));
  const [messages] = useCollectionData(q);
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      displayName,
    });

    setFormValue("");
  };

  return (
    <>
      <div className="messages">
        {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Mesajınızı yazın..."
        />
        <button type="submit">Gönder</button>
      </form>
    </>
  );
}

function ChatMessage({ message }) {
  const { text, uid, displayName } = message;
  const isCurrentUser = uid === auth.currentUser?.uid;

  return (
    <div className={`message ${isCurrentUser ? "sent" : "received"}`}>
      {!isCurrentUser && <p className="name">{displayName}</p>}
      <p className="text">{text}</p>
    </div>
  );
}

export default ChatRoom;