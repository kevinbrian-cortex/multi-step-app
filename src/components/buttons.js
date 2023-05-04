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
    <div>
      <strong>Monthly</strong>
      <div>
        <div></div>
      </div>
      <strong>yearly</strong>
    </div>
  );
}
