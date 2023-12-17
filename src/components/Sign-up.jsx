<<<<<<< HEAD
import { registerUser } from "../services/userService";
import { useState } from "react";
import Joi from "joi";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import Form from "./Form";
const SignUp = ({ isBusiness }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { checked } = useAuth();
  // const { user, signUp } = useAuth();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: { first: "", middle: "", last: "" },
      email: "",
      password: "",
      phone: "",
      image: { url: "", alt: "profile" },
      address: {
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
      },
      isBusiness,
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.object({
          first: Joi.string().min(2).max(256).required(),
          middle: Joi.string().allow("", null).max(256).optional(),
          last: Joi.string().min(2).max(256).required(),
        }),
        phone: Joi.string().min(9).max(11).required(),
        image: {
          url: Joi.string().uri().min(14).required(),
          alt: Joi.string().min(2).max(256),
        },
        email: Joi.string()
          .min(5)
          .required()
          .email({ tlds: { allow: false } }),
        password: Joi.string()
          .min(8)
          .max(20)
          .required()
          .pattern(new RegExp("(?=.[0-9])"))
          .pattern(new RegExp("(?=.*[A-Z])"))
          .pattern(new RegExp("(?=.*[a-z])"))
          .pattern(new RegExp("[!@#$%^&]")),
        address: {
          country: Joi.string().min(2).max(256).required(),
          city: Joi.string().min(2).max(256).required(),
          street: Joi.string().min(2).max(256).required(),
          houseNumber: Joi.number().min(2).max(256).required(),
          zip: Joi.number().min(2).max(256).required(),
        },
        isBusiness: Joi.boolean(),
      });
      const { error } = schema.validate(values, {
        abortEarly: false,
      });

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
      try {
        const response = await registerUser(values);
        navigate("/sign-in");
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  return (
    <main
      className={`form-signin w-100 m-auto pt-5 ${checked ? "" : `bg-dark`} `}
    >
      <Form
        form={form}
        checked={checked}
        serverError={serverError}
        isBusiness={isBusiness}
      />
    </main>
  );
};
=======
import { registerUser } from "../services/userService";
import { useState } from "react";
import Joi from "joi";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import Form from "./Form";
const SignUp = ({ isBusiness }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { checked } = useAuth();
  // const { user, signUp } = useAuth();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: { first: "", middle: "", last: "" },
      email: "",
      password: "",
      phone: "",
      image: { url: "", alt: "profile" },
      address: {
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
      },
      isBusiness,
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.object({
          first: Joi.string().min(2).max(256).required(),
          middle: Joi.string().allow("", null).max(256).optional(),
          last: Joi.string().min(2).max(256).required(),
        }),
        phone: Joi.string().min(9).max(11).required(),
        image: {
          url: Joi.string().uri().min(14).required(),
          alt: Joi.string().min(2).max(256),
        },
        email: Joi.string()
          .min(5)
          .required()
          .email({ tlds: { allow: false } }),
        password: Joi.string()
          .min(8)
          .max(20)
          .required()
          .pattern(new RegExp("(?=.[0-9])"))
          .pattern(new RegExp("(?=.*[A-Z])"))
          .pattern(new RegExp("(?=.*[a-z])"))
          .pattern(new RegExp("[!@#$%^&]")),
        address: {
          country: Joi.string().min(2).max(256).required(),
          city: Joi.string().min(2).max(256).required(),
          street: Joi.string().min(2).max(256).required(),
          houseNumber: Joi.number().min(2).max(256).required(),
          zip: Joi.number().min(2).max(256).required(),
        },
        isBusiness: Joi.boolean(),
      });
      const { error } = schema.validate(values, {
        abortEarly: false,
      });

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
      try {
        const response = await registerUser(values);
        navigate("/sign-in");
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  return (
    <main
      className={`form-signin w-100 m-auto pt-5 ${checked ? "" : `bg-dark`} `}
    >
      <Form
        form={form}
        checked={checked}
        serverError={serverError}
        isBusiness={isBusiness}
      />
    </main>
  );
};
>>>>>>> 4775264fcc18031bd413e02ab09d06451cbf08af
export default SignUp;