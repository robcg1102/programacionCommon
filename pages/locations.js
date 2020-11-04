import Container from "../components/Container";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

import Global from "../services/Global";
import axios from "axios";

const Locations = (props) => {
  const { info, results } = props.allres;

  return (
    <Container title="Locations">
      <Cards results={results} route="locations" />
      <Pagination next={info.next} prev={info.prev} route="locations" />
    </Container>
  );
};

Locations.getInitialProps = async (ctx) => {
  const { page } = ctx.query;
  try {
    if (ctx.query.page) {
      const res = await axios.get(`${Global.url}location?page=${page}`);
      const resultsData = res.data;
      return { allres: resultsData };
    } else {
      const res = await axios.get(`${Global.url}location`);
      const resultsData = res.data;
      return { allres: resultsData };
    }
  } catch (error) {
    return { error };
  }
};

export default Locations;
