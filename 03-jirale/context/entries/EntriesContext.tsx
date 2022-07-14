import { createContext } from 'react';
import { Entry } from '../../interfaces/entry';

interface ContextProps {
     entries: Entry[];  //todo: falta el tipo de dato del arreglo
}

export const EntriesContext = createContext({} as ContextProps);