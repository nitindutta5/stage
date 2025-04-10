import "./App.css";
import StoryHeader from "./components/StoryHeader";
import users from "../data/user.json";
import { useState } from "react";
import StoryViewer from "./components/StoryViewer";

function App() {
  const [userId, setUserId] = useState<number | null>(null);
  return (
    <div>
      <h1>Instagram</h1>
      <StoryHeader users={users} setUserId={setUserId} />
      {userId && <StoryViewer userId={userId} setUserId={setUserId} />}
    </div>
  );
}

export default App;
