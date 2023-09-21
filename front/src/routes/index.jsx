import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Main } from "../pages/private/main"
import { Home } from "../pages/public/login"

export const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}