import { Card } from "../Card/Card"

export const CardWithoutImg = ({ text, title }) => {
  return (
    <Card title={title} text={text} />
  )
}
