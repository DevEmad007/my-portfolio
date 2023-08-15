import { useState } from "react";
import "./Home.css";

const Home = () => {
    const blogsData = [
        {
            title: "my new website",
            body: "lorem ipsumoenjrgn....1",
            author: "yemad",
            blogId: 1,
            authorId: 7,
        },
        {
            title: "Party website",
            body: "lorem ipsumoenjrgn....2",
            author: "yemad",
            blogId: 1,
            authorId: 7,
        },
        {
            title: "web party",
            body: "lorem ipsumoenjrgn....3",
            author: "yemad",
            blogId: 1,
            authorId: 7,
        },
        {
            title: "just website",
            body: "lorem ipsumoenjrgn....4",
            author: "jojo",
            blogId: 1,
            authorId: 10,
        },
    ];

    const [blogs, setBlogs] = useState(blogsData);

    return (
        <div
            className="Home"
            style={{ textAlign: "center", fontFamily: "sans-serif" }}
        >
            {blogs.map((blog) => (
                <section key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <b>written by {blog.author}</b>
                </section>
            ))}
        </div>
    );
};

export default Home;
