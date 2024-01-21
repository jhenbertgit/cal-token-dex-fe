import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const SwapSettings = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <Settings />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end" side="top">
        Settings
      </PopoverContent>
    </Popover>
  );
};

export default SwapSettings;
