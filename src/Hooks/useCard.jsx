<<<<<<< HEAD
import { useState, useEffect } from "react";

import { getCard } from "../services/cardServices";
export const useCard = (id) => {
  const [card, setCard] = useState({});

  useEffect(() => {
    const getCardById = async () => {
      const { data } = await getCard(id);

      setCard(data);
    };

    getCardById();
  }, [id]);

  return card;
=======
import { useState, useEffect } from "react";

import { getCard } from "../services/cardServices";
export const useCard = (id) => {
  const [card, setCard] = useState({});

  useEffect(() => {
    const getCardById = async () => {
      const { data } = await getCard(id);

      setCard(data);
    };

    getCardById();
  }, [id]);

  return card;
>>>>>>> 4775264fcc18031bd413e02ab09d06451cbf08af
};