export default () => {
  return (
    <div className="flex flex-col gap-8">

      <div className>
        <h1 className="text-xl font-bold text-blue-900">Pick add-ons</h1>
        <p className="text-gray-500">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((item) => (
          <Addons />
        ))}
      </div>
    </div>
  );
};

const Addons = () => {
  return (
    <div className="flex flex-row items-center gap-4 border p-2 rounded hover:bg-slate-100 hover:border-blue-950 hover:cursor-pointer">

      <div className="p-2">
        <input type="checkbox" />
      </div>

      <div className="flex-1 flex justify-between items-center">

        <div className="flex flex-col">
          <span className="text-blue-900 font-medium">Online service</span>
          <span className="text-sm text-gray-500 font-sm">Access to multiplayer games</span>
        </div>

        <div className="p-2">
          <span className="font-medium text-sm text-blue-950">+$1/mo</span>
        </div>
      </div>
    </div>
  );
};
