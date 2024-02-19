const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return(
      <div className="home">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
      <div className="preview" key={blogs.id}>
        <h3>{blog.title}</h3>
        <p>Writen by: {blog.author}</p>
      </div>
      ))}
  </div>
  );
    }
    export default Bloglist;