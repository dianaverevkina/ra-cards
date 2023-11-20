export const Card = ({children, text, title}) => {
  return (
    <div className="card">
      {children}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <button type='button' className="card__btn">Go somewhere</button>
      </div>
    </div>
  )
}
