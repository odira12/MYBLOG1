import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({blogs, title}) => {
    

    return(
      <div className="BlogList">
      <h2>{title}</h2>
      {blogs.map((blog) => (
      <div className="preview" key={blogs.id}>
        <Link to= {`/Blog-details/${blog.id}`}>
        <h3>{blog.title}</h3>
        <p>Writen by: {blog.author}</p>
        </Link>
      </div>
      ))}
  </div>
  );
    }
    export default BlogList;