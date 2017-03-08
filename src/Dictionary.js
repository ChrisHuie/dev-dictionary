import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import Term from './Term';
import AddTerm from './AddTerm';
import axios from 'axios';


// Don't do this. You need to actually fetch the data from the server using
// the API. This is a cheater way just to provide a visual example of what you
// should see when you're done.
//const terms = term => `http://localhost:4501/terms/${term}`;


class Dictionary extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showAddTerm: false,
          terms:[],
          definitions:[]
      }
  }

  componentWillMount() {
      axios.get('http://localhost:4501/terms')
          .then((response) => {
            this.setState({
              terms: response.data
            });
      });
      axios.get('http://localhost:4501/definitions')
          .then((response) => {
              this.setState({
                  definitions: response.data
              });
      });
  }


  toggleAdd = () => this.setState({ showAddTerm: !this.state.showAddTerm })

  render() {
    const { showAddTerm } = this.state;
    return (
      <div>
        <h2>Terms</h2>
        <Button bsStyle="success" onClick={this.toggleAdd}>
          <Glyphicon glyph="plus-sign" /> Add term
        </Button>
        {showAddTerm && <AddTerm hide={this.toggleAdd} />}
{        <div className="terms">
          {this.state.terms.map(term => {
              return <Term key={term.id} term={term} definitions={this.state.definitions} />;
          })}
        </div>}
      </div>
    );
  }
}

export default Dictionary;
