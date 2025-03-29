import { cn } from "@/lib/utils";

interface DoorProps {
  isOpen: boolean;
}

export default function Door({ isOpen }: DoorProps) {
  return (
    <div className="absolute w-[200px] h-[350px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Door frame */}
      <div className="absolute inset-0 bg-accent rounded-t-lg border-4 border-primary" />
      
      {/* The actual door that opens */}
      <div 
        className={cn(
          "absolute inset-0 bg-primary rounded-t-lg border-2 border-accent shadow-md transition-transform duration-700 origin-left",
          isOpen ? "rotate-[85deg]" : "rotate-0"
        )}
      >
        {/* Door handle */}
        <div className="absolute right-4 top-1/2 w-3 h-12 bg-yellow-400 rounded-full" />
      </div>
      
      {/* Doorstep */}
      <div className="absolute bottom-0 translate-y-full w-full h-4 bg-muted-foreground rounded-b-sm" />
      
      {/* SVG door design */}
      <svg 
        className={cn(
          "absolute inset-0 w-full h-full transition-transform duration-700 origin-left",
          isOpen ? "rotate-[85deg]" : "rotate-0"
        )}
        viewBox="0 0 100 175" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Door panels */}
        <rect x="10" y="10" width="80" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-foreground" />
        <rect x="10" y="60" width="80" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-foreground" />
        <rect x="10" y="110" width="80" height="55" rx="2" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-foreground" />
      </svg>
    </div>
  );
}
