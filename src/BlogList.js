import { useState } from "react";

const BlogList = ({ blogsData, title }) => {
    const [blogs, setBlogs] = useState(blogsData);

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blogPreview" key={blog.blogId}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <b>{"Written by " + blog.author}</b>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
