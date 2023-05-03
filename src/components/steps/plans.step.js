import { SwitchButton } from "../buttons";

export default () => {
  return (
    <div>
      <div>
        <h5>Select your plan</h5>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div>
        {[1, 2, 3, 4].map((item) => (
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
    <div>
      <span>
        <Image src="/assets/images/icon-arcade.svg" width="100" height="100" />
      </span>
      <div>
        <strong>Arcade $9/mo</strong>
        <span>$9/mo</span>
      </div>
    </div>
  );
};
