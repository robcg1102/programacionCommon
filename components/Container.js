import Head from "next/head";
import Navigation from "./Navigation";

const Container = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/robcg1102/image/upload/v1604468774/maq_img/rickMorty_u5tbyz.png"
        type="image/x-icon"
      />

      <meta name="description" content="Rick & Morty" />

      <title>{props.title}</title>
    </Head>
    <Navigation />

    <div className="container p-4">{props.children}</div>
    <footer className="footer p-3 bg-dark text-white">robcg1102</footer>
  </div>
);

export default Container;
