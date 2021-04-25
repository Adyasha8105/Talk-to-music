import React from 'react'

function Lyrics(props) {
    return (
        <div className="container">
            <div className="row justify-content-end">
                <button className="btn btn-outline-danger ml-auto" onClick={props.closeModal}>X</button>
            </div>
            <div className="row">
                <div className="mx-2"><strong className="h1 text-light">{props.data.song}</strong></div>
            </div>
            <div className="row">
                <p className="mx-3 h5 text-light">{props.data.lyrics}</p>
            </div>
        </div>
    )
}

export default Lyrics
