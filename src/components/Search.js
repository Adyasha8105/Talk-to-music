import React from 'react'
import {Textfield, ProgressBar} from 'react-mdl';
import './Search.css'
function Search(props) {
    let bar = (props.bar)?<ProgressBar indeterminate className="progress" />:''
    return (
        <div>
            <div className="row justify-content-center m-0">
                {bar}
            </div>
            <div className="row justify-content-center mt-4">
                <Textfield onChange={props.key_change} label="Search Music" value={props.keyword} floatingLabel/>
            </div>
            <div className="row justify-content-center">
                <button name="search" onClick={() => {props.api(props.keyword.trim())}} className="btn btn-outline-dark">Search</button>
            </div>
        </div>
    )
}

export default Search
