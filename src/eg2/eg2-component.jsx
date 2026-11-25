import React from "react";

const Drdo = () => {
  return <h2>DRDO</h2>;
};

const Agni = () => {
  return <h3>Agni Missile</h3>;
};

const BrahMos = () => {
  return <h3>BrahMos Missile</h3>;
};

const Eg2Component = () => {
  return (
    <div>
      <h1>Example 2</h1>
      <Drdo />
      <Agni />
      <BrahMos />
    </div>
  );
};

export default Eg2Component;