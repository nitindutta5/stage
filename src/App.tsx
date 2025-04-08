import "./App.css";
import StoryHeader from "./components/StoryHeader";
import users from "../data/user.json";
import { useState } from "react";
import StoryViewer from "./components/StoryViewer";

function App() {
  const [userId, setUserId] = useState<number | null>(null);
  return (
    <div>
      {/* Map the user thumbnail */}
      <StoryHeader users={users} setUserId={setUserId} />
      {/* On click of the thumbnail nail open the images and hide after showing all slides for 5 min */}
      {userId && <StoryViewer userId={userId} setUserId={setUserId} />}
    </div>
  );
}

export default App;
