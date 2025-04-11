import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './temas/listatemas/ListaTemas'
import FormTema from './temas/formtema/FormTema'
import DeletarTema from './temas/deletartema/DeletarTema'
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens'
import FormPostagem from './components/postagens/formpostagem/FormPostagem'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartema" element={<FormTema />} />
            <Route path="/editartema/:id" element={<FormTema />} />
            <Route path="/deletartema/:id" element={<DeletarTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App