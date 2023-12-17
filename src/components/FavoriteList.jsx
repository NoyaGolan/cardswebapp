import { useEffect, useState } from "react";
import Card from "./Card";
import { getAll } from "../services/cardServices";
import { useAuth } from "../context/auth.context";

const FavoriteList = () => {
  const [cards, setCards] = useState([]);
  const { user } = useAuth();
  const { checked } = useAuth();
  useEffect(() => {
    getAll()
      .then((response) => {
        setCards(response.data.filter((card) => card.likes.includes(user._id)));
      })
      .catch((error) => console.log(error));
  }, []);

  const replaceCard = (newCard) => {
    const newCards = cards.map((x) => {
      if (x._id === newCard._id) {
        return newCard;
      }
      return x;
    });
    setCards(newCards);
  };

  return (
    <div
      className={`text-center ${checked ? " bg-info" : `bg-dark text-light`}`}
    >
      <h1>Favorite Cards</h1>
      <p>Here you can find all your favorite cards</p>
      {!cards.length ? (
        <p>You don't have any favorites yet, </p>
      ) : (
        <div className="cards-container d-flex flex justify-content-center align-items-center flex-wrap  ">
          {cards.map((card) => (
            <Card
              user={user}
              details={card}
              key={card._id}
              replaceCard={replaceCard}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default FavoriteList;