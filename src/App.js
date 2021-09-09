import './App.css';
import './styles/app.css'
import {PostList} from "./components/PostList";
import { useState} from "react";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";

export function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JS", body: "Description1"},
        {id: 2, title: "HTML", body: "Description2"},
        {id: 3, title: "CSS", body: "Description3"},

    ])

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')

    const [post, setPost] = useState({title: '', body: ''})

    const onChangeTitleHandler = (e) => {
        const newTitle = e.currentTarget.value
        setPost({...post, title: newTitle})
    }
    const onChangeBodyHandler = (e) => {
        const newBody = e.currentTarget.value
        setPost({...post,body: newBody})
    }

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([ ...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }


    return (
        <div className="App">
            <form >
                {/*Управляемый инпут*/}
                <MyInput placeholder = "Название поста" value={post.title} onChange={onChangeTitleHandler}/>

                {/*не управляемый инпут получаем доступ напрямую к DOM*/}
                {/*<input ref={bodyInputRef}  type="text"/>*/}

                {/*не управляемый или не конролируемый инпут получаем доступ напрямую к DOM*/}
                {/*<MyInput placeholder="Описание поста" ref={bodyInputRef}/>*/}
                <MyInput placeholder = "Описание поста" value={post.body} onChange={onChangeBodyHandler}/>
                <MyButton onClick={addNewPost} >Создать пост</MyButton>

            </form>
            <PostList posts={posts} title="Список постов 1"/>
        </div>
    )
}






