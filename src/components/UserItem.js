import React from "react";
import { Link } from "react-router-dom";
const UserItem =(props) => {
    //object from property is called destructure
    const {login,avatar_url}=props.user;
    return(
        <div className="card text-center">
        <img src={avatar_url } alt="" className="round-img" style={{width:"60px"}}></img>
        <h1>{login}</h1>
        <Link to ={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    )


}
export default UserItem;