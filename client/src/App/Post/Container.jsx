import React from 'react';
import { EditorState } from 'draft-js';

import View from './View';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: EditorState.createEmpty(),
      title: '',
      bookName: '',
      price: '',
      poster: [],
      imgSrc: '',
    };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleDescription(editorState) {
    this.setState({ description: editorState });
  }

  handleOnChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  handleUploadImage(event) {
    const file = event.target.files[0];
    this.setState({
      poster: event.target.files,
      imgSrc: window.URL.createObjectURL(file),
    });
  }

  handleUpload() {
    console.log(this.state.poster);
    this.props.upload(this.state.poster);
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        handleDescription={this.handleDescription}
        handleOnChange={this.handleOnChange}
        handleUploadImage={this.handleUploadImage}
        handleUpload={this.handleUpload}
      />
    );
  }
}

export default Post;
