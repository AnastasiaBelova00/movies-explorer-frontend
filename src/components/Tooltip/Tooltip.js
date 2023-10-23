import "./Tooltip.css";

export default function Tooltip({
  isTooltipOpen,
  setTooltipOpen,
  isRegistered,
}) {
  const title = isRegistered
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз";
  return (
    <div
      className={`tooltip ${isTooltipOpen ? "tooltip_opened" : ""}`}
      onClick={() => setTooltipOpen(false)}
    >
      <div className="tooltip__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="tooltip__button-exit"
          onClick={() => setTooltipOpen(false)}
          type="button"
          aria-label="Кнопка закрытия"
        />
        <h2 className="tooltip__title">{title}</h2>
      </div>
    </div>
  );
}
