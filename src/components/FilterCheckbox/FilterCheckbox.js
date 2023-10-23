import "./FilterCheckbox.css";

export default function FilterCheckbox({ changeCheckbox, isCheckbox }) {
  return (
    <>
      <label className="toggle">
        <input
          className="toggle__input"
          type="checkbox"
          checked={isCheckbox}
          onChange={changeCheckbox}
        ></input>
        <span className="toggle__fill"></span>
      </label>
    </>
  );
}
