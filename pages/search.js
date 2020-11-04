import Container from "../components/Container";
import Cards from "../components/Cards";
import SearchInput from "../components/SearchInput";
import { useRouter } from "next/router";

import Global from "../services/Global";
import axios from "axios";

const SearchCharacter = (props) => {
  const router = useRouter();

  if (props.allres) {
    var { results } = props.allres;
  }
  return (
    <Container title="Search Results">
      <SearchInput />
      {results && <Cards results={results} route="characters" />}
      {!results && (
        <h2 className="p-5">
          Not results with: <b>{router.query.name}</b>
        </h2>
      )}
    </Container>
  );
};

SearchCharacter.getInitialProps = async (ctx) => {
  const { name } = ctx.query;
  try {
    const res = await axios.get(`${Global.url}character/?name=${name}`);
    const resultsData = res.data;
    return { allres: resultsData };
  } catch (error) {
    return { error };
  }
};

export default SearchCharacter;
