import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import ChatRoom from "./ChatRoom";
import AuthForm from "./AuthForm";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <header>
        <h1>Chat App</h1>
        {user && <SignOut />}
      </header>
      <section>{user ? <ChatRoom /> : <AuthForm />}</section>
    </div>
  );
}

function SignOut() {
  return (
    <button onClick={() => auth.signOut()}>
      Çıkış Yap
    </button>
  );
}

export default App;