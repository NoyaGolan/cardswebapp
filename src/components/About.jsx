import { useAuth } from "../context/auth.context";

const About = () => {
  const { checked } = useAuth();
  return (
    <div className={`container mt-5  ${!checked && "text-light"}`}>
      <h1 className="text-center m-5">About</h1>
      <p
        className="text-center"
        style={{ fontFamily: "cursive", lineHeight: "1.5" }}
      >
        Welcome to our Business Card Hub,
        <br /> where your professional identity meets digital elegance! Unlock a
        world of networking possibilities by creating an account with us.
        <br /> As a registered member, you gain exclusive access to personalized
        business card templates, seamless updates, and a digital showcase of
        your professional journey.
        <br /> Stand out from the crowd, make lasting connections, and elevate
        your online presence effortlessly.
        <br /> Join us to redefine networking and leave a lasting impression in
        the digital realm. Your success story begins with a simple click – sign
        up today and let your business card speak volumes!
      </p>

      <div className="row">
        <h2 className="text-center mt-3 mb-3">Plans</h2>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">No accounts</h5>
              <p className="card-text">
                You will be able to view all business cards only, with no
                exclusive features
              </p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Standard account</h5>
              <p className="card-text">
                Enjoy giving feedback and liking ,you will have a page of all
                Business cards that you could liked, in addition to viewing all
                Business cards.
              </p>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title bg-primary">Business account</h5>
              <p className="card-text">
                exclusive features of creating new Business cards ,editing ,and
                deleting them.which will put your business in a different league
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;