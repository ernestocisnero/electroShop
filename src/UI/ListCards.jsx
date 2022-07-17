import { shopData } from "../data/shopData";
import { Card } from "./Card"

import './PersonalizedUIstyles.css';

export const ListCards = () => {
  return (
    <>
      <div className="container d-flex flex-row flex-wrap mt-4 " id="card-container">
        {
          shopData.map(item =>

            <Card
              key={item.id}
              id={item.id}
              manufacturer={item.manufacturer}
              type={item.type}
              price={item.price}
              description={item.description}
              imgPath={`assets/images/${item.tag}.jpg`}
            />
          )
        }
      </div>
    </>
  )
}
