import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [bookMarked, setBookMarked] = useState([]);

  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked, blog]);
  };

  console.log(bookMarked);

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center ">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time : </h1>
          <h1>Bookmark Count: </h1>
          {bookMarked.map((marked) => (
            <div key={marked.id} className="border p-2 my-2 rounded">
              <h4>{marked.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
