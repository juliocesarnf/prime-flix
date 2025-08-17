import { Link } from "react-router-dom";

function Erro() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
        <h1 className="text-6xl font-bold text-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Página não encontrada!</h2>
        <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition duration-300"
        >
            Veja todos os filmes
        </Link>
    </div>
)
}

export default Erro;