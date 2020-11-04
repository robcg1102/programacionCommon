import Container from "../components/Container";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";

import Global from "../services/Global";
import axios from "axios";

const Characters = (props) => {
  const { info, results } = props.allres;

  return (
    <Container title="Characters">
      <SearchInput />
      <Cards results={results} route="characters" />
      <Pagination next={info.next} prev={info.prev} route="characters" />
    </Container>
  );
};

Characters.getInitialProps = async (ctx) => {
  const { page } = ctx.query;
  try {
    if (ctx.query.page) {
      const res = await axios.get(`${Global.url}character?page=${page}`);
      const resultsData = res.data;
      return { allres: resultsData };
    } else {
      const res = await axios.get(`${Global.url}character`);
      const resultsData = res.data;
      return { allres: resultsData };
    }
  } catch (error) {
    return { error };
  }
};

export default Characters;
