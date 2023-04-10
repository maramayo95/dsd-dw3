import ReadPostsContainer from "./components/ReadPostsContainer";
import Navbar from "./components/Navbar";

import CreatePost from "./components/CreatePost";
import useHelpers from "./hooks/useHelpers";

function App() {
  const { pushPost, deletePost, posteos } = useHelpers();

  return (
    <div className="App">
      <Navbar />

      <ReadPostsContainer posteos={posteos} deletePost={deletePost} />

      <CreatePost pushPost={pushPost} />
    </div>
  );
}

export default App;
