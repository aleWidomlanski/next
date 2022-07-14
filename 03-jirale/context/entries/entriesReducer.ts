import {EntriesState} from './';

type EntriesTypeAction = 
|{type: 'Entries ActionName'}

export const entriesReducer = (state: EntriesState, action: EntriesTypeAction): EntriesState => {
   switch (action.type) {
       case 'Entries ActionName':
               return {
                 ...state,
                   }
       default:
               return state
               break;
  }
}