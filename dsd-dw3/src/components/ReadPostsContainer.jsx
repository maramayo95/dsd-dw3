import React from 'react'
import ReadPosts from './ReadPosts'

const ReadPostsContainer = ({posteos, deletePost,updatePost}) => {
  
  
  
  return (

    <main className="container">
      <section className='d-flex flex-wrap justify-content-center gap-3'>
        {
          posteos.length > 0 ? posteos.map((post,index) => (
            <ReadPosts  key={index} post={post} deletePost={deletePost}/>
          )):
          <h1>No hay posteos</h1>
        }
      </section>
    </main>
  )
}

export default ReadPostsContainer