import { FC, useReducer, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entry';

interface Props {
   children: ReactNode
}

export interface EntriesState {
     entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
     entries: [
          {
               _id: uuidv4(),
               description: 'Pendientes: lorem 1',
               status: 'pending',
               createdAt: Date.now()
          },
          {
               _id: uuidv4(),
               description: 'En progreso: lorem 2 ',
               status: 'in-progress',
               createdAt: Date.now() - 1000000
          },
          {
               _id: uuidv4(),
               description: 'Terminadas: lorem 3',
               status: 'finished',
               createdAt: Date.now() - 100000
          }
     ],
}

export const EntriesProvider: FC<Props> = ({children}) => {

const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

return (
  <EntriesContext.Provider value={{
     ...state
  }}>
   {children}
  </EntriesContext.Provider>
)
}