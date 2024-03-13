import { useContext } from 'react';
import currencyFormatter from '../../utils/formatting';
import CartContext from '../../store/CartContext';

const imgSrcUrl = 'http://localhost:3001';

function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  return (
    <li className="meal-item">
      <article>
        <img src={`${imgSrcUrl}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button
            type="button"
            className="button"
            onClick={() => cartCtx.addItem(meal)}
          >
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;
