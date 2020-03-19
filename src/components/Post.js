import React, { Fragment } from 'react'
import Logo from '../logo.png'

const Post = ({posts, loading, imprimir}) => {
  if(loading) {
    imprimir('jesus')
    return (
      <Fragment>
        <h2>Loading...</h2>
        <img className='loading--animate' src={Logo} alt='loading....'></img>
      </Fragment>)
  }

  return <ul className='list'>
    {posts.map((el) => (
      <li key={el.id} className='list__item'>
        {el.id}---{el.title}
      </li>
    ))}
  </ul>
}

export default Post