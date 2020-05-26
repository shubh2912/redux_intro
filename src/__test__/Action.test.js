import * as actionTypes from '../Actions/actionTypes';
import * as actions from '../Actions/action';


describe('Actions', ()=> {
    it('should create an action to add a country', () => {
        const payload = undefined;
        const name = "abc";
        const expectedAction = {
            type: actionTypes.default.SAVE_COUNTRY_DATA,
            payload: payload, 
            name: name
        }
expect(actions.setCountryDataAction(payload, name)).toEqual(expectedAction);
    })

     it('should create an action to add a city', () => {
        const payload = undefined;
        const name = "abc";
        const expectedAction = {
            type: actionTypes.default.SAVE_CITY_DATA,
            payload: payload, 
            name: name
        }
expect(actions.setCityDataAction(payload, name)).toEqual(expectedAction);
    })
})