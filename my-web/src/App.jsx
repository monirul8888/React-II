
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'


function App() {
  

  return (
    <>
     <Navbar></Navbar>
    

     <div className="main-container flex text-center ">
      <div className="left-container w-[70%]">
        
         <Blogs></Blogs>
      </div>
      <div className="right-container w-[30%]">
        <h1>Reading Time : </h1>
        <h1>Bookmark Count: </h1>
      </div>
     </div>
    
    </>
  )
}

export default App
