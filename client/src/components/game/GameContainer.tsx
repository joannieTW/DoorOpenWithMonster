import { useEffect, useState } from "react";
import Door from "./Door";
import Monster from "./Monster";
import DoorbellButton from "./DoorbellButton";
import { useGame } from "@/lib/stores/useGame";
import { useAudio } from "@/lib/stores/useAudio";

export default function GameContainer() {
  const { phase, start, restart, end } = useGame();
  const { playSuccess } = useAudio();
  const [doorOpen, setDoorOpen] = useState(false);
  const [monsterVisible, setMonsterVisible] = useState(false);

  // Handle doorbell click
  const handleDoorbellClick = () => {
    // Start the game
    if (phase === "ready") {
      start();
      
      // Open the door with a slight delay
      setTimeout(() => {
        setDoorOpen(true);
      }, 300);
      
      // Show monster with a delay after door opens - timing coordinated with door animation
      setTimeout(() => {
        setMonsterVisible(true);
        playSuccess();
      }, 1000);
      
      // End the game state after animation completes
      setTimeout(() => {
        end();
      }, 3000);
    }
  };

  // Handle restart click
  const handleRestartClick = () => {
    if (phase === "ended") {
      // Reset the states
      setDoorOpen(false);
      setMonsterVisible(false);
      
      // After a brief delay to allow animations to reset
      setTimeout(() => {
        restart();
      }, 300);
    }
  };

  // Log game state changes for debugging
  useEffect(() => {
    console.log("Game phase changed:", phase);
  }, [phase]);

  return (
    <div className="relative w-full max-w-md h-[500px] mx-4">
      {/* Background wall */}
      <div className="absolute inset-0 bg-secondary rounded-lg shadow-lg" />
      
      {/* Door component */}
      <Door isOpen={doorOpen} />
      
      {/* Monster component */}
      <Monster isVisible={monsterVisible} />
      
      {/* Button component - changes based on game state */}
      <DoorbellButton 
        phase={phase} 
        onDoorbellClick={handleDoorbellClick}
        onRestartClick={handleRestartClick}
      />
    </div>
  );
}
