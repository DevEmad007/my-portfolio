const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blogPreview" key={blog.blogId}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDelete(blog.blogId)}>Delete</button>
                    <b>{"Written by " + blog.author}</b>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
