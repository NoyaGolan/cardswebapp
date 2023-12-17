<<<<<<< HEAD
import { useEffect, useState } from "react";
import Card from "./Card";
import { getAll } from "../services/cardServices";
import { useAuth } from "../context/auth.context";

const Home = () => {
  const [cards, setCards] = useState([]);
  const { user } = useAuth();
  const { checked, search } = useAuth();

  useEffect(() => {
    getAll()
      .then((response) => {
        setCards(response.data);
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
      className={`text-center  z-0 ${checked ? "" : `bg-dark`} ${
        checked ? "" : "text-light"
      }`}
    >
      <h1>Business cards</h1>
      <p>Here you can find all business cards from all over the world </p>

      <div className="cards-container d-flex flex justify-content-center align-items-center flex-wrap  ">
        {!cards.length && "there are no cards"}
        {search
          ? cards
              .filter((card) => card.title.includes(search))
              .map((card) => (
                <Card
                  details={card}
                  key={card._id}
                  replaceCard={replaceCard}
                  user={user}
                />
              ))
          : cards.map((card) => (
              <Card
                details={card}
                key={card._id}
                replaceCard={replaceCard}
                user={user}
              />
            ))}
      </div>
    </div>
  );
};
=======
import { useEffect, useState } from "react";
import Card from "./Card";
import { getAll } from "../services/cardServices";
import { useAuth } from "../context/auth.context";

const Home = () => {
  const [cards, setCards] = useState([]);
  const { user } = useAuth();
  const { checked, search } = useAuth();

  useEffect(() => {
    getAll()
      .then((response) => {
        setCards(response.data);
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
      className={`text-center  z-0 ${checked ? "" : `bg-dark`} ${
        checked ? "" : "text-light"
      }`}
    >
      <h1>Business cards</h1>
      <p>Here you can find all business cards from all over the world </p>

      <div className="cards-container d-flex flex justify-content-center align-items-center flex-wrap  ">
        {!cards.length && "there are no cards"}
        {search
          ? cards
              .filter((card) => card.title.includes(search))
              .map((card) => (
                <Card
                  details={card}
                  key={card._id}
                  replaceCard={replaceCard}
                  user={user}
                />
              ))
          : cards.map((card) => (
              <Card
                details={card}
                key={card._id}
                replaceCard={replaceCard}
                user={user}
              />
            ))}
      </div>
    </div>
  );
};
>>>>>>> 4775264fcc18031bd413e02ab09d06451cbf08af
export default Home;