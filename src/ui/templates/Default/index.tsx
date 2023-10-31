import { Outlet } from "react-router-dom"
import effectLeft from "../../../assets/effect_left.svg"
import effectRight from "../../../assets/effect_right.svg"
import logo from "../../../assets/logo.svg"

export function Default() {
    return (
        <div className="w-100 bg-base-background ">
            <header className="bg-base-profile p-12 flex justify-between items-start relative">
                <img src={effectLeft} alt="" />
                <h1>
                    <img src={logo} alt="" />
                </h1>
                <img src={effectRight} alt="" />
                <div className="bg-[#14589C] blur-[106px] absolute w-[891px] h-[52px] bottom-15 left-1/2 -translate-x-1/2"></div>
            </header>
            <div className="min-h-screen z-30">
                <div className="max-w-[54rem] h-[212px] -mt-24 mx-auto z-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}