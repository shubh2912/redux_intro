import reducer from '../Reducers/reducer';
import * as actionTypes from '../Actions/actionTypes';

describe('reducer', () => {
    it('should return the initilal state', () => {
        var state = {
            userData: []
        }

        state = reducer(state, {
            action: 'SAVE_COUNTRY_DATA'
        })
        expect(state).toEqual({
            userData: []
        })
    })

    it('should retur updated state when action is dispatched', () => {
        var state = {
            userData: []
        }

        const userData = {
            "FirstName": 'Shubham',
            "LastName": 'Arora',
            "Gender": 'Male'
        };

        state = reducer(state, {
            type: 'SAVE_USER_DATA',
            payload: userData
        })
        expect(state).toEqual({
            userData: [{
                "FirstName": 'Shubham',
                "LastName": 'Arora',
                "Gender": 'Male'
            }]
        })
    })
})