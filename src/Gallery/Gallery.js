import React, { useState, useEffect } from 'react'
import API from './../Services/Api';
import axios from 'axios';
import left from './../Images/arrow-left-line.svg';
import right from './../Images/arrow-right-line.svg';

const Gallery = (props) => {

    const [photos, setphotos] = useState([])

    useEffect(() => {
        console.log("hello")
        axios({
            method: 'GET',
            url: 'http://localhost:6001/getPhotos',
        }).then(response => {
            // console.log(response.data.message)
            setphotos(response.data.message)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleRight = () => {
        
    }
    return (
        <div>
            <div className="card-body row">
                <h5 class="card-title">Photo Gallery</h5>
                <p className="card-text">A selection of the latest photos from our restaurant and some of our favourite dishes</p>
                {photos.map((row, i) => (
                    <div className="col-lg-4">
                        <img src={`http://localhost:6001/${row.url}`} width='100' height="100" alt="Food" />
                    </div>
                ))}
            </div>
            <div className="row text-center pagination">
                <div className="col-lg-4">
                    <img src={left} alt="" />
                    
                </div>
                <div className="col-lg-4">
                    <img src={left} alt="" />
                    
                </div>
                <div className="col-lg-4">
                    <img src={right} alt="" onClick={handleRight}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;