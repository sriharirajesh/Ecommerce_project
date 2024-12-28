import { Route, Routes } from "react-router-dom";
import react from "react";
import authenticationLogin from "./pages/authentication/login";
import authenticationRegister from "./pages/authentication/register";



function App() {
  

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">

        <h1>Header Component</h1>
          <Routes>
            <Route path="\authentication" element={<authenticationLayout/>}/>
              <Route path="login" element={<authenticationLogin/>} />
              <Route path="register" element={<authenticationRegister/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App;
