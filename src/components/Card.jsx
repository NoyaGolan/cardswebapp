<<<<<<< HEAD
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteCard, getAllMyCards } from "../services/cardServices";
import { refreshTokenHeader } from "../services/userService";
import UseCard from "../Hooks/useCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
const Card = ({ details, replaceCard, user, cards, setCards }) => {
  const [isLike, setIsLike] = useState(false);
  const { checked } = useAuth();
  const navigate = useNavigate();
  function toBusinessPage() {
    navigate(`/business-page/${details._id}`);
  }

  const onLike = async () => {
    try {
      const response = await axios.patch(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${details._id}`
      );

      setIsLike((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async () => {
    const response = await deleteCard(details._id);
    setCards(cards.filter((card) => card._id != details._id));
    return response;
  };

  const onEdit = () => {
    navigate(`/edit-card/${details._id}`);
  };

  useEffect(() => {
    const isUserId = details.likes.includes(user?._id);
    setIsLike(isUserId);
  }, [user?._id]);
  return (
    <div
      className={`card m-4 ${checked ? "" : `bg-dark text-light`}`}
      style={{ width: "18rem" }}
    >
      <img
        onClick={toBusinessPage}
        style={{ height: "200px" }}
        src={details.image.url}
        className="card-img-top"
        alt={details.image.alt}
      />
      <div className="card-body">
        <h5 className="card-title">{details.title}</h5>

        <p className="card-text">{details.subtitle}</p>
        <p>Email: {details.email}</p>
        <p>Phone: {details.phone}</p>
        <p>{details.createdAt}</p>
      </div>
      <div className="d-flex">
        {user?.isAdmin ||
          (details.user_id === user?._id && (
            <i onClick={() => onDelete()} className="bi bi-trash3 pr-5"></i>
          ))}
        {user ? (
          <i
            onClick={() => onLike()}
            className={`bi bi-heart-fill px-2 ${isLike ? "likedCard" : ""}`}
          ></i>
        ) : (
          ""
        )}
        {user?.isBusiness && details.user_id === user?._id ? (
          <i onClick={onEdit} className="bi bi-pencil px-2"></i>
        ) : (
          ""
        )}
        <a href={`tel:${details.phone}`}>
          <i className="bi bi-telephone-fill"></i>
        </a>
      </div>
    </div>
  );
};
=======
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteCard, getAllMyCards } from "../services/cardServices";
import { refreshTokenHeader } from "../services/userService";
import UseCard from "../Hooks/useCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
const Card = ({ details, replaceCard, user, cards, setCards }) => {
  const [isLike, setIsLike] = useState(false);
  const { checked } = useAuth();
  const navigate = useNavigate();
  function toBusinessPage() {
    navigate(`/business-page/${details._id}`);
  }

  const onLike = async () => {
    try {
      const response = await axios.patch(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${details._id}`
      );

      setIsLike((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async () => {
    const response = await deleteCard(details._id);
    setCards(cards.filter((card) => card._id != details._id));
    return response;
  };

  const onEdit = () => {
    navigate(`/edit-card/${details._id}`);
  };

  useEffect(() => {
    const isUserId = details.likes.includes(user?._id);
    setIsLike(isUserId);
  }, [user?._id]);
  return (
    <div
      className={`card m-4 ${checked ? "" : `bg-dark text-light`}`}
      style={{ width: "18rem" }}
    >
      <img
        onClick={toBusinessPage}
        style={{ height: "200px" }}
        src={details.image.url}
        className="card-img-top"
        alt={details.image.alt}
      />
      <div className="card-body">
        <h5 className="card-title">{details.title}</h5>

        <p className="card-text">{details.subtitle}</p>
        <p>Email: {details.email}</p>
        <p>Phone: {details.phone}</p>
        <p>{details.createdAt}</p>
      </div>
      <div className="d-flex">
        {user?.isAdmin ||
          (details.user_id === user?._id && (
            <i onClick={() => onDelete()} className="bi bi-trash3 pr-5"></i>
          ))}
        {user ? (
          <i
            onClick={() => onLike()}
            className={`bi bi-heart-fill px-2 ${isLike ? "likedCard" : ""}`}
          ></i>
        ) : (
          ""
        )}
        {user?.isBusiness && details.user_id === user?._id ? (
          <i onClick={onEdit} className="bi bi-pencil px-2"></i>
        ) : (
          ""
        )}
        <a href={`tel:${details.phone}`}>
          <i className="bi bi-telephone-fill"></i>
        </a>
      </div>
    </div>
  );
};
>>>>>>> 4775264fcc18031bd413e02ab09d06451cbf08af
export default Card;