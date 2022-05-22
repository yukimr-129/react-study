import { FC } from "react"
import { Outlet } from "react-router-dom"

const Page1Layout: FC = () => {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Page1Layout