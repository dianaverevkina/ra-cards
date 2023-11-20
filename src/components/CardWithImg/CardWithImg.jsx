import { Card } from "../Card/Card"

export const CardWithImg = ({link, title, text}) => {
  return (
    <Card title={title} text={text}>
      <div className="card__img">
        <img src={link} alt="" />
      </div>
    </Card>
  )
}
