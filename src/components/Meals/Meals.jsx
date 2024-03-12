import Error from '../Error/Error';
import useHttp from '../../hooks/useHttp';
import MealItem from './MealsItem';

const requestUrl = 'http://localhost:3001';
const requestConfig = {};

export default function Meals() {
  const {
    isLoading,
    error,
    data: mealsData,
  } = useHttp(`${requestUrl}/meals`, requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  return (
    <ul id="meals">
      {mealsData &&
        mealsData.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
