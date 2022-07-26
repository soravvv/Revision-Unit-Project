import React from "react";

export const Process = () => {
  return (
    <div className="processContainer">
      <div className="banner">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1992/1575/files/Our-Story-Materials_1512x.jpg?v=1634068174"
            alt=""
          />{" "}
          <h1
            style={{
              backgroundColor: "black",
            }}
            className="center"
          >
            Our Process
          </h1>
        </div>
      </div>
      <div>
        <h3>
          Our products are constantly evolving. Boundaries are pushed and
          failures are celebrated. The drive to experiment is what fuels our
          passion and transforms our work into a labor of love.
        </h3>
      </div>
      <hr />
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/1992/1575/files/Our-Story-Pioneering_a91c14f5-9526-47bd-8e89-296940f30388_540x.jpg?v=1623219417"
          alt=""
        />
        <h3>
          Global Collaboration <br />{" "}
          <span>
            <p>
              Our Portland manufacturing facility is just the start. We’ve
              traveled the world to find the best materials and makers. The
              result is a collaborative manufacturing process that yields
              best-in-class craftsmanship in every aspect.
            </p>
          </span>
        </h3>
      </div>
      <hr />
      <div>
        <h3>
          Materials That Matter{" "}
          <p>
            Whether it's grade-A lumber from Pacific Northwest forests, or
            cellulose acetate from Italy, we scour the globe for the world's
            most premium materials and components.
          </p>
        </h3>
        <img
          src="https://cdn.shopify.com/s/files/1/1992/1575/files/Our-Process-Materials_540x.jpg?v=1623219417"
          alt=""
        />
      </div>
    </div>
  );
};
