import {PostItem} from "./PostItem";
import {useState} from "react";




export const PostList = (props) => {

    return (
        <div >
            <h1 style={{textAlign: "center"}}>{props.title}</h1>
            {props.posts.map((post, index) =>
                <PostItem  post={post} key={post.id} number={index + 1}/>
            )}
        </div>
    );
};




