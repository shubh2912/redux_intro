import React from 'react';
import { connect } from 'react-redux';


class Display extends React.Component {

    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        const { userDataProp } = this.props;
        return (
            <div>
                <table className="table table-bordered table-hover table-striped">
                    <tbody>
                        <tr>
                            <td> First Name </td>
                            <td> Last Name </td>
                            <td> Gender </td>
                        </tr>
                        {userDataProp.map((item, index) => (
                            <tr key={index}>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>{item.Gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={this.handleClick}>Back</button>
            </div>
        )
    }
}

const mapStateToProps = ({ userStore }) => {
    const { userData } = userStore;
    return {
        userDataProp: userData
    }
}

export default connect(mapStateToProps)(Display);