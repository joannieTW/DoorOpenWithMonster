import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface DoorProps {
  isOpen: boolean;
}

export default function Door({ isOpen }: DoorProps) {
  // Use state to track the door opening animation stages
  const [openingStage, setOpeningStage] = useState(0);
  
  // Track the animation stages when isOpen changes
  useEffect(() => {
    if (isOpen) {
      // Reset to start
      setOpeningStage(0);
      
      // Door starts to open - subtle initial movement
      const stage1 = setTimeout(() => setOpeningStage(1), 100);
      
      // Door opens halfway
      const stage2 = setTimeout(() => setOpeningStage(2), 300);
      
      // Door opens more
      const stage3 = setTimeout(() => setOpeningStage(3), 500);
      
      // Door fully open
      const stage4 = setTimeout(() => setOpeningStage(4), 700);
      
      return () => {
        clearTimeout(stage1);
        clearTimeout(stage2);
        clearTimeout(stage3);
        clearTimeout(stage4);
      };
    } else {
      // Reset when door closes
      setOpeningStage(0);
    }
  }, [isOpen]);
  
  // Different door styles based on opening stage
  const doorStyles = {
    // Door closed
    0: "w-full skew-x-0 -translate-x-0",
    // Door starting to open
    1: "w-[98%] skew-x-[1deg] -translate-x-[2%]",
    // Door opens more
    2: "w-[80%] skew-x-[5deg] -translate-x-[15%]",
    // Door opens even more
    3: "w-[60%] skew-x-[10deg] -translate-x-[30%]",
    // Door fully open
    4: "w-[40%] skew-x-[15deg] -translate-x-[40%]",
  };
  
  return (
    <div className="absolute w-[200px] h-[350px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[800px]">
      {/* Door frame - this stays fixed */}
      <div className="absolute inset-0 bg-red-900 rounded-t-lg border-4 border-red-950">
        {/* Door frame inner shadow */}
        <div className="absolute inset-[3px] border-2 border-red-800 rounded-t-lg opacity-50" />
        
        {/* Door opening shadow - only visible when door is open */}
        <div className={cn(
          "absolute inset-[15px] bg-black rounded-t-lg opacity-0 transition-opacity duration-500",
          isOpen && openingStage > 1 && "opacity-40"
        )} />
      </div>
      
      {/* Door that opens - with 3D perspective effect */}
      <div 
        className={cn(
          "absolute h-[calc(100%-30px)] top-[15px] left-[15px] right-[15px] bg-red-700 rounded-sm border-2 border-red-800 shadow-md transition-all duration-300",
          doorStyles[openingStage as keyof typeof doorStyles]
        )}
        style={{
          transformOrigin: "left center",
        }}
      >
        {/* Door panels */}
        <div className="absolute inset-[20px] top-[20px] bottom-[60%] border-2 border-red-800 rounded-t-lg" />
        <div className="absolute inset-[20px] top-[45%] bottom-[20px] border-2 border-red-800 rounded-b-lg" />
        
        {/* Door handle (knob) */}
        <div className="absolute right-3 top-1/2 w-5 h-5 bg-yellow-500 rounded-full border border-yellow-600 shadow-sm" />
      </div>
      
      {/* Doorstep */}
      <div className="absolute bottom-0 translate-y-full w-full h-4 bg-red-950 rounded-b-sm" />
    </div>
  );
}
