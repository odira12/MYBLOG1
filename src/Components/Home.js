// import React, { useState, useEffect } from "react";
// import axios from "axios";
import UseFetch from "./UseFetch";
import BlogList from "./BlogList";
const Home = () => {
  const {data}= UseFetch("http://localhost:4000/blogs");
  return (
    <div className="home" >

      {data && <BlogList blogs={data} title="All blogs"/>}
    </div>
  );
}

export default Home;