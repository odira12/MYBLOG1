// import React, { useState, useEffect } from "react";
// import axios from "axios";
import Bloglist from './Bloglist';
import useFetch from "./useFetch";

const Home = () => {
  const blogs= useFetch("http://localhost:4000/blogs");
  return (
    <div className="home" >

      {blogs && <Bloglist blogs={blogs}title="All blogs"/>}
    </div>
  );
}

export default Home;