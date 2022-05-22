import { Link, useLocation, useNavigate } from "react-router-dom"

const Page1DetailA = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state);

    const onClickBack = () => {
        navigate(-1)
    }
    
    return (
        <>
            <div>
                <h1>Page1DetailAです</h1>
                <h2>Page1DetailAタイトル</h2>
                <ul>
                    <li><Link to='/page1/detaila/100'>URL Parameter</Link></li>
                    <li><Link to='/page1/detaila/100?name=YUKI'>Query Parameter</Link></li>
                </ul>
                <button onClick={onClickBack}>戻る</button>
            </div>
        </>
    )
}

export default Page1DetailA