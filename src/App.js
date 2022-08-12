import { useEffect } from "react";
import { useState } from "react";
import "./index.scss";
import Blog from "./components/Blog";
import data from "./data";
import Modal from "./components/Modal";
import Loading from "./components/Loading";

function App() {
    const [blogs, setBlogs] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // const fetchblogs = async () => {
    //     setIsLoading(true);
    //     const resp = await fetch(
    //         "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/blogs"
    //     );
    //     const data = await resp.json();
    //     setBlogs(data);
    //     // setIsLoading(false);
    // };

    // useEffect(() => {
    //     fetchblogs();
    // }, []);
    // if (isLoading) {
    //     return <Loading />;
    // }

    function handleShowModal(id) {
        setIsShowModal(true);
        setModalContent(blogs.find((blog) => blog.id === id));
    }
    return (
        <main>
            <section className="blog-container">
                {blogs.map((blog, idx) => {
                    return (
                        <Blog
                            handleShowModal={handleShowModal}
                            key={idx}
                            blog={blog}
                        />
                    );
                })}
            </section>
            {isShowModal && (
                <Modal blog={modalContent} setIsShowModal={setIsShowModal} />
            )}
        </main>
    );
}

export default App;
