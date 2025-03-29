import { cn } from "@/lib/utils";

interface DoorProps {
  isOpen: boolean;
}

export default function Door({ isOpen }: DoorProps) {
  return (
    <div className="absolute w-[240px] h-[380px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[1000px]">
      {/* Door frame - outer frame that stays fixed */}
      <div className="absolute inset-0 bg-red-950 rounded-lg border border-red-950 overflow-hidden">
        {/* Door frame - inner frame that stays fixed */}
        <div className="absolute inset-[10px] bg-red-900 rounded-md border-2 border-red-800 overflow-hidden">
          {/* Dark inside area visible when door is open */}
          <div className="absolute inset-0 bg-red-950/80" />
        </div>
      </div>
      
      {/* The actual door that opens */}
      <div 
        className={cn(
          "absolute inset-[15px] bg-red-700 rounded-md overflow-hidden transition-all duration-700",
          "shadow-md border-2 border-red-800"
        )}
        style={{
          transformOrigin: "0% 50%",
          transform: isOpen ? "perspective(1000px) rotateY(-85deg)" : "perspective(1000px) rotateY(0deg)",
          transition: "transform 0.7s ease-in-out",
        }}
      >
        {/* Door panels */}
        <div className="absolute inset-[20px] top-[20px] bottom-[60%] border border-red-800/60 rounded-t-lg" />
        <div className="absolute inset-[20px] top-[45%] bottom-[20px] border border-red-800/60 rounded-b-lg" />
        
        {/* Door handle (knob) */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full border border-yellow-600 shadow-md" />
      </div>
      
      {/* Doorstep */}
      <div className="absolute bottom-0 translate-y-full w-full h-4 bg-red-950 rounded-b-sm" />
    </div>
  );
}
