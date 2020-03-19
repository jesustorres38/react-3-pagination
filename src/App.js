import React, { useState, useEffect } from 'react';
import Posts from './components/Post'
import Pagination from './components/Pagination'
import axios from 'axios'
import './App.css';
 
function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(14)

  const imprimir = ele => console.log(ele)


  //Tiene el mismo propósito que componentDidMount,componentDidUpdate y 
  // componentWillUnmount en las clases React,
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  console.log(posts)
  // logica para pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <h1>List of Posts</h1>
      <Posts posts={currentPosts} loading={loading} imprimir={imprimir} />
      <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
