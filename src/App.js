import './App.css';
import './styles/app.css'
import {PostList} from "./components/PostList";
import {useState} from "react";
import {PostForm} from "./components/PostForm";
import {MySelect} from "./components/UI/select/MySelect";

export function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JS", body: "Description1"},
        {id: 2, title: "HTML", body: "Description2"},
        {id: 3, title: "CSS", body: "Description3"},
    ])

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    const [selectedSort, setSelecterSort] = useState('')
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (id) => {
        const newPosts = posts.filter(p => p.id !== id)
        setPosts(newPosts)
    }

    const sortPosts = (sort) => {
        setSelecterSort(sort)
        // console.log(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <div>
                {/*<select style={{display: "flex" , justifyContent: "flex-start"}}>
                    <option value="value1">По названию</option>
                    <option value="value2">По описанию</option>
                </select>*/}
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по: "
                    options={[
                        {value: "title", name: "По названию"},
                        {value: "body", name: "По описанию"}
                    ]}/>
            </div>
            {posts.length !== 0
                ? <PostList posts={posts} title="Список постов 1" removePost={removePost}/>
                : <h1 style={{marginTop: "15%", color: "red", fontSize: "35px"}}>Посты не найдены</h1>
            }
        </div>
    )
}






