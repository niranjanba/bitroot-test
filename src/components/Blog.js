import React from "react";

function Blog({ blog, handleShowModal }) {
    const {
        id,
        title,
        content,
        date,
        thumbnail: { large: image },
        author: { name, role },
    } = blog;
    let formated = new Date(parseInt(`${date}100`));
    formated = `${formated.toLocaleString("default", {
        month: "short",
    })} ${formated.getDate()}, ${formated.getFullYear()}`;

    return (
        <article className="blog">
            <header onClick={() => handleShowModal(id)}>
                <img className="blog-img" src={image} alt={title} />
                <div className="overlay">learn more</div>
            </header>
            <div className="info-container">
                <div className="info">
                    <h4 className="title">{title}</h4>
                    <p className="content">{content}</p>
                    <div className="footer">
                        <span>
                            {name} - {role}
                        </span>
                        <span>{formated}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Blog;
