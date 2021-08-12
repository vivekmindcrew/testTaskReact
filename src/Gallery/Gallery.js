import React, { useState, useEffect } from 'react'
import API from './../Services/Api';
import axios from 'axios';
import left from './../Images/arrow-left-line.svg';
import right from './../Images/arrow-right-line.svg';
import home from './../Images/home-line.svg';

const Gallery = (props) => {

    const [photos, setphotos] = useState([])
    const [start, setstart] = useState(0);
    const [end, setend] = useState(8);

    useEffect(() => {
        console.log("hello")
        axios({
            method: 'GET',
            url: 'http://localhost:6001/getPhotos',
        }).then(response => {
            // console.log(response.data.message)
            const slicedPhotos = response.data.message.slice(start, end)
            setphotos(slicedPhotos)

        }).catch(error => {
            console.log(error)
        })
    }, [end, start, setstart, setend])

    const handleRight = () => {
        setstart(end);
        setend(end + 8);
    }

    const handleLeft = () => {
        setstart(start - 8)
        setend(end - 8)
    }

    const handleHome = () => {
        setstart(0);
        setend(8)
    }

    return (
        <div>
            <div className="card-body row">
                <h5 class="card-title">Photo Gallery</h5>
                <p className="card-text">A selection of the latest photos from our restaurant and some of our favourite dishes</p>
                {photos.map((row, i) => (
                    <div className="col-lg-3" key={i} style={{ padding: '10px' }}>
                        <img src={`http://localhost:6001/${row.url}`} width='100' height="100" alt="Food" />
                    </div>
                ))}
            </div>
            <div className="row text-center pagination">
                <div className="col-lg-4">
                    <img src={left} alt="" onClick={handleLeft} style={{ cursor: 'pointer' }}/>

                </div>
                <div className="col-lg-4">
                    <img src={home} alt="" onClick={handleHome} style={{ cursor: 'pointer' }}/>

                </div>
                <div className="col-lg-4">
                    <img src={right} alt="" onClick={handleRight} style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;