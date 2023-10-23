import "./Input.css";

export default function Input({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  handleChange,
  pattern,
  error,
}) {
  return (
    <>
      <label className="form__input-label">{label}</label>
      <input
        className="form__input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        value={value}
        onChange={handleChange}
        pattern={pattern}
      ></input>
      <span className="form__input-error">{error}</span>
    </>
  );
}
