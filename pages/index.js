import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import election from '../election';
import Layout from '../components/Layout';
// import { Link } from '../routes';

class voteIndex extends Component {
    
    // static async getInitialProps() {

    //     const ballots = await election.methods.getDeployedBallots().call();
    //     return { ballots };
    // }
    async componentDidMount() {
        const districtAddress = await ballot.methods.chairPerson().call();
        
    }
    render () {
        return (
            <Layout>
                <div>
                    <h3> This is your Ballot </h3>

                </div>
            </Layout>
        );
    }
        
}

export default voteIndex;