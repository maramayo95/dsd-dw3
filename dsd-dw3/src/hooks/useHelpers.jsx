import { useState, useEffect } from "react";
import { uniqueId } from "../helper/helper";

const useHelpers = () => {
  const [posteos, setPosteos] = useState([]);

  useEffect(() => {
    const getLS = () => {
      const postLS = JSON.parse(localStorage.getItem("posteos")) ?? [];
      setPosteos(postLS);
      console.log(postLS);
    };

    getLS();
  }, []);

  function deletePost(id) {
    const newList = posteos.filter((post) => post.id !== id);
    setPosteos(newList);
    localStorage.setItem("posteos", JSON.stringify(newList));
  }

  function pushPost(nuevoPosteo) {
    nuevoPosteo.id = uniqueId();
    const posteosActualizados = [...posteos, nuevoPosteo];
    setPosteos(posteosActualizados);
    localStorage.setItem("posteos", JSON.stringify(posteosActualizados));
  }

  return {
    deletePost,
    pushPost,
    posteos,
  };
};

export default useHelpers;
