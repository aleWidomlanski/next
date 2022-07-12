import { createContext } from 'react';

interface ContextProps {
    sideMenuOpen: boolean;
    openSideMenu: () => void,
    closeSideMenu: () => void
}

//creo el contexto para usar en el provider, y le digo que el value que va a compartir a sus hijos es del tipo ContextProps
export const UIContext = createContext({} as ContextProps);