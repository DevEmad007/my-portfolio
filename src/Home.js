import { useState } from "react";
import "./Home.css";
import BlogList from "./BlogList";

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
            title: "just website",
            body: "lorem ipsumoenjrgn....4",
            author: "jojo",
            blogId: 1,
            authorId: 10,
        },
        {
            title: "web party",
            body: "lorem ipsumoenjrgn....3",
            author: "yemad",
            blogId: 1,
            authorId: 7,
        },
    ];

    return (
        <div className="home">
            <BlogList blogsData={blogsData} title="All the blogs" />
        </div>
    );
};

export default Home;
