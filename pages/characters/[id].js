import { useRouter } from "next/router";
import Container from "../../components/Container";

import Global from "../../services/Global";
import axios from "axios";

const Character = (props) => {
  const router = useRouter();

  const { character } = props;

  return (
    <Container title={character.name}>
      <div className="contentCenter">
        <div className="card col-md-5">
          <img
            src={character.image}
            className="card-img-top"
            alt={character.name}
          />
          <div className="card-body">
            <h5 className="card-title text-primary">Name: {character.name}</h5>
            <p className="card-text">Species: {character.species}</p>
            <p className="card-text">Gender: {character.gender}</p>
            {character.status == "Alive" && (
              <p className="card-text text-success">
                Status: {character.status}
              </p>
            )}
            {character.status == "Dead" && (
              <p className="card-text text-danger">
                Status: {character.status}
              </p>
            )}
            {character.status == "unknown" && (
              <p className="card-text text-secondary">
                Status: {character.status}
              </p>
            )}
            <p className="card-text">Location: {character.location.name}</p>
            <div className="btn btn-primary" onClick={() => router.back()}>
              Back
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

Character.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(`${Global.url}character/${ctx.query.id}`);
    const resultsData = res.data;
    return { character: resultsData };
  } catch (error) {
    return { error };
  }
};

export default Character;
