import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

type useQueryParameter = () => {
    queryText: string;
    currentQuery: string | null;
    setQuery: (e: ChangeEvent<HTMLInputElement>) => void;
    UpdataQuery: () => void;
}

export const useQueryParameter: useQueryParameter = () => {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const [ queryText, setQueryText ] = useState('')
    
    const currentQuery = useMemo(() => {
        return searchParams.get('name')
    }, [searchParams])
    
    const setQuery = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setQueryText(e.target.value)
    }, [setQueryText])

    const UpdataQuery = useCallback(() => {
        setSearchParams({name: queryText})
    }, [queryText])

    return {queryText, currentQuery, setQuery, UpdataQuery}
}