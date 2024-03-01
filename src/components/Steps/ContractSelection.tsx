import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const ContractSelection = () => {
  return (
    <>
      <h1>Are the groups going to create a Group Contract?</h1>
      <RadioGroup defaultValue="yes" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="r2" />
          <Label htmlFor="r2">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="r3" />
          <Label htmlFor="r3">No</Label>
        </div>
      </RadioGroup>
    </>
  );
};

export default ContractSelection;
