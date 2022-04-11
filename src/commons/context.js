import axios from 'axios';
import { createContext, useState } from 'react';
export const personageContext = createContext();// agregar mayuscula

const PersonageProvider = ({ children }) => {

    const [initialState,setInitialState]=useState({
        loading: false,
        errorMessage: null,
        errorCode: '',
        entities: [],
        totalItems: -1,
    });

    const getInitialState = async () => {
        await axios.get('https://swapi.dev/api/people')
            .then(response => {
                console.log(response.data.results);
                setInitialState({
                    entities : response.data.results,
                    totalItems : response.count,
                }
                )
            });
    }

    const clearInitialState = () => {
        setInitialState(
            {
                loading : false,
                errorMessage : null,
                errorCode : '',
                entities : [],
                totalItems : -1,
            }
        )
    }

    return (
        <personageContext.Provider value={{initialState, clearInitialState, getInitialState}}>
            {children}
        </personageContext.Provider>
    );

}
export default PersonageProvider;
