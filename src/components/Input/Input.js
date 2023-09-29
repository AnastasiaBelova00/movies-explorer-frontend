import "./Input.css";

export default function Input({ lable, type, name, id, placeholder }) {
  return (
    <>
      <label className="form__input-label">{lable}</label>
      <input
        className="form__input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
      ></input>
    </>
  );
}
