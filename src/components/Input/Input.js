import "./Input.css";

export default function Input({ lable, type, name, id, placeholder }) {
  return (
    <>
      <label className="input__label">{lable}</label>
      <input
        className="input__input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
      ></input>
    </>
  );
}
