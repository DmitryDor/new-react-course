import {PostItem} from "./PostItem";


export const PostList = (props) => {

    if(!props.posts.length){
        return  <h1 style={{marginTop: "15%", color: "red", fontSize: "35px"}}>Посты не найдены</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{props.title}</h1>
            {props.posts.map((post, index) =>
                <PostItem post={post} key={post.id} number={index + 1} removePost={props.removePost}/>
            )}
        </div>
    );
};




