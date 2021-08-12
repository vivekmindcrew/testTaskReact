import './App.css';
import Upload from './Upload/Upload';
import Gallery from './Gallery/Gallery';
import React from 'react';

function App() {
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="row px-10">
          <div className="card col-lg-6">
            <Upload />
          </div>
          <div className="card col-lg-6">
            <Gallery />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
