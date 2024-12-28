import { Outlet } from "react-router-dom";


function authenticationLayout(){
    return(
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
                <div className="max-w-md space-y-6 text-center text-primary">
                    <h1 className="text-4xl text-extrabold tracking-tight">Welcome To Ecommerce Shopping</h1>
                </div>

            </div>
            <div className="flex flex-1 items-center justify-content-center ">
                <Outlet/>

            </div>

        </div>

    )
}
export default authenticationLayout;