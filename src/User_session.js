import React from "react";


const startedAt = new Date().toLocaleTimeString();

class  UserSessionInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + 1
                }
            })
        }, 1000);
    }

    render() {
        return (
            <div className="user-session">
                <div className="user-session-start">
                Session started at: {startedAt}
                </div>
                <div className="user-session-time">
                Session time in second: {this.state.count}
                </div>
            </div>
        )
    }
}

export default UserSessionInfo;


