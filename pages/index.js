import Container from "../components/Container";
import Link from "next/link";

const Index = () => {
  return (
    <Container title="Home">
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to Rick & Morty web</h1>
        <p className="m-2">You can see a lot of information about the serie</p>
        <p className="m-1">
          <small>Select section</small>
        </p>
      </div>
      <div className="contentCards homeContent" style={{ textAlign: "center" }}>
        <Link href="/characters">
          <div
            className="card m-3 bg-light myCardStyle"
            style={{ width: "18rem" }}
          >
            <img
              src="https://res.cloudinary.com/robcg1102/image/upload/v1604527396/maq_img/characters_i1ej95.jpg"
              className="card-img-top"
              alt="characters"
            />
            <div className="card-body">
              <p className="card-text">All characters</p>
            </div>
          </div>
        </Link>
        <Link href="/episodes">
          <div
            className="card m-3 bg-light myCardStyle"
            style={{ width: "18rem" }}
          >
            <img
              src="https://res.cloudinary.com/robcg1102/image/upload/v1604477261/maq_img/s-l300_sjqhqb.png"
              className="card-img-top"
              alt="episodes"
            />
            <div className="card-body">
              <p className="card-text">All episodes</p>
            </div>
          </div>
        </Link>
        <Link href="locations">
          <div
            className="card m-3 bg-light myCardStyle"
            style={{ width: "18rem" }}
          >
            <img
              src="https://res.cloudinary.com/robcg1102/image/upload/v1604476580/maq_img/location_oy9vzf.webp"
              className="card-img-top"
              alt="locations"
            />
            <div className="card-body">
              <p className="card-text">All locations</p>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Index;
