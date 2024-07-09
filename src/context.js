//useContext è un hook che permette di accedere al valore di un contesto
import React, {useContext, useState} from "react";

const AppContext = React.createContext();


// AppProvider serve a passare il valore del contesto a tutti i componenti figli
const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // funzioni per aprire e chiudere il modal
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    // funzioni per aprire e chiudere la sidebar
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return(
    <AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal
    }}>
        {children}
    </AppContext.Provider>
    );
};


// custom hook
// useGlobalContext serve a rendere più facile l'accesso al contesto
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};