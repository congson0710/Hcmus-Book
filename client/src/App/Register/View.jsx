import React from 'react';
import { Dropdown, Loader, Label } from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react';

const genderOption = [
  {
    value: 'Nam',
    text: 'Nam',
  },
  {
    value: 'Nữ',
    text: 'Nữ',
  },
];

const errorLabel = <Label color="red" pointing />;

const Register = props => {
  return (
    <div className="container" style={{ margin: `auto` }}>
      {props.registerUser.isLoading ? (
        <Loader content="Loading" active size="large" />
      ) : (
        <div className="col-lg-10 col-lg-offset-1">
          <h2 style={{ paddingTop: `14px` }}>Tạo tài khoản</h2>
          <hr />
          <Form
            className="form-horizontal"
            onValid={props.handleValid}
            onInvalid={props.handleInvalid}
          >
            <div className="form-group">
              <div className="col-md-6 col-md-offset-3">
                <Form.Input
                  label="Tài khoản"
                  name="userAccount"
                  type="text"
                  placeholder="Nhập tài khoản"
                  required
                  validationErrors={{
                    isDefaultRequiredValue: 'Can not be empty',
                  }}
                  errorLabel={errorLabel}
                  onChange={props.handleOnChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-6 col-md-offset-3">
                <Form.Input
                  label="Mật khẩu"
                  name="userPassword"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  required
                  validations={{ minLength: 6 }}
                  validationErrors={{
                    isDefaultRequiredValue: 'Can not be empty',
                    minLength: 'Password must contain at least 6 characters',
                  }}
                  errorLabel={errorLabel}
                  onChange={props.handleOnChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-6 col-md-offset-3">
                <Form.Input
                  label="Nhập lại mật khẩu"
                  name="userRePassword"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  required
                  validations={{ minLength: 6, equalsField: 'userPassword' }}
                  validationErrors={{
                    isDefaultRequiredValue: 'Can not be empty',
                    equalsField: 'Password does not match!!',
                    minLength: 'Password must contain at least 6 characters',
                  }}
                  errorLabel={errorLabel}
                  onChange={props.handleOnChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-6 col-md-offset-3">
                <Form.Input
                  label="Họ và tên"
                  name="userName"
                  type="text"
                  placeholder="Họ và tên..."
                  required
                  validationErrors={{
                    isDefaultRequiredValue: 'Can not be empty',
                  }}
                  errorLabel={errorLabel}
                  onChange={props.handleOnChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-2 col-md-offset-3">
                <Form.Dropdown
                  label="Giới tính"
                  name="gender"
                  selection
                  options={genderOption}
                  onChange={props.handleOnSelect}
                  required
                  validationErrors={{
                    isDefaultRequiredValue: 'Can not be empty',
                  }}
                  errorLabel={errorLabel}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-6 col-md-offset-3">
                <Form.Input
                  label="Địa chỉ"
                  name="address"
                  type="text"
                  placeholder="Địa chỉ..."
                  required
                  validationErrors={{
                    isDefaultRequiredValue: 'Can not be empty',
                  }}
                  errorLabel={errorLabel}
                  onChange={props.handleOnChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div style={{ textAlign: `center` }}>
                <button
                  onClick={props.handleRegister}
                  className="btn btn-primary btn-lg btn-register"
                  disabled={props.isInvalid}
                >
                  Đăng ký
                </button>
                <button
                  className="btn btn-primary btn-lg btn-register"
                  onClick={props.handleCancel}
                >
                  Hủy
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Register;
