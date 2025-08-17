import { useEffect, useState } from "react";
import type { Filme } from "../../types/Filme";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {

    const [ filmes, setFilmes ] = useState<Filme[]>([]);

    useEffect( () => {
        const meusFilmes: string | null = localStorage.getItem('meus_filmes');
        setFilmes( JSON.parse(meusFilmes ?? '[]') );
    }, [] );

    function excluirFilme(id: number) {
        const filtroFilmes = filmes.filter( (f) => {
            return (f.id != id);
        });
        setFilmes(filtroFilmes);
        localStorage.setItem( 'meus_filmes', JSON.stringify(filtroFilmes) );
        toast.success( 'FILME REMOVIDO COM SUCESSO.' );
    }
    
    return (

        

        <div className="max-w-xl mx-auto mt-6 p-4 bg-white rounded-xl shadow-md">
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Filmes Favoritos</h1>

            {filmes.length === 0 && <span className="block p-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-lg"
            >
                Nenhum filme salvo.
            </span>}
            
            <ul className="space-y-2">
                {filmes.map((f) => (
                    <li 
                        key={f.id} 
                        className="flex justify-between items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <span className="text-sm font-medium text-gray-700">{f.title}</span>
                        
                        <div className="flex gap-2">
                            <Link 
                                to={`/filme/${f.id}`} 
                                className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Ver
                            </Link>
                            
                            <button 
                                className="px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                onClick={() => excluirFilme(f.id)}
                            >
                                Excluir
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favoritos;