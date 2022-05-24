import FetchApi from "./FetchApi"
import { Suspense } from "react"
const FechApiJson = () => {
    return (
        <>
        <Suspense fallback={<p style={{textAlign: "center"}}>Loding...</p>}>
            <FetchApi />
        </Suspense>
        </>
    )
}

export default FechApiJson