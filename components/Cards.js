import Router from "next/router";

const Cards = (props) => {
  return (
    <div className="contentCards" style={{ textAlign: "center" }}>
      {props.results.map((data, index) => {
        return (
          <div
            className="card"
            style={{ width: "300px", margin: "15px" }}
            key={index}
          >
            {data.image && (
              <img src={data.image} className="card-img-top" alt={data.name} />
            )}
            {!data.image && props.route == "locations" && (
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1604476580/maq_img/location_oy9vzf.webp"
                alt="genericImage"
              />
            )}

            {!data.image && props.route == "episodes" && (
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1604477261/maq_img/s-l300_sjqhqb.png"
                alt="genericImage"
              />
            )}
            <div className="card-body myStyleCard">
              <h5 className="card-title">Name: {data.name}</h5>

              <a
                className="btn btn-primary"
                onClick={(e) =>
                  Router.push(
                    `/${props.route}/[id]`,
                    `/${props.route}/${data.id}`
                  )
                }
              >
                More Info...
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
