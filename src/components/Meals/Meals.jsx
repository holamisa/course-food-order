import Error from '../Error/Error';
import useHttp from '../../hooks/useHttp';
import MealItem from './MealsItem';
import SERVER_URL from '../../constants/serverInfo';

const requestConfig = {};

export default function Meals() {
  const {
    isLoading,
    error,
    data: mealsData,
  } = useHttp(`${SERVER_URL}/meals`, requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  return (
    <ul id="meals">
      {mealsData.length > 0 &&
        mealsData.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
