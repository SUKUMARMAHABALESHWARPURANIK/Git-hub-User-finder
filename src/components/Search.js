import React,{useState} from "react";

const Search= (props) =>{
    const [text,setText]=useState('');
        //initially the text value is empty
        //but when we type something -> text value will be the value we typed
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.searchName(text)
        setText('');//once we click submit button text become empty again
    }
    return(
        <React.Fragment>
        <form className="form" onSubmit={handleSubmit}> 
        <input type="text" name="text" placeholder="search here" value={text} onChange={(e)=> setText(e.target.value)}/>
        <input type="submit" value="search" className="btn btn-dark btn-block" />
        </form>
        {props.showClear &&  <button type="submit" className="btn btn-light btn-block" onClick={props.clearUser} >Clear</button>}
       
        </React.Fragment>
        
    )

}
export default Search;