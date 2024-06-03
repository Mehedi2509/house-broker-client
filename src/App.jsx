import { RouterProvider } from "react-router-dom"
import AuthProvider from "./AuthProvider/AuthProvider"
import { router } from "./routes/Routes"


function App() {

  return (
    <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </>
  )
}

export default App
