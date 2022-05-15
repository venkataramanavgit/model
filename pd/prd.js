import React from "react";

export default function App(){
    return (
    <div>
      <h1>Plant Disease Classifier 🍀</h1>
      <p>Built for Farmers using (Tensorflow, Tensorflow.js, Python, Javascript, HTML5)</p>
      
      <div class="upload-btn-wrapper">
      <button class="btn upload-file font-weight-500">
          <span class="upload-btn">
              <i class="material-icons d-block font-50 pb-2">cloud_upload</i>
              <p id="choose-text-1">Choose Image of Crop leaf</p>
          </span>
          <span class="upload-select-button" id="blankFile-1">
              *Supports .png, .jpg, .jpeg, .jfif
          </span>
          <span class="success-1">
              <i class="material-icons text-success">check</i>
          </span>
      </button>
      <input type="file" name="uploadImage" id="uploadImage"/>
  </div>
  
  <div class="row">
        <div class="box">
            <img src="" alt="" id="image" width="224" height="224"/>
           
        </div>

        <div class="box box-result">
            <div class="init_status"></div>
            <div>
                <h2>Your Plant is infected with :- <span class="pred_class"></span></h2>
                
            </div>
            <div class="accuracy">
                <div class="progress" id="progress">
                    <div class="inner">
                      
                    </div>
                  </div>

            </div>
            <p > CONFIDENCE : <b><span class="confidence"></span></b> %</p>
        </div>
    </div>
    </div>
    );
}