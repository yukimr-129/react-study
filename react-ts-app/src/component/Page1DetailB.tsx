import { useNavigate } from "react-router-dom"

const Page1DetailB = () => {
    const navitgate = useNavigate()

    const onClickDetailA = () => {
        navitgate('/page1/detaila')
    }

    return (
        <>
            <div>
                <h1>Page1DetailBです</h1>
                <h2>Page1DetailBタイトル</h2>
                <button onClick={onClickDetailA}>DetailAへ</button>
            </div>
        </>
    )
}

export default Page1DetailB