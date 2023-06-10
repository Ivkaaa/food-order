import React,{ useEffect, useState }  from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import './Meals.css';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect( () => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://menu-30773-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Sorry, something went wrong!");
      };
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      setIsLoading(false);
      setError(error.message);
    });

  }, []);

  if (isLoading) {
    return <section>
      <p className="loading-message">Loading...</p>
    </section>
  }

  if (error) {
    return <section>
      <p className="error-message">{error}</p>
    </section>
  }

  const mealsList = meals.map(meal => 
      <MealItem 
        key={meal.id} 
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
      />
  )

    return (
      <section className="meals">
        <Card>
          <ul className="meals-list">
            {mealsList}
            </ul>
        </Card>
      </section>
    );
};
export default Meals;
