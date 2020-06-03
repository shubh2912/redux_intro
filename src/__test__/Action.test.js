import * as actionTypes from '../Actions/actionTypes';
import * as actions from '../Actions/action';


describe('Actions', () => {
    it('should create an action to add a user', () => {
        const userData = {
            "FirstName": 'Shubham',
            "LastName": 'Arora',
            "Gender": 'Male'
        };
        const expectedAction = {
            type: actionTypes.default.SAVE_USER_DATA,
            payload: userData
        }
        expect(actions.setUserDataAction(userData)).toEqual(expectedAction);
    })
})