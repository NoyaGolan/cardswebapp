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
};