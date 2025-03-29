import { cn } from "@/lib/utils";

interface DoorProps {
  isOpen: boolean;
}

export default function Door({ isOpen }: DoorProps) {
  return (
    <div className="absolute w-[200px] h-[350px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Door frame - this stays fixed */}
      <div className="absolute inset-0 bg-red-900 rounded-t-lg border-4 border-red-950">
        {/* Door frame inner shadow */}
        <div className="absolute inset-[3px] border-2 border-red-800 rounded-t-lg opacity-50" />
      </div>
      
      {/* Door that opens */}
      <div 
        className={cn(
          "absolute inset-[15px] bg-red-700 rounded-sm border-2 border-red-800 shadow-md transition-all duration-700 origin-left",
          isOpen ? "rotate-[80deg] translate-x-[-10px]" : "rotate-0"
        )}
        style={{
          // Add door hinge effect
          transformOrigin: "0% 50%"
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
