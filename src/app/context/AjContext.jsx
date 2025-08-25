"use client";
import { projectsHome, servicesHome, socialMedia, techTools, timeline } from '@/assets/assets';
import React, { createContext, useState } from 'react';
import Loading from '../components/Loading';

export const AjContext = createContext();

const AjContextProvider = (props) => {

    const [ loading, setLoading ] = useState(false);

    const value = {
        techTools, projectsHome, servicesHome, timeline, socialMedia, loading, setLoading
    };

    return (
    
        <AjContext.Provider value={value}>
            { loading && <Loading /> }
            {props.children}
        </AjContext.Provider>
    
    );

};

export default AjContextProvider;