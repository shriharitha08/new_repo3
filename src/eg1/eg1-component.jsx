import React from "react";

const Isro = () => {
  return <h2>ISRO</h2>;
};

const Chandrayaan = () => {
  return <h3>Chandrayaan 3</h3>;
};

const Mangalyaan = () => {
  return <h3>Mangalyaan</h3>;
};

const Eg1Component = () => {
  return (
    <div>
      <h1>Example 1</h1>
      <Isro />
      <Chandrayaan />
      <Mangalyaan />
    </div>
  );
};

export default Eg1Component;