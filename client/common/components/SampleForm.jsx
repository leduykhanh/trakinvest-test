/* @flow-weak */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {FieldFormControl,FieldDropdownControl,FieldDateControl,FieldRadioControl,FieldCheckboxControl} from 'common/components/FormElements'
import {required,email} from 'common/formValidation'

const validate = values => {

  const errors = {}

  if (!values.first_name) {
    errors.first_name = 'Required'
  }
  if (!values.last_name) {
    errors.last_name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.type) {
    errors.type = 'Required'
  }
  return errors
}

class SampleForm extends React.Component {
    constructor() {
        super();
    }


    _onErrorCallback() {
        this.setState({ isLoading: false });
    }

    render() {
        const { handleSubmit,handleLogin } = this.props;
        let options = [{"label":"I AM A FUND MANAGER","value":"fm"},{"label":"I AM A LISTED COMPANY REPRESENTATIVE","value":"lc"}]
        return (
                 <div className=" vcenter col-xs-12 signup-form">
                    <h1 className="primary-text-color text-center title-text">Sign up</h1>
                     <h2 className="text-center text-blue-color sub-title-text">or <a className="sub-title-text secondary-link-text" onClick={handleLogin}>Login Now</a></h2>
                    <div className="row">
                        <div className="col-xs-12 vcenter text-left">
                            <div className="col-xs-12">

                            <form className="auth-form" role="form" onSubmit={handleSubmit}>
                                <div className="form-group">

                                </div>
                                <Field name="first_name" validate={[required,email]} className="form-input" component={FieldFormControl} label="First Name" type="text"/>
                                <Field name="password" className="form-input" component={FieldFormControl} label="Password" type="password"/>
                                <Field name="type"  component={FieldRadioControl} options={options} />
                                <Field name="abc"  component={FieldCheckboxControl} options={options} />
                                <Field name="def"  component={FieldDropdownControl} data={options} options={{"textField":"label","valueField":"value"}}  />
                                 <Field name="ccc"  component={FieldDateControl} options={options} />
                                <div className="form-group text-center">
                                    <button type="submit" className="btn-raised action-button">Sign Up</button>
                                </div>
                                <div className="form-group centered-text terms-text">
                                    By signing up or otherwise using the AFS service and websites, your agreement with us includes these <a className="forget-password clickable" href="/terms-of-service">Terms of Service</a>&nbsp;and&nbsp;<a className="forgot-password clickable" href="/privacy-policy">Privacy Policy</a>
                                </div>
                            </form>
                            </div>
                        </div>

                    </div>
                </div>
        );
    }
}
// Decorate the form component
export default reduxForm({
  form: 'sampleForm'
})(SampleForm);