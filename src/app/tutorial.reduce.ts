import { Action } from '@ngrx/store';
import { Tutorial } from './tutorial.model';
import * as TutorialActions from './tutorial.action';

const initialState: Tutorial = {
    name : 'Test name',
    url: 'required url'
};

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        default:
            return state;
    }
}


