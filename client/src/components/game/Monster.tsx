import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MonsterProps {
  isVisible: boolean;
}

export default function Monster({ isVisible }: MonsterProps) {
  const [isWaving, setIsWaving] = useState(false);
  
  // Start waving animation when monster becomes visible
  useEffect(() => {
    if (isVisible) {
      setIsWaving(true);
      
      // Stop waving after a few seconds
      const timer = setTimeout(() => {
        setIsWaving(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div 
      className={cn(
        "absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 transition-all duration-500",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        {/* Monster body */}
        <circle cx="50" cy="50" r="40" fill="#6366f1" />
        
        {/* Monster eyes */}
        <circle cx="35" cy="40" r="8" fill="white" />
        <circle cx="65" cy="40" r="8" fill="white" />
        <circle cx="35" cy="40" r="4" fill="black" />
        <circle cx="65" cy="40" r="4" fill="black" />
        
        {/* Monster mouth - smile */}
        <path d="M 30 60 Q 50 75 70 60" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
        
        {/* Monster arm that waves */}
        <g 
          className={cn(
            "transition-transform duration-300",
            isWaving && "animate-[wave_0.5s_ease-in-out_infinite_alternate]"
          )}
          style={{
            transformOrigin: "25px 45px"
          }}
        >
          <path d="M 25 45 L 5 25" stroke="#6366f1" strokeWidth="10" strokeLinecap="round" />
          <path d="M 5 25 L 0 15" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
        </g>
        
        {/* Monster other arm */}
        <path d="M 75 45 L 95 55" stroke="#6366f1" strokeWidth="10" strokeLinecap="round" />
      </svg>
    </div>
  );
}
