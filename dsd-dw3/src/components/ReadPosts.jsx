import React from "react";

const ReadPosts = ({ post,deletePost}) => {
  function deleteClick(id){
      deletePost(id)
  }

  function updateClick(id,post){
     updatePost(id,post)
  }
  
  return (
    <div className="card mb-3" style={{width:" 18rem"}}>
      <div className="d-flex justify-content-end m-3">
          <button onClick={() => deleteClick(post.id)} className="btn btn-danger">
            X
          </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{post.title} - {post.author}</h5>
        <p className="card-text">
          {post.body}
        </p>
        <a href="#" className="btn btn-primary mb-3">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default ReadPosts;
