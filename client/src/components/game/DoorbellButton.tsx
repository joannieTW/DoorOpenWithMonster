import { Button } from "@/components/ui/button";
import { useAudio } from "@/lib/stores/useAudio";
import { GamePhase } from "@/lib/stores/useGame";
import { Bell, RotateCcw } from "lucide-react";

interface DoorbellButtonProps {
  phase: GamePhase;
  onDoorbellClick: () => void;
  onRestartClick: () => void;
}

export default function DoorbellButton({ 
  phase, 
  onDoorbellClick, 
  onRestartClick 
}: DoorbellButtonProps) {
  const { toggleMute, isMuted } = useAudio();
  
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
      {phase === "ready" && (
        <Button 
          onClick={onDoorbellClick}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <Bell className="mr-2 h-5 w-5" />
          Ring Doorbell
        </Button>
      )}
      
      {phase === "ended" && (
        <Button 
          onClick={onRestartClick}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          <RotateCcw className="mr-2 h-5 w-5" />
          Try Again
        </Button>
      )}
      
      {/* Sound toggle button */}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={toggleMute}
        className="text-xs"
      >
        {isMuted ? "🔇 Unmute Sound" : "🔊 Mute Sound"}
      </Button>
    </div>
  );
}
