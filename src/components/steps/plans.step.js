import Image from "next/image";
import { SwitchButton } from "../buttons";

export default () => {
  return (
    <div>

      <div className="mb-8">
        <h5 className="text-lg font-bold text-slate-800">Select your plan</h5>
        <p className="text-slate-500">You have the option of monthly or yearly billing.</p>
      </div>

      <div className="flex gap-2">
        {[1, 2, 3].map((item) => (
          <Plan />
        ))}
      </div>

      <div>
        <SwitchButton />
      </div>
    </div>
  );
};

const Plan = () => {
  return (
    <div className="flex flex-col border p-3 border-slate-300 hover:bg-slate-100 rounded hover:border-blue-400 hover:cursor">
      <span>
        <Image src="/assets/images/icon-arcade.svg" width="35" height="35" />
      </span>
      <div className="flex flex-col mt-5 mr-10">
        <strong className="text-blue-900">Arcade</strong>
        <span className="text-sm text-slate-500">$9/mo</span>
      </div>
    </div>
  );
};
