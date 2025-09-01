import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
export function LabelDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}
