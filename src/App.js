import './App.css';
import './styles/app.css'
import {PostList} from "./components/PostList";
import {useMemo, useState} from "react";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";

export function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JS", body: "Description1"},
        {id: 2, title: "HTML", body: "Description2"},
        {id: 3, title: "CSS", body: "Description3"},
    ])

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')


    /* const [selectedSort, setSelecterSort] = useState('')
     const [searchQuery, setSearchQuery] = useState('')*/
    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedPosts = useMemo(() => {
        console.log('Отработала функция sorted')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (id) => {
        const newPosts = posts.filter(p => p.id !== id)
        setPosts(newPosts)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAndSearchedPosts} title="Список постов 1" removePost={removePost}/>
        </div>
    )
}






