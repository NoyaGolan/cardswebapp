import { useFormik } from "formik";
import { useState } from "react";
import Joi from "joi";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
const SignIn = () => {
  const { user, login } = useAuth();
  const { checked } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        email: Joi.string()
          .min(5)
          .required()
          .email({ tlds: { allow: false } }),
        password: Joi.string()
          .min(7)
          .max(20)
          .required()
          .pattern(new RegExp("(?=.*[0-9])"))
          .pattern(new RegExp("(?=.*[A-Z])"))
          .pattern(new RegExp("(?=.*[a-z])"))
          .pattern(new RegExp("(?=.*[!@#$%^&])")),
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
        console.log(detail);
      }
      return errors;
    },
    async onSubmit(values) {
      try {
        const response = await login(values);
        navigate("/");
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });
  return (
    <main
      className={`form-signin w-25 pt-5 mt-5 w-100 ${checked ? "" : `bg-dark`}`}
    >
      <form onSubmit={form.handleSubmit} className="pt-5">
        <h1
          className={`h3 mb-3 fw-normal text-center ${
            checked ? "" : `text-light`
          }`}
        >
          Please sign in
        </h1>

        <div className="form-floating pt-3 w-25 mx-auto text-center">
          <input
            {...form.getFieldProps("email")}
            type="email"
            className="form-control"
            placeholder="name@example.com"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.email && form.errors.email}
          </span>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating pt-2  w-25 mx-auto text-center">
          <input
            {...form.getFieldProps("password")}
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <span className="text-danger fs-6 mb-5">
            {form.touched.password && form.errors.password}
          </span>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary py-2 my-5  w-25 "
            disabled={!form.isValid}
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </main>
  );
};
export default SignIn;