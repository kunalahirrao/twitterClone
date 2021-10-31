import axios from "axios"
import Home from "./Components/Home/Home"
import Navigationbar from "./Components/Navbar"
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar"


function App() {
  const getData = async () => {
    const { data } = await axios.get("http://localhost:3002/hello")
    console.log(data)
  }
  return (
    <>
    <Navigationbar></Navigationbar>
    <LeftSideBar></LeftSideBar>
    </>
  );
}

export default App;
