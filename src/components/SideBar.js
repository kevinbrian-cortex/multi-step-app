export default function () {
  return <StepsWrapper />;
}

const StepsWrapper = () => {
  return (
    <div
      className="flex flex-col gap-4 justify-start p-4 pr-24 rounded-lg"
      style={{
        backgroundImage: "url(/assets/images/bg-sidebar-desktop.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition : "center"
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <StepIndicator item={item} />
      ))}
    </div>
  );
};

const StepIndicator = ({ item }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="border border-white p-3 rounded-full w-8 h-8 flex flex-col items-center justify-center text-white">
        <span>{item}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-slate-100">STEP {item}</span>
        <span className="text-white">YOUR INFO</span>
      </div>
    </div>
  );
};
