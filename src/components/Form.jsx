import { Formik } from "formik";
import SignUp from "./Sign-up";
const Form = ({ form, checked, serverError, isBusiness }) => {
  return (
    <form onSubmit={form.handleSubmit} className="pt-5">
      <h1
        className={`h3 mb-3 fw-normal text-center ${
          checked ? "" : `text-light`
        }`}
      >
        Please sign Up {isBusiness && "as business"}
      </h1>
      {serverError && <div className="alert alert-danger">{serverError}</div>}
      <div className="firstRow d-flex justify-content-center pt-3 ">
        <div className="form-floating pt-3 ">
          <input
            {...form.getFieldProps("name.first")}
            type="text"
            className="form-control"
            placeholder="First name text-dark"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.name?.first && form.errors.first}
          </span>
          <label htmlFor="floatingPassword">First name</label>
        </div>

        <div className="form-floating pt-3 mx-4 ">
          <input
            {...form.getFieldProps("name.last")}
            type="text"
            className="form-control"
            placeholder="Last name"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.name?.last && form.errors.last}
          </span>
          <label htmlFor="floatingPassword">Last name</label>
        </div>

        <div className="form-floating pt-2">
          <input
            {...form.getFieldProps("email")}
            type="email"
            className="form-control"
            placeholder="name@example.com"
            required
          />
          <span>{form.touched.email && form.errors.email}</span>
          <label htmlFor="floatingInput">Email address</label>
        </div>
      </div>
      <div className="secondRow d-flex justify-content-center pt-3">
        <div className="form-floating pt-2">
          <input
            {...form.getFieldProps("password")}
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.password && form.errors.password}
          </span>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-floating pt-3 mx-4">
          <input
            {...form.getFieldProps("phone")}
            type="text"
            className="form-control"
            placeholder="Phone"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.phone && form.errors.phone}
          </span>
          <label htmlFor="floatingPassword">Phone</label>
        </div>

        <div className="form-floating pt-3">
          <input
            {...form.getFieldProps("image.url")}
            type="text"
            className="form-control"
            placeholder="Image"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.image?.url && form.errors.url}
          </span>
          <label htmlFor="floatingPassword">Image</label>
        </div>
      </div>
      <div className="thirdRow d-flex justify-content-center pt-3">
        <div className="form-floating pt-3">
          <input
            {...form.getFieldProps("address.country")}
            type="text"
            className="form-control"
            placeholder="Country"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.address?.country && form.errors.country}
          </span>
          <label htmlFor="floatingPassword">Country</label>
        </div>

        <div className="form-floating pt-3 mx-4">
          <input
            {...form.getFieldProps("address.city")}
            type="text"
            className="form-control"
            placeholder="City"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.address?.city && form.errors.city}
          </span>
          <label htmlFor="floatingPassword">City</label>
        </div>

        <div className="form-floating pt-3">
          <input
            {...form.getFieldProps("address.street")}
            type="text"
            className="form-control"
            placeholder="Street"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.address?.street && form.errors.street}
          </span>
          <label htmlFor="floatingPassword">Street</label>
        </div>
      </div>
      <div className="lastRow d-flex justify-content-center pt-3">
        <div className="form-floating pt-3 mx-4">
          <input
            {...form.getFieldProps("address.houseNumber")}
            type="number"
            className="form-control"
            placeholder="House number"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.address?.houseNumber && form.errors.houseNumber}
          </span>
          <label htmlFor="floatingPassword">House Number</label>
        </div>

        <div className="form-floating pt-3">
          <input
            {...form.getFieldProps("address.zip")}
            type="text"
            className="form-control"
            placeholder="Zip"
            required
          />
          <span className="text-danger fs-6">
            {form.touched.address?.zip && form.errors.zip}
          </span>
          <label htmlFor="floatingPassword">Zip</label>
        </div>
      </div>

      <div className=" d-flex justify-content-center py-5">
        <button
          disabled={!form.isValid}
          className="btn btn-primary w-25 py-2 "
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
export default Form;