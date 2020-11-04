import { useState } from "react";
import Link from "next/link";

const SearchInput = () => {
  const [input, setInput] = useState("");
  return (
    <div className="contentCenter">
      <form className="form-inline text-center">
        <div className="align-items-center">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search a character by name"
          />
          <Link href={`/search?name=${input}`}>
            <button className="btn btn-primary m-1">Search</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
