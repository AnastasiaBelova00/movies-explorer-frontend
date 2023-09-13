import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <>
      <label className="toggle">
        <input className="toggle__input" type="checkbox"></input>
        <span className="toggle__fill"></span>
      </label>
    </>
  );
}
