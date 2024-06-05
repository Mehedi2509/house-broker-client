import { RouterProvider } from "react-router-dom"
import AuthProvider from "./AuthProvider/AuthProvider"
import { router } from "./routes/Routes"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
    </>
  )
}

export default App
