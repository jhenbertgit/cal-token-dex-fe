import ComboBox from "@/components/ComboBox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Swap = () => {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle className="flex justify-center font-bold text-4xl">
          Swap Token
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex space-x-2">
            <Input type="number" placeholder="0" />
            <ComboBox />
          </div>
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
