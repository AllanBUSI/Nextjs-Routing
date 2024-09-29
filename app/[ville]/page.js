import { Suspense } from "react";
import Loading from "./loading";


const Pageville = ({params}) => {
    return <Suspense fallback={<Loading/>}>
        <h1>{params.ville}</h1>
    </Suspense>
    
}

export default Pageville;
