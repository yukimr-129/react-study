import { FC } from "react"
import { Link } from "react-router-dom"

const Page1: FC = () => {
    const arr = [...Array(10).keys()]
    return (
        <div>
            <h1>Page1です</h1>
            <h2>Page1タイトル</h2>
            <ul>
                <li><Link to='/page1/detaila' state={arr}>DetailA</Link></li>
                <li><Link to='/page1/detailb'>DetailB</Link></li>
            </ul>
        </div>
    )
}

export default Page1