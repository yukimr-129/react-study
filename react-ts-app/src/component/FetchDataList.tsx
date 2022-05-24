import { FC } from "react";

type FetchJsonType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type Props = {
    jsonData: FetchJsonType[];
}

    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

const FetchDataList: FC<Props> = (props) => {
    const { jsonData } = props

    return (
        <>
            <div>
                {jsonData.map((val, index) => (
                        <div key={index} style={{textAlign: "center"}}>
                            <h2>title: {val.title}</h2>
                            <p>userId: {val.userId}</p>
                            <p>id: {val.id}</p>
                            <p>isCompleted: {val.completed ? "Completed!!" : "Not Completed..."}</p>
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default FetchDataList