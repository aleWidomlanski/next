import { FC, useReducer, ReactNode } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
     children: ReactNode
}

export interface UIState {
     sideMenuOpen: boolean;
     isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
     sideMenuOpen: false,
     isAddingEntry: false,
}

export const UIProvider: FC<Props> = ({children}) => {

const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

const openSideMenu = () => {
     dispatch({type: 'UI - Open Sidebar'})
}

const closeSideMenu = () => {
     dispatch({type: 'UI - Close Sidebar'})
}

const setIsAddingEntry = (args:boolean) => {
     dispatch({type: 'UI - Adding Entry', payload: args})
}

return (
  <UIContext.Provider value={{
     ...state,
     openSideMenu, 
     closeSideMenu,
     setIsAddingEntry
  }}>
   {children}
  </UIContext.Provider>
)
}