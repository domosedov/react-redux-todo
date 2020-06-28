import {createSlice} from '@reduxjs/toolkit';

export const filters = {
    SHOW_ALL: 'SHOW ALL',
    SHOW_COMPLETED: 'SHOW COMPLETED',
    SHOW_ACTIVE: 'SHOW ACTIVE'
}

const visibilityFilterSlice = createSlice({
    name: 'visibility',
    initialState: filters.SHOW_ALL,
    reducers: {
        setFilter: (state, action) => {
            return action.payload
        }
    }
});

const {actions, reducer: visibilityFilterReducer} = visibilityFilterSlice;

export const {setFilter} = actions;

export const selectVisibilityFilter = state => state.visibilityFilter

export default visibilityFilterReducer;
