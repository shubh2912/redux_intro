import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUserDataAction } from '../Actions/action';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            FN: '',
            LN: '',
            Gender: 'select'
        }
    }

    handleChangeFirstName = (event) => {
        this.setState({ FN: event.target.value })
    }

    handleChangeSecondName = (event) => {
        this.setState({ LN: event.target.value })
    }

    handleChangeGender = (event) => {
        this.setState({ Gender: event.target.value })
    }

    handleSubmit = (event) => {
        const { FN, LN, Gender } = this.state;
        const userObj = {
            "FirstName": FN,
            "LastName": LN,
            "Gender": Gender
        }
        this.props.dispatch(setUserDataAction(userObj));
        this.props.history.push("/display");
        event.preventDefault();
    }

    refresh = () => {
        this.setState({
            FN: '',
            LN: '',
            Gender: 'select'
        })
    }

    render() {
        const { FN, LN, Gender } = this.state;
        return (
            <div className="App" >
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label style={{ margin: "5px" }} value="First Name">First Name</label>
                    <input type="text" value={FN} onChange={this.handleChangeFirstName} />
                    <br />  <br />
                    <label style={{ margin: "5px" }} value="Last Name">Last Name</label>
                    <input type="text" value={LN} onChange={this.handleChangeSecondName} />
                    <br />  <br />
                    <label style={{ margin: "5px" }} value="Gender">Gender</label>
                    <select value={Gender} onChange={this.handleChangeGender}>
                        <option value="select">Select</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <br />  <br />
                    <input type="submit" value="Submit"></input>
                    <input type="button" value="Refresh" onClick={this.refresh}></input>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    dispatch: PropTypes.func
}

const mapStateToProps = ({ userStore }) => {
    const { userData } = userStore;
    return {
        userData
    }
}

export default connect(mapStateToProps)(Form);
