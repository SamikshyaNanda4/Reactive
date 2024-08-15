import{useRouteError} from  "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <>
        <div>
        <h1>
            Oops! Something went Wrong!!!!!
        </h1>
        <h3> {err.status}:{err.statusText}</h3> <br></br>
        <p> {err.data}</p>
        </div>
        </>
    )
}

export default Error;