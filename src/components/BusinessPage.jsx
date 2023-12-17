<<<<<<< HEAD
import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { getCard } from "../services/cardServices";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BusinessPage = () => {
  const [card, setCard] = useState();
  const { user, checked } = useAuth();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getCard(id).then((response) => setCard(response.data));
  }, [id]);

  return (
    <>
      <h1 className={`mt-5 text-center ${!checked && "text-light"}`}>
        Business card details
      </h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 order-md-1 order-2">
            <table className="table">
              <thead>
                <tr>
                  <th className="bg-info">Title</th>
                  <td>{card?.title}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Subtitle</th>
                  <td>{card?.subtitle}</td>
                </tr>
                <tr>
                  <th className="bg-info">Description</th>
                  <td>{card?.description}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{card?.phone}</td>
                </tr>
                <tr>
                  <th className="bg-info">Web</th>
                  <td>{card?.web}</td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>{card?.address.country}</td>
                </tr>
                <tr>
                  <th className="bg-info">City</th>
                  <td>{card?.address.city}</td>
                </tr>
                <tr>
                  <th>Street</th>
                  <td>{card?.address.street}</td>
                </tr>
                <tr>
                  <th className="bg-info">House number</th>
                  <td>{card?.address.houseNumber}</td>
                </tr>
                <tr>
                  <th>Zip</th>
                  <td>{card?.address.zip}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <img
              src={card?.image.url}
              alt={card?.image.alt}
              className="img-fluid"
              style={{ maxHeight: "400px", marginBottom: "20px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

=======
import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { getCard } from "../services/cardServices";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BusinessPage = () => {
  const [card, setCard] = useState();
  const { user, checked } = useAuth();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getCard(id).then((response) => setCard(response.data));
  }, [id]);

  return (
    <>
      <h1 className={`mt-5 text-center ${!checked && "text-light"}`}>
        Business card details
      </h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 order-md-1 order-2">
            <table className="table">
              <thead>
                <tr>
                  <th className="bg-info">Title</th>
                  <td>{card?.title}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Subtitle</th>
                  <td>{card?.subtitle}</td>
                </tr>
                <tr>
                  <th className="bg-info">Description</th>
                  <td>{card?.description}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{card?.phone}</td>
                </tr>
                <tr>
                  <th className="bg-info">Web</th>
                  <td>{card?.web}</td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>{card?.address.country}</td>
                </tr>
                <tr>
                  <th className="bg-info">City</th>
                  <td>{card?.address.city}</td>
                </tr>
                <tr>
                  <th>Street</th>
                  <td>{card?.address.street}</td>
                </tr>
                <tr>
                  <th className="bg-info">House number</th>
                  <td>{card?.address.houseNumber}</td>
                </tr>
                <tr>
                  <th>Zip</th>
                  <td>{card?.address.zip}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <img
              src={card?.image.url}
              alt={card?.image.alt}
              className="img-fluid"
              style={{ maxHeight: "400px", marginBottom: "20px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

>>>>>>> 4775264fcc18031bd413e02ab09d06451cbf08af
export default BusinessPage;