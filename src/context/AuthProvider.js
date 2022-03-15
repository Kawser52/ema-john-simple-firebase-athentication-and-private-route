import React, {createContext} from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const allcontext = useFirebase();
    return (
        <AuthContext.Provider value={allcontext}>
            <div>
                {children}
            </div>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
