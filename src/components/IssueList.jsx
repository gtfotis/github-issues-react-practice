import React from 'react';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            issues: []
        })
    }

    componentDidMount() {
        this._fetchIssues();
    }

    _fetchIssues = async () => {
        const response = await fetch(
            'https://api.github.com/repos/facebook/create-react-app/issues'
        ).then(response => response.json());
        console.log('the response is', response);
        this.setState({
            issues: response,
        });
    }

    render() {
        return (
            <div>
                <h2><a href='https://github.com/facebook'>facebook</a>/<b><a href='https://github.com/facebook/create-react-app'>create-react-app</a></b></h2>
                <div>
                    <table>
                        {this.state.issues.map((issue, index) => {
                            return (
                                <ul class='a'>
                                    <li key={index}>{issue.title}</li>
                                </ul>
                            )
                        })}
                    </table>
                </div>
            </div>
        );
    }
}


export default IssueList;