'use client'

import React, {createContext, useContext, useState, ReactNode} from 'react';

interface ITabContext {
    activeTab: string;
    setActiveTab: (fun: (prev: ITab) => ITab) => void;
}

type ITab = string;

export const TabContext = createContext<ITabContext>({
    activeTab: "about",
    setActiveTab: () => {
    }
});

export const TabProvider = ({children}: { children: ReactNode }) => {

    const [activeTab, setActiveTab] = useState<string>("about");

    return (
        <TabContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </TabContext.Provider>
    );
};

export const useTab = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('useTab must be used within a TabProvider');
    }
    return context;
};
