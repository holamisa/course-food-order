import Error from '../Error/Error';

export default function Meals() {
  const isLoading = false;
  const error = false;
  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  return (
    <ul id="meals">
      <li className="meal-item">
        <article>
          <img src="" alt="" />
          <div>
            <h3>MEAL 1</h3>
            <p className="meal-item-price">$1000</p>
            <p className="meal-item-description">MEAL DESCRIPTION</p>
          </div>
          <p className="meal-item-actions">
            <button type="button" className="button">
              Add to Cart
            </button>
          </p>
        </article>
      </li>
      <li className="meal-item">
        <article>
          <img src="" alt="" />
          <div>
            <h3>MEAL 2</h3>
            <p className="meal-item-price">$1000</p>
            <p className="meal-item-description">MEAL DESCRIPTION</p>
          </div>
          <p className="meal-item-actions">
            <button type="button" className="button">
              Add to Cart
            </button>
          </p>
        </article>
      </li>
      <li className="meal-item">
        <article>
          <img src="" alt="" />
          <div>
            <h3>MEAL 3</h3>
            <p className="meal-item-price">$1000</p>
            <p className="meal-item-description">MEAL DESCRIPTION</p>
          </div>
          <p className="meal-item-actions">
            <button type="button" className="button">
              Add to Cart
            </button>
          </p>
        </article>
      </li>
    </ul>
  );
}
