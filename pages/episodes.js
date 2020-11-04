import Container from "../components/Container";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

import Global from "../services/Global";
import axios from "axios";

const Episodes = (props) => {
  const { info, results } = props.allres;

  return (
    <Container title="Episodes">
      <Cards results={results} route="episodes" />
      <Pagination next={info.next} prev={info.prev} route="episodes" />
    </Container>
  );
};

Episodes.getInitialProps = async (ctx) => {
  const { page } = ctx.query;
  try {
    if (ctx.query.page) {
      const res = await axios.get(`${Global.url}episode?page=${page}`);
      const resultsData = res.data;
      return { allres: resultsData };
    } else {
      const res = await axios.get(`${Global.url}episode`);
      const resultsData = res.data;
      return { allres: resultsData };
    }
  } catch (error) {
    return { error };
  }
};

export default Episodes;
