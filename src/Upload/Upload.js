import React, {useState} from 'react'
import './../CSS/upload.css'
import API from './../Services/Api';

const Upload = (props) => {
    const [title, settitle] = useState("Photo Gallery");
    const [description, setdescription] = useState("A selection of the latest photos from our restaurant and some of our favourite dishes")

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        var payload = new FormData();
        payload.set('title', title);
        payload.set('description', description);
        payload.set('image', files[0])
        console.log(payload.get('title'))
        API.uploadPhotos(payload, (response) => {
            console.log(response)
        })
    }

    const handleClick = () => {
        console.log()
    }

    return (
        <div className="card-body text-center">
            <input type="text" defaultValue={title} onChange={(e) => settitle(e.target.value)} className="form-control" placeholder="Photo Gallery" /><br />
            <textarea className="form-control" defaultValue={description} onChange={(e)=> setdescription(e.target.value)} placeholder="A selection of the latest photos from our restaurant and some of our favourite dishes" /><br />
            <div className="content">
                <div className="container">
                    <div className="drop-container"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}
                    >
                        <div className="drop-message">
                            <div className="upload-icon"></div>
                            Drag photos here
                        </div>
                    </div>
                </div>        
            </div>
            <button type="button" className="btn btn-danger btn-lg" onClick={handleClick}>Delete ALL Photos</button>
        </div>
    )
}

export default Upload;