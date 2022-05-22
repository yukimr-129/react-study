import { FC, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useQueryParameter } from "../ customHook/useQueryParameter";

const Page1detailUrlParameter: FC = () => {
    const { id } = useParams()
    const { queryText, currentQuery, setQuery, UpdataQuery } = useQueryParameter()
    
    return (
        <div>
            <h1>Page1のURLパラメータです</h1>
            <h2>{`URLパラメータは${id}です`}</h2>
            <h2>{`Queryパラメータは${currentQuery}です`}</h2>
            <br/>
            <input type="text" onChange={setQuery} value={queryText}/>
            <button onClick={UpdataQuery}>パラメータを更新</button>
        </div>
    )
}

export default Page1detailUrlParameter