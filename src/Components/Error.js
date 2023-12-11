import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return err==undefined?[]:(
        <div>
            <h1>This is Error Message</h1>
            <h2>{err.error.message}</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    );
}

export default Error;