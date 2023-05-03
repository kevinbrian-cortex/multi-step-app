export default () => {
  return (
    <div>
      <div>
        <h6>Pick addons</h6>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div>
        {[1, 2, 3].map((item) => (
          <Addons />
        ))}
      </div>
    </div>
  );
};

const Addons = () => {
  return (
    <div>
      <div>
        <input type="checkbox" />
      </div>

      <div>
        <div>
          <strong>Online service</strong>
          <p>Access to multiplayer games</p>
        </div>

        <div>
          <strong>+$1/mo</strong>
        </div>
      </div>
    </div>
  );
};
