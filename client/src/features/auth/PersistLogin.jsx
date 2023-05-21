import { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

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
        content = <ClipLoader size={"60px"} color="#FFFFFF" className="absolute ml-[-30px] left-[50%] top-[30%] text-center" />
    }
    else if(isError) {
        console.log("Refresh error");
        console.log(error);
        content = (
        <div
        className="mx-auto bg-black border-y-2 border-white p-10 max-w-[700px]"
        >
            <p
            className="text-xl text-center mb-5"
            >You have been logged out. Please log in again.</p>
            <Link className="border border-white block w-[50%] py-3 text-center mx-auto hover:bg-white/25" to="/admin/login">Log In</Link>
        </div>
        );
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