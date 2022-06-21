import { useLocation, Navigate } from "react-router-dom";
import { docRef } from "../../firebase/firebase";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [logData, setLogData] = useState(null)
    onSnapshot(docRef, (doc) => {
        //console.log(doc.data())
        setLogData(doc.data().isLogged)
        return doc.data().isLogged
    })

    const logObject = {
        logged: logData
    }
    useEffect(() => {
        logObject.logged = logData;
    }, [logData])

    if (logObject.logged != null) {
        return logData ? children : <Navigate to="/login" state={{ from: location }} />
    }
}