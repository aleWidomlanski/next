import { UIState } from './';

type UITypeAction = 
|{type: 'UI - Open Sidebar'}
|{type: 'UI - Close Sidebar'}
|{type: 'UI - Adding Entry', payload:boolean}

export const uiReducer = (state: UIState, action: UITypeAction): UIState => {
   switch (action.type) {
       case 'UI - Open Sidebar':
               return {
                 ...state,
                 sideMenuOpen: true
                   }
       case 'UI - Close Sidebar':
               return {
                 ...state,
                 sideMenuOpen: false
                   }
      case 'UI - Adding Entry':
                    return {
                ...state,
                isAddingEntry: action.payload
                   }
       default:
               return state
               break;
  }
}