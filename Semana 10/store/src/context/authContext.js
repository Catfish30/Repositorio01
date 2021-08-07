import { useState, useEffect } from "react";

import { fire, auth } from "../Config/Firebase";

import Cargando from "../Components/Cargando";

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [userState,setUserState] = useState(null)
    const[authPending, setAuthPending] = useState(true)
}