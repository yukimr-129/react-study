import axios from "axios"
import { useState } from "react"

type FetchJsonType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type FetchApiDataFanc = () => {
    jsonData: FetchJsonType[];
    getFetchData: () => void;
}

export const useFetchApiData: FetchApiDataFanc = () => {
    const [ jsonData, setJsonData ] = useState<FetchJsonType[]>([])

    const getFetchData = () => {
        // const sleep = (ms: number) => {
        //     return new Promise(resolve => setTimeout(resolve, ms));
        // }

        const getApiJson = () => {
            return new Promise<FetchJsonType[]>((resolve, reject) => {
                fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
                    // throw new Error
                    resolve(res.json())
                }).catch((err) => {
                    reject(err)
                })
            })
        }
        
        const fetchApiJson = async () => {
            
            try {
                // const res = await axios.get<FetchJsonType[]>('https://jsonplaceholder.typicode.com/todos')                
                // const res = await fetch('https://jsonplaceholder.typicode.com/todos')     
                // const jsonData = await res.json()
                console.log(getApiJson());
                  
                const resData = await getApiJson()
                console.log(jsonData);
                         
                setJsonData(resData)
            } catch (error) {
                console.log(error);
                
            }
        }
        setTimeout(fetchApiJson, 2000)
        // fetchApiJson()   
    }


    return {jsonData, getFetchData}
}