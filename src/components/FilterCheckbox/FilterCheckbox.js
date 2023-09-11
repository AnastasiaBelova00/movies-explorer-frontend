import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <label className="toggle">
      <input className="toggle__input" type="checkbox"></input>
      <div className="toggle__fill"></div>
    </label>
  );
}
