import { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useRefreshMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { selectAccessToken } from "./authSlice";


function PersistLogin() {

    const [persist] = usePersist();
    const token = useSelector(selectAccessToken);
    const effectRan = useRef(false);

    const [trueSuccess, setTrueSuccess] = useState();

    const [refresh,
    {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error,
    }] = useRefreshMutation();

    useEffect(() => {
        console.log("Useffect")
        console.log(effectRan);
        if(effectRan.current === true) { //TODO: Add a developer mode check || process.env.NODE_ENV !== "development"
            const verifyRefreshToken = async () => {
                try {
                    const result = await refresh();
                    console.log("Verification result", result);
                    setTrueSuccess(true);
                }
                catch(e) {
                    console.error(e);
                }
            }
            if(!token && persist) verifyRefreshToken();
        }

        return () => effectRan.current = true;
        
    }, []);

    let content = <p>No</p>;

    if(!persist) {
        console.log("Not persisting");
        content = <Outlet/>
    }
    else if(isLoading) {
        console.log("Loading...");
        content = <p>Loading...</p>;
    }
    else if(isError) {
        console.log("Refresh error");
        console.log(error);
        content = <Link to="/admin/login">Log in again</Link>;
    }
    else if(isSuccess && trueSuccess) {
        console.log("Success");
        content = <Outlet/>
    }
    else if(token && isUninitialized) {
        console.log("Token and uninitialized");
        console.log(isUninitialized);
        content = <Outlet/>
    }
    else {
        console.log("No")
        console.log(error);
    }

    return content;
}

export default PersistLogin;