import React from "react";
import {MyButton} from "./UI/button/MyButton";

export const PostItem = (props) => {

    const removePost = () => {
        props.removePost(props.post.id)
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={removePost}>Удалить</MyButton>
            </div>
        </div>
    );
};
