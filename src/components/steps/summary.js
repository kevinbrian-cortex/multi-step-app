import Link from "next/link";

export default () => {
  return (
    <div>
      <div>
        <h5>Finish Up</h5>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div>
        {[1, 2, 3].map((item) => (
          <Item />
        ))}
      </div>
    </div>
  );
};

const Item = () => {
  return (
    <div>
      <div>
        <strong>Arcade (Monthly)</strong>
        <Link>Change</Link>
      </div>

      <div>
        <span>$9/mo</span>
      </div>
    </div>
  );
};
