import { useRouter } from "next/router";
import Container from "../../components/Container";

import Global from "../../services/Global";
import axios from "axios";

const Episode = (props) => {
  const router = useRouter();

  const { episode } = props;

  return (
    <Container title={episode.name}>
      <div className="contentCenter">
        <div className="card col-md-5">
          <img
            src="https://res.cloudinary.com/robcg1102/image/upload/v1604477261/maq_img/s-l300_sjqhqb.png"
            className="card-img-top"
            alt={episode.name}
          />
          <div className="card-body">
            <h5 className="card-title text-primary">Name: {episode.name}</h5>
            <p className="card-text">Air date: {episode.air_date}</p>
            <p className="card-text">Episode: {episode.episode}</p>
            <div className="btn btn-primary" onClick={() => router.back()}>
              Back
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

Episode.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(`${Global.url}episode/${ctx.query.id}`);
    const resultsData = res.data;
    return { episode: resultsData };
  } catch (error) {
    return { error };
  }
};

export default Episode;
