import reducer from '../Reducers/reducer';
import * as actionTypes from '../Actions/actionTypes';

describe('reducer', () => {
    it('should return the initilal state', () => {
        var state = {
        countryData: [], 
        cityData: []
    }

    state = reducer(state, {
        action: 'SAVE_COUNTRY_DATA'
    })
        expect(state).toEqual({
             countryData: [], 
             cityData: []
        })
    })
})