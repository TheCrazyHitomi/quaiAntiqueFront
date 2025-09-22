import React, { useContext, createContext, useState } from 'react';

const ModalContext =createContext();

export const useModal = () => useContext(ModalContext); 

export const ModalProvider = ({ children }) => {
    const [activeModal, setActiveModal] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (modalName, item = null) => {
        setActiveModal(modalName);
        setSelectedItem(item);
    };
    const closeModal = () => {
        setActiveModal(null);
        setSelectedItem(null);
    };

    
    return (
        <ModalContext.Provider value={{ activeModal, openModal, closeModal, selectedItem }}>
            {children}
        </ModalContext.Provider>
    );
}