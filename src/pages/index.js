import SideBar from "@/components/SideBar";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import Addons from "@/components/steps/addons";
import PersonalInfoStep from "@/components/steps/personal-info.step";
import PlansStep from "@/components/steps/plans.step";
import Summary from "@/components/steps/summary";
import { Inter } from "next/font/google";
import { Steps, StepsProvider, useSteps } from "react-step-builder";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min h-screen bg-slate-200 flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl p-5">
        <StepsProvider>
          <div className="flex">
            <SideBar />
            <Wrapper />
          </div>
        </StepsProvider>
      </div>
    </main>
  );
}

const Wrapper = () => {
  const steps = [
    { name: "personal-info", component: <PersonalInfoStep /> },
    { name: "plan", component: <PlansStep /> },
    { name: "Add-ons", component: <Addons /> },
    { name: "Summary", component: <Summary /> },
  ];

  //config
  const { next, prev, isFirst } = useSteps();

  return (
    <div className="flex flex-col gap-9 pl-7 p-8">
      <Steps>{steps.map((item) => item.component)}</Steps>
    <div className={`flex flex-row ${!isFirst ? "justify-between" : "justify-end" }`}>
        {!isFirst && <SecondaryButton title={"Go Back"} onClick={prev} />}
        <PrimaryButton title={"Next Step"} onClick={next} />
      </div>
    </div>
  );
};
