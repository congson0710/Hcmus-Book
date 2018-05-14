import React from 'react';

import { Label } from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react';

const errorLabel = <Label color="red" pointing />;

const ChangePassword = props => {
  const { userPassword } = props.loginUser.authenUser;
  return (
    <div className="container" style={{ margin: `24px auto` }}>
      <div className="col-lg-10 col-lg-offset-1">
        <h4 style={{ paddingTop: `14px` }}>
          <b>Thay đổi mật khẩu</b>
        </h4>
        <hr />
        <Form
          className="form-horizontal"
          onValid={props.handleOnValid}
          onInvalid={props.handleOnInvalid}
        >
          <div className="form-group">
            <div className="col-lg-4 col-lg-offset-4">
              <Form.Input
                name="currentPassword"
                type="hidden"
                value={userPassword}
              />
              <Form.Input
                label="Nhập mật khẩu hiện tại"
                name="oldPassword"
                type="password"
                placeholder="Nhập mật khẩu cũ"
                required
                validations={{ equalsField: 'currentPassword' }}
                validationErrors={{
                  isDefaultRequiredValue: 'Bạn không được để trống',
                  equalsField: 'Mật khẩu hiện tại không trùng khớp',
                }}
                errorLabel={errorLabel}
                onChange={props.handleChange}
              />
              <Form.Input
                label="Nhập mật khẩu mới"
                name="newPassword"
                type="password"
                placeholder="Nhập mật khẩu mới"
                required
                validationErrors={{
                  isDefaultRequiredValue: 'Bạn không được để trống',
                }}
                errorLabel={errorLabel}
                onChange={props.handleChange}
              />
              <Form.Input
                label="Nhập lại mật khẩu mới"
                name="reNewPassword"
                type="password"
                placeholder="Nhập lại mật khẩu mới"
                required
                validations={{ equalsField: 'newPassword' }}
                validationErrors={{
                  isDefaultRequiredValue: 'Bạn không được để trống',
                  equalsField: 'Mật khẩu không trùng khớp',
                }}
                errorLabel={errorLabel}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div style={{ textAlign: `center` }}>
              <button
                className="btn btn-success btn-register"
                disabled={props.invalid}
                onClick={props.handleChangePassword}
              >
                Thay đổi mật khẩu
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
