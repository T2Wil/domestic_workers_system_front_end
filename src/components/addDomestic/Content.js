/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import ReactDom from 'react-dom';
import Field from './Form';
import Btn from './Btn';
import '../../styles/__content.scss';
import Modal from './Modal';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      worker: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        nid: '',
        status: '',
        type: '',
        description: '',
      },
      response: {
        statusCode: '',
        data: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addWorker = this.addWorker.bind(this);
  }

  handleChange(field) {
    this.setState((state) => ({
      ...state,
      [field.name]: field.value,
    }));
  }

  async addWorker() {
    const URL = 'http://localhost:4000/api/v1/auth/addDomestic';
    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    });
    return response.json();
  }

  async handleClick(btn) {
    const { value } = btn;
    if (value === 'Save') {
      const response = await this.addWorker();
      this.setState((prevState) => ({
        ...prevState,
        response: {
          statusCode: response.status,
          data: response.data || response.error,
        },
      }));

      let isError = false;
      const { statusCode, error, message } = response;
      statusCode === 201 ? isError = false : isError = true;
      if(message) {
        this.setState((state)=> {
          
        })
      }
      if (isError === true) { ReactDom.render(<Modal isError={isError} error={error} message={message} />, document.getElementById('modal')); }
    }
  }

  render() {
    console.log('state:', this.state.worker);
    // let show = false;
    const workerDetails = this.state.worker;
    const fields = Object.keys(workerDetails);
    const form = fields.map((field) => {
      let fieldElements = {};
      field === 'firstName' ? fieldElements = {
        label: 'First name', type: 'text', placeholder: 'example: John', name: field,
      }
        : field === 'lastName' ? fieldElements = {
          label: 'Last name', type: 'text', placeholder: 'example: Doe', name: field,
        }
          : field === 'email' ? fieldElements = {
            label: 'Email', type: 'email', placeholder: 'example: username@example.com', name: field,
          }
            : field === 'phoneNumber' ? fieldElements = {
              label: 'Phone', type: 'number', placeholder: 'example: 0788888888', name: field,
            }
              : field === 'nid' ? fieldElements = {
                label: 'National ID ', type: 'text', placeholder: 'example: M0993353', name: field,
              }
                : field === 'status' ? fieldElements = {
                  label: 'Status', type: 'text', placeholder: 'example: available', name: field,
                }
                  : field === 'type' ? fieldElements = {
                    label: 'Type', type: 'text', placeholder: 'example: baby sitter', name: field,
                  }
                    : field === 'description' ? fieldElements = {
                      label: 'About', type: 'text', placeholder: 'example: John is ...', name: field,
                    }
                      : null;

      return <Field key={fieldElements.label} form={{ ...fieldElements }} handleChange={this.handleChange} />;
    });

    return (
      <div className="content__direction--center content__form">
        {form}
        <Btn value="Save" handleClick={this.handleClick} />
      </div>
    );
  }
}
export default Content;
