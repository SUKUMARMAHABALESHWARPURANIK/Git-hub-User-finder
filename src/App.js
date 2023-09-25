import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Users from './components/Users'
import { useState} from 'react';
import axios from 'axios';
import Search from './components/Search';
import UserDetails from './components/UserDetails';


function App() {
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState({});
  const [repos,setRepos]=useState([]);
// useEffect(async()=> {
//   const res = await axios.get('https://api.github.com/users');
//   setUsers(res.data)
// },[])
// useEffect(() => {
//   const fetchData = async () => {

//       const response = await fetch('https://api.github.com/users');
//       const data = await response.json();
//       setUsers(data);
//   };
//   fetchData();
// }, []);

const searchName =async (name)=>{
  const result = await axios.get(`https://api.github.com/search/users?q=${name}`)
  console.log(result)
  setUsers(result.data.items)
}

const clearUser=()=>{
  setUsers([])
}

//to get details of a individuals user
const getDetails=async(login)=>{
   const result_data=await axios.get(`https://api.github.com/users/${login}`)
   setUser(result_data.data)

}
const getRepo= async(username)=>{
  const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort-asc`);
  setRepos(res.data);
}

  return (
  
  <Router>
  <Navbar />
  <div className='container'>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <React.Fragment>
            <Search searchName={searchName} showClear={users.length > 0 ? true:false} clearUser={clearUser} />
            <Users users={users} />
          </React.Fragment>
        }
      />
      <Route exact path="/about" Component={About } />
      <Route exact path="/user/:anything"  
         element={
        <React.Fragment>
         <UserDetails getDetails={getDetails} user={user}  getRepo={getRepo} repos={repos}/>
        </React.Fragment>
      }/>
    </Routes>
  </div>
</Router>
  );
}
export default App;
