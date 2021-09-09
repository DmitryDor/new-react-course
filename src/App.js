import './App.css';
import './styles/app.css'
import {PostList} from "./components/PostList";
import {useState} from "react";
import {PostForm} from "./components/PostForm";

export function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JS", body: "Description1"},
        {id: 2, title: "HTML", body: "Description2"},
        {id: 3, title: "CSS", body: "Description3"},
    ])

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (id) => {
        debugger
        const newPosts = posts.filter(p => p.id !== id)
        setPosts(newPosts)
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <PostList posts={posts} title="Список постов 1" removePost={removePost}/>
                : <h1 style={{marginTop: "15%",  color: "red", fontSize: "35px"}}>Посты не найдены</h1>
            }
        </div>
    )
}






