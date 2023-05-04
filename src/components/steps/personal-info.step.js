export default () => {
  return (
    <div>

      <div className="">

        <div className="pb-7">
          <h3 className="text-blue-900 font-bold text-xl">Personal info</h3>
          <p className="text-slate-400 ">Please provide your name, email address, and phone number.</p>
        </div>

        <div>
          <form className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-blue-900 font-semibold">Name</label>
              <input placeholder="e.g. Stephen King" className="border p-2 rounded-md outline-blue-400 outline-1"/>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-blue-900 font-semibold">Email Address</label>
              <input placeholder="e.g. stephenking@lorem.com" className="border p-2 rounded-md outline-blue-400 outline-1" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-blue-900 font-semibold">Phone Number</label>
              <input placeholder="e.g. +1 234 567 890" className="border p-2 rounded-md outline-blue-400 outline-1"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
