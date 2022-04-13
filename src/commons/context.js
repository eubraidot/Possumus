import axios from 'axios';
import { createContext, useState } from 'react';
export const personageContext = createContext();// agregar mayuscula

const PersonageProvider = ({ children }) => {

    const [initialState, setInitialState] = useState({
        loading: false,
        errorMessage: null,
        errorCode: '',
        entities: [],
        totalItems: -1,
    });

    const getInitialState = async () => {
        setInitialState({
            ...initialState,
            loading: true
        });
        await axios.get('https://swapi.dev/api/people')
            .then(response => {
                setInitialState({
                    ...initialState,
                    entities: response.data.results,
                    totalItems: response.data.count,
                })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setInitialState((is) => ({
                    ...is,
                    loading: false,
                }
                )
                )
            })
    }

    const clearInitialState = () => {
        setInitialState(
            {
                loading: false,
                errorMessage: null,
                errorCode: '',
                entities: [],
                totalItems: -1,
            }
        )
    }

    return (
        <personageContext.Provider value={{ initialState, clearInitialState, getInitialState }}>
            {children}
        </personageContext.Provider>
    );

}
export default PersonageProvider;
