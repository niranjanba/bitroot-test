import React from "react";
import person from "../images/person.png";

function Modal({ blog, setIsShowModal }) {
    const {
        title,
        content,
        thumbnail: { large: image },
        author: { name, avatar, role },
    } = blog;
    return (
        <div className="modal-bg">
            <div className="modal-wrapper">
                <div className="close-btn-container">
                    <span
                        onClick={() => setIsShowModal(false)}
                        className="close-btn"
                    >
                        +
                    </span>
                </div>
                <img src={image} alt={title} />
                <div className="modal-body">
                    <h4 className="title">{title}</h4>
                    <p className="content">{content}</p>
                    <div className="author-info">
                        <img
                            src={avatar || person}
                            alt={name}
                            className="avatar"
                        />
                        <p>
                            {name} - {role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
