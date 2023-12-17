import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { createCard } from "../services/cardServices";
import { useAuth } from "../context/auth.context";
import FormCard from "./FormCard";
const CreateCard = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const { checked } = useAuth();
  const form = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      image: { url: "", alt: "picture" },
      address: { country: "", city: "", street: "", houseNumber: "" },
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
          zip: Joi.number(),
        },
      });

      const { error } = schema.validate(values, { abortEarly: false });
      console.log(error);
      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        // const key = detail.context.key;
        const key = detail.path[detail.path.length - 1];
        errors[key] = detail.message;
        console.log(detail);
      }
      return errors;
    },
    async onSubmit(values) {
      console.log(values);

      try {
        const response = await createCard(values);
        console.log(response);
        navigate("/my-cards");
      } catch (err) {
        console.log(err);
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
      <FormCard form={form} checked={checked} />
    </main>
  );
};
export default CreateCard;