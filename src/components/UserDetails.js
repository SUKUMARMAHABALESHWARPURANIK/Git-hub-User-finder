import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RepoList from "./RepoList";

const UserDetails = (props) => {
    const { anything } = useParams(); 
     useEffect(()=>{
             props.getDetails(anything)
             props.getRepo(anything)
     },[])
     
    return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark">Back to search</Link>
          person is : Hireable:{props.user.hireable ? (
            <i className="fa fa-check tet success"/>):(
                <i className="fa fa-times-circle  text-danger"/>
            )
        
           }
          <div className="card grid-2">
          <div className="all center">
            <img src={props.user.avatar_url} className="round-img "  style={{width:'150px'}}/>
            <h1>Name:{props.user.name}</h1>
            <h1>Location:{props.user.location}</h1>
          </div>
          <div>
          {props.user.bio && (
            <React.Fragment>
              <h2>Bio</h2>
              <h3>{props.user.bio}</h3>
            </React.Fragment>
          )}
          <a href={props.user.html_url} className="btn btn-dark my-1">visit GitHub profile</a>
          <ul>
          <li>{props.user.company && (
            <React.Fragment>
            <h1>Company:{props.user.company}</h1>
            </React.Fragment>
          )}</li>

          <li>{props.user.blog && (
            <React.Fragment>
            <h1>website:{props.user.blog}</h1>
            </React.Fragment>
          )}</li>

          <li>{props.user.login && (
            <React.Fragment>
            <h1>username:{props.user.login}</h1>
            </React.Fragment>
          )}</li>
          </ul>
          </div>
          </div>
          <div className="card">
          <div className="badge badge-primary">followers{props.user.followers}</div>
          <div className="badge badge-success">following{props.user.following}</div>
          <div className="badge badge-danger">Public Repos {props.user.public_repos}</div>
          <div className="badge badge-dark">Public Gists{props.user.public_gists}</div>

          </div>
          <h1>Repos list top 5 projects:</h1>
          <RepoList repos={props.repos}/>
     
        </React.Fragment>

  
    );
  };
export default UserDetails;