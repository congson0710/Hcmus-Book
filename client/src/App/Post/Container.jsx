import React from 'react';
import { EditorState } from 'draft-js';
import { firebase } from '../../utils';

import View from './View';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: EditorState.createEmpty(),
      title: '',
      bookName: '',
      price: '',
      poster: '',
      uploading: false,
    };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
    this.handleUploadStart = this.handleUploadStart.bind(this);
  }

  handleDescription(editorState) {
    this.setState({ description: editorState });
  }

  handleOnChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  // post go here
  handleUpload() {
    console.log(this.state.poster);
    this.props.upload(this.state.poster);
  }

  handleUploadStart() {
    this.setState({ poster: '', uploading: true });
  }

  handleUploadError = error => {
    console.error('fail to upload', error);
  };

  handleUploadSuccess = filename => {
    this.setState({ uploading: false });
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          poster: [...this.state.poster, url],
        });
      });
  };

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleDescription={this.handleDescription}
        handleOnChange={this.handleOnChange}
        handleUploadImage={this.handleUploadImage}
        handleUpload={this.handleUpload}
        handleUploadError={this.handleUploadError}
        handleUploadSuccess={this.handleUploadSuccess}
        handleUploadStart={this.handleUploadStart}
      />
    );
  }
}

export default Post;
