import currencyFormatter from '../../utils/formatting';

const imgSrcUrl = 'http://localhost:3001';

function MealItem({ meal }) {
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
          <button type="button" className="button">
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;
