export function PrimaryButton({ title, ...rest }) {
  return (
    <button
      className="pl-6 pr-6 p-2 rounded-md bg-slate-900 text-white font-medium hover:bg-blue-800"
      {...rest}
    >
      {title}
    </button>
  );
}

export function SecondaryButton({ title, ...rest }) {
  return (
    <button
      className="pl-6 pr-6 p-2 rounded-md  text-slate-400 font-medium hover:text-slate-800"
      {...rest}
    >
      {title}
    </button>
  );
}

export function SwitchButton() {
  return (
    <div className="border flex justify-center mt-4 p-2 rounded bg-neutral-200 items-center gap-2">
      <strong className="font-medium text-sm">Monthly</strong>
      <div className="border bg-blue-900 w-16 rounded-full">
        <div className="w-5 h-5 bg-white m-1 rounded-full"></div>
      </div>
      <strong className="font-medium text-sm">yearly</strong>
    </div>
  );
}
