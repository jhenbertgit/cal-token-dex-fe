import ComboBox from "@/components/ComboBox";
import SwapSettings from "@/components/SwapSettings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Swap = () => {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle className="flex justify-between font-bold text-2xl">
          Swap Token
          <SwapSettings />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-2">
          <div className="flex space-x-2">
            <Input type="number" placeholder="0" />
            <ComboBox />
          </div>
          <ArrowUpDown />
          <div className="flex space-x-2">
            <Input type="number" placeholder="0" disabled={true} />
            <ComboBox />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button size="lg" className="w-full font-medium text-2xl">
          Swap
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Swap;
