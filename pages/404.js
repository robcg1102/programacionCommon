import Container from "../components/Container";

const Custom404 = () => {
  return (
    <Container title="Not found-404">
      <div className="alert alert-success text-center" role="alert">
        <h1 className="alert-heading">404!</h1>
        <h2>Page Not Found!</h2>
        <img
          src="https://res.cloudinary.com/robcg1102/image/upload/v1604468774/maq_img/rickMorty_u5tbyz.png"
          alt="Logo"
        />
        <hr />
      </div>
    </Container>
  );
};

export default Custom404;
