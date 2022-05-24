import { FC, Suspense } from "react"
import { useFetchApiData } from "../ customHook/useFetchApiData"
import FetchDataList from "./FetchDataList"

const FetchApi: FC = () => {
    const {jsonData, getFetchData} = useFetchApiData()

    return (
        <>
            <button onClick={getFetchData}>データ取得</button>
            <Suspense fallback={<p style={{textAlign: "center"}}>Loding...</p>}>
                <FetchDataList jsonData={jsonData}/>
            </Suspense>
        </>
    )
}

export default FetchApi