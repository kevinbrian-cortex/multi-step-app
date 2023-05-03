import SideBar from "@/components/SideBar";
import { PrimaryButton } from "@/components/buttons";
import Addons from "@/components/steps/addons";
import PersonalInfoStep from "@/components/steps/personal-info.step";
import PlansStep from "@/components/steps/plans.step";
import Summary from "@/components/steps/summary";
import { Inter } from "next/font/google";
import { Steps, StepsProvider } from "react-step-builder";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min h-screen bg-slate-200 flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl">
        <StepsProvider>
          <div className="flex m-4">``
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

  const render = steps.map((item) => {
    const Component = item.component;

    return <Component />;
  });

  return (
    <div className="flex flex-col m-10 gap-9">
      <Steps>{steps.map((item) => item.component)}</Steps>
      <div className="flex flex-col items-end">
        <PrimaryButton title={"Next"} />
      </div>
    </div>
  );
};
