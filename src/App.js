import './App.css';
import './styles/app.css'
import {PostList} from "./components/PostList";
import {useState} from "react";

export function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JS", body: "Description1"},
        {id: 2, title: "HTML", body: "Description2"},
        {id: 3, title: "CSS", body: "Description3"},
        {id: 4, title: "React", body: "Description4"}
    ])


    return (
        <div className="App">
            <form >
                <input type="text" placeholder="Название поста"/>
                <input type="text" placeholder="Описание поста"/>
                <button>Создать пост</button>
            </form>
            <PostList posts={posts} title="Список постов 1"/>
        </div>
    )
}






