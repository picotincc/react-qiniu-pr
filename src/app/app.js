import React, { Component } from 'react';
import ReactQiniu from 'react-qiniu';

export default class App extends Component {

    constructor (props) {
        super(props);
        this.onUpload = this.onUpload.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.handleUploadToQiniu = this.handleUploadToQiniu.bind(this);
    }

    state = {
        files: [],
        token: 'FZ6CCJAqIIoKRp4ygVT8Mu3qzNxARTdtvhWUn-JA:-IFOKzdExR_g2LNy4_Rkp0XgVMU=:eyJzY29wZSI6ImNjLXFpbml1IiwiZGVhZGxpbmUiOjE0ODI1NDc4ODZ9',
        uploadKey: '', //Optional
        autoUpload: false, //Optional
    }

    componentDidMount()
    {
        const uploadKey = "CC_" + Date.now();
        this.setState({
            uploadKey
        });
    }

    onUpload(files)
    {
        // set onprogress function before uploading
        files.map(function (f) {
            f.onprogress = function(e) {
                console.log(f.name + e.percent);
            };
        });
    }

    onDrop(files)
    {
        const uploadKey = "CC_" + Date.now();
        this.setState({
            uploadKey,
            files: files
        });
        // files is a FileList(https://developer.mozilla.org/en/docs/Web/API/FileList) Object
        // and with each file, we attached two functions to handle upload progress and result
        // file.request => return super-agent uploading file request
        // file.uploadPromise => return a Promise to handle uploading status(what you can do when upload failed)
        // `react-qiniu` using bluebird, check bluebird API https://github.com/petkaantonov/bluebird/blob/master/API.md
        // see more example in example/app.js
        console.log('Received files: ', files);
    }

    handleUploadToQiniu()
    {
        const files = this.state.files;
        files.forEach((file) => {
            file.uploadPromise = file.upload();
        });
    }

    render()
    {
        return (
          <div>
            <ReactQiniu autoUpload={this.state.autoUpload} onDrop={this.onDrop} size={150} token={this.state.token} uploadKey={this.state.uploadKey} onUpload={this.onUpload}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </ReactQiniu>
            <button onClick={this.handleUploadToQiniu}>Upload</button>
          </div>
      );
    }
}
