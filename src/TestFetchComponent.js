/**
 * Created by christopher.huie on 3/5/17.
 */
import React, { Component } from 'react';
import { Request} from 'superagent';

class TestFetchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount() {
        Request.get(terms).then(response => {
            this.setState({
                response
            });
        });
    }
    render() {

        return (
            <div>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        );
    }
}

export default TestFetchComponent;