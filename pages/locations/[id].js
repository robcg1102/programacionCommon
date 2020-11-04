import { useRouter } from "next/router";
import Container from "../../components/Container";

import Global from "../../services/Global";
import axios from "axios";

const Location = (props) => {
  const router = useRouter();

  const { location } = props;

  return (
    <Container title={location.name}>
      <div className="contentCenter">
        <div className="card col-md-5">
          <img
            src="https://res.cloudinary.com/robcg1102/image/upload/v1604476580/maq_img/location_oy9vzf.webp"
            className="card-img-top"
            alt={location.name}
          />
          <div className="card-body">
            <h5 className="card-title text-primary">Name: {location.name}</h5>
            <p className="card-text">Type: {location.type}</p>
            <p className="card-text">Dimension: {location.dimension}</p>
            <div className="btn btn-primary" onClick={() => router.back()}>
              Back
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

Location.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(`${Global.url}location/${ctx.query.id}`);
    const resultsData = res.data;
    return { location: resultsData };
  } catch (error) {
    return { error };
  }
};

export default Location;
