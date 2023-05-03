export function PrimaryButton({ title }) {
  return <button className="pl-6 pr-6 p-1 rounded-md bg-slate-900 text-white">{title}</button>;
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
