import React from "react";
import { Route } from "react-router-dom";
import App from "./App";

const Home = () => {
  return (
    <div>
      <Route exact path="/" component={App} />
    </div>
  );
};

export default Home;
