import GameContainer from "./components/game/GameContainer";
import "@fontsource/inter";
import { useEffect } from "react";
import { useAudio } from "./lib/stores/useAudio";

function App() {
  // Set up audio elements on mount
  useEffect(() => {
    // Initialize sound effects
    const successSound = new Audio("/sounds/success.mp3");
    successSound.volume = 0.5;
    
    // Set up the audio in the store
    useAudio.getState().setSuccessSound(successSound);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-background overflow-hidden">
      <GameContainer />
    </div>
  );
}

export default App;
