import { Card } from '../components/Card'

export const Users = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <h2>Users</h2>
      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          )
        })}
      </div>
    </div>
  )
}
