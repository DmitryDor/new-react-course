import React, {useState} from 'react';
import {MyInput} from "./UI/input/MyInput";
import {MyButton} from "./UI/button/MyButton";

export const PostForm = (props) => {

    const [post, setPost] = useState({title: '', body: ''})

    const onChangeTitleHandler = (e) => {

        const newTitle = e.currentTarget.value
        setPost({...post, title: newTitle})
    }
    const onChangeBodyHandler = (e) => {

        const newBody = e.currentTarget.value
        setPost({...post, body: newBody})
    }

    const addNewPost = (e) => {

        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        props.create(newPost)
        setPost({title: '', body: ''})
    }


    return (
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

    );
};

