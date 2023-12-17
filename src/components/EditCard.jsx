import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { createCard, editCard, getCard } from "../services/cardServices";
import { useCard } from "../Hooks/useCard";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import FormCard from "./FormCard";
const EditCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState();
  const { checked } = useAuth();
  const [serverError, setServerError] = useState("");
  const edit = true;
  useEffect(() => {
    getCard(id).then((response) => setCard(response.data));
  }, [id]);
  const form = useFormik({
    validateOnMount: true,
    enableReinitialize: true, // Add this line
    initialValues: {
      title: card?.title,
      subtitle: card?.subtitle,
      description: card?.description,
      phone: card?.phone,
      email: card?.email,
      web: card?.web,
      image: { url: card?.image.url, alt: "picture" },
      address: {
        country: card?.address.country,
        city: card?.address.city,
        street: card?.address.street,
        houseNumber: card?.address.houseNumber,
        zip: card?.address.zip,
      },
    },

    validate(values) {
      const schema = Joi.object({
        title: Joi.string().min(2).max(256).required(),
        subtitle: Joi.string().min(2).max(256).required(),
        description: Joi.string().min(2).max(1024).required(),
        phone: Joi.string().min(9).max(11).required(),
        email: Joi.string().min(5).required(),
        web: Joi.string().min(14),
        image: { url: Joi.string().min(14), alt: Joi.string().min(2).max(256) },
        address: {
          country: Joi.string().required(),
          city: Joi.string().required(),
          street: Joi.string().required(),
          houseNumber: Joi.number().min(1).required(),
          zip: Joi.number().required(),
        },
      });

      const { error } = schema.validate(values, { abortEarly: false });

      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        // const key = detail.context.key;
        const key = detail.path[detail.path.length - 1];
        errors[key] = detail.message;
      }
      return errors;
    },
    async onSubmit(values) {
      try {
        const response = await editCard(id, values);

        navigate("/my-cards");
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  return (
    <main
      className={`form-signin w-100 m-auto pt-5 ${checked ? "" : `bg-dark`}`}
    >
      <FormCard form={form} checked={checked} edit={edit} />
    </main>
  );
};
export default EditCard;