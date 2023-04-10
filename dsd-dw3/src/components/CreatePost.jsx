import React from "react";
import { useState } from "react";
import useHelpers from "../hooks/useHelpers";

const CreatePost = ({pushPost}) => {
    
    const[dataForm, setDataForm] = useState({
        title: "",
        author: "",
        bodyText: ""
    })

    
    
    const changeHandle = e => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const submitHandle = e => {
        e.preventDefault()
        pushPost({...dataForm})
    }

  
    return (
    <form className="container mb-5" onSubmit={submitHandle}>
      <h3 className="text-center mt-4">Crea tu post</h3>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
         name="title"
          type="text"
          className="form-control"
          id="title"
          aria-describedby="title"
          value={dataForm.title}
          onChange={changeHandle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Author" className="form-label">
          Author
        </label>
        <input
          name="author"
          type="text"
          className="form-control"
          id="author"
          aria-describedby="author"
          value={dataForm.author}
          onChange={changeHandle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bodyText" className="form-label">
          Body
        </label>
        <textarea
          name="bodyText"
          type="bodyText"
          className="form-control"
          id="bodyText"
          aria-describedby="bodyText"
          value={dataForm.body}
          onChange={changeHandle}
        />
      </div>
        <div className="d-flex justify-content-center mt-3">
            <input className="btn btn-primary" type="submit" value="Enviar" />
        </div>
    </form>
  );
};

export default CreatePost;
