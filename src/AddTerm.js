import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup, Col, Well } from 'react-bootstrap';
import axios from 'axios'

class AddTerm extends Component {
  static propTypes = {
    hide: React.PropTypes.func.isRequired,
  };

  createTerm() {
      let newTerms = {
        name : ReactDOM.findDOMNode(this.refs.termControl).value,
        userId : 1
      };

      axios.post('http://localhost:4501/terms', newTerms);
  };



  render(){
    const { hide } = this.props;

    return (
      <Well className="add-term">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Term
            </Col>
            <Col sm={10}>
              <FormControl ref="termControl" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsStyle="primary" type="submit" onClick={this.createTerm.bind(this)}>
                Submit the term
              </Button>
              <Button bsStyle="link" onClick={hide}>Cancel</Button>
            </Col>
          </FormGroup>
        </Form>
      </Well>
    );
  }
}

export default AddTerm;
