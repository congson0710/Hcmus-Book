import React from 'react';
import { Segment, Grid, Button, Loader } from 'semantic-ui-react';
import { Editor } from 'react-draft-wysiwyg';
import { Form } from 'formsy-semantic-ui-react';
import FileUploader from 'react-firebase-file-uploader';
import { firebase } from '../../utils';

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const cond = [
  {
    key: 7,
    value: 7,
    text: '7',
  },
  {
    key: 8,
    value: 8,
    text: '8',
  },
  {
    key: 9,
    value: 9,
    text: '9',
  },
];

const Post = props => {
  return (
    <div class="container">
      <h2 style={{ paddingTop: `14px` }}> Đăng bán </h2>
      <hr />
      <Segment style={{ margin: `48px` }}>
        <Grid>
          <Grid.Row>
            <Grid.Column style={{ marginLeft: `12px`, width: `100%` }}>
              <Form style={{ width: `80%` }}>
                <Form.Input
                  label="Tiêu đề"
                  name="title"
                  onChange={props.handleOnChange}
                />
                <Form.Input
                  label="Tên sách"
                  name="name"
                  onChange={props.handleOnChange}
                />
                <Form.Input
                  label="Giá"
                  name="price"
                  onChange={props.handleOnChange}
                />
                <Form.Dropdown
                  name="cond"
                  label="Tình trạng"
                  options={cond}
                  selection
                  onChange={props.handleOnChange}
                />
              </Form>
              <Form style={{ marginTop: `12px`, width: `80%` }}>
                <div>
                  <label>Hình ảnh</label>
                </div>
                <Form.Field>
                  <Segment className="segment-image">
                    {props.poster === '' ? (
                      props.uploading ? (
                        <Loader active content="Loading" large />
                      ) : (
                        <label htmlFor="fileInput" className="label-input">
                          <i className="fa fa-camera" />
                          Chọn 1 ảnh
                        </label>
                      )
                    ) : (
                      <img
                        src={props.poster}
                        alt="preview"
                        className="image-preview"
                      />
                    )}
                  </Segment>
                  <FileUploader
                    className="input-file"
                    id="fileInput"
                    accecpt="image/*"
                    name="poster"
                    randomizeFilename
                    storageRef={firebase.storage().ref('images')}
                    onUploadStart={props.handleUploadStart}
                    onUploadError={props.handleUploadError}
                    onUploadSuccess={props.handleUploadSuccess}
                  />
                </Form.Field>
              </Form>
              <Form>
                <Form.Field>
                  <div>
                    <label>Thông tin về sách</label>
                  </div>
                  <Segment>
                    <Editor
                      editorState={props.description}
                      editorClassName="editor"
                      toolbarClassName="toolbar"
                      onEditorStateChange={props.handleDescription}
                      toolbar={{
                        options: [
                          'inline',
                          'blockType',
                          'list',
                          'textAlign',
                          'colorPicker',
                          'link',
                        ],
                      }}
                    />
                  </Segment>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ textAlign: `center` }}>
            <Grid.Column>
              <Button
                className="btn btn-primary btn-lg btn-register"
                color="green"
                onClick={props.handleUpload}
              >
                Đăng bán
              </Button>
              <Button
                className="btn btn-primary btn-lg btn-register"
                color="red"
              >
                Hủy
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Post;
