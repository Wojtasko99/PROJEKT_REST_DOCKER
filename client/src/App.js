import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./components/Main" 
import Signup from "./components/Signup"
import Login from "./components/Login"
import Form from "./components/Form"
import Export from "./components/Export"
import Age from "./components/Languages_age"
import Degree from "./components/Languages_degree"
import Sex from "./components/Languages_sex" 

//Blokada wejscia na strone nieuprawnionym uzytkownikom

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      {user && <Route path="/form" exact element={<Form />} />}
      <Route path="/form" element={<Navigate replace to="/login" />} />
      {user && <Route path="/export" exact element={<Export />} />}
      <Route path="/export" element={<Navigate replace to="/login" />} />
      {user && <Route path="/languages_age" exact element={<Age />} />}
      <Route path="/languages_age" element={<Navigate replace to="/login" />} />
      {user && <Route path="/languages_degree" exact element={<Degree />} />}
      <Route path="/languages_degree" element={<Navigate replace to="/login" />} />
      {user && <Route path="/languages_sex" exact element={<Sex />} />}
      <Route path="/languages_sex" element={<Navigate replace to="/login" />} />

    </Routes>
  )
}
export default App