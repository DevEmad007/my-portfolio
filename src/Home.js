import "./Home.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { blogs, setBlogs, isPending, error } = useFetch(
        "http://localhost:8000/blogs"
    );

    const handleDelete = (Id) => {
        const newBlog = blogs.filter((blog) => {
            return blog.blogId !== Id;
        });
        setBlogs(newBlog);
    };

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {blogs && (
                <BlogList
                    blogs={blogs}
                    title="All the blogs"
                    handleDelete={handleDelete}
                />
            )}
        </div>
    );
};

export default Home;
