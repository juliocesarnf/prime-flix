import { type ReactNode, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api, apiKey } from "../../services/api";
import type { Filme } from "../../types/Filme";
import { toast } from "react-toastify";

export default function Filme():ReactNode {

    const { id } = useParams<{ id: string }>();
    const [ filme, setFilme ] = useState<Filme | null>(null);
    const [ loading, setLoading ] = useState( true );
    const navegate = useNavigate();

    useEffect( () => {
        async function loadFilme(): Promise<void> {
            if ( id != undefined ) {
                await api.get(`movie/${id.toString()}`, {
                    params: {
                        api_key: apiKey,
                        language: 'pt-BR'
                    }
                }).then( ( response ) => {
                    setFilme( response.data );
                    setLoading( false );
                }).catch( () => {
                    navegate( "/", { replace: true } );
                    return;
                });
            }  
              
        }
        loadFilme();
        return () => {
            console.log( 'Componente desmontado.')
        }   
    }, [ navegate, id ] );

    function salvarFilme(): void {
        if(filme) {
            const meusFilmes: string | null = localStorage.getItem('meus_filmes');
            const filmesSalvos = JSON.parse(meusFilmes ?? '[]');
            const filmeExistente = filmesSalvos.some( (filmeSalvo: Filme) => filmeSalvo.id === filme.id);
            if( filmeExistente ) {
                toast.warn( 'ESTE FILME JÁ ESTÁ NA LISTA.' );
                return;
            }
            filmesSalvos.push( filme );
            localStorage.setItem( 'meus_filmes', JSON.stringify(filmesSalvos) );
            toast.success( 'FILME SALVO.' );
        }
        
    }

    if( loading ) {
        return(
            <div className="flex text-center mt-5 justify-center">
                <h1>Carregando Filme</h1>
            </div>
        )
    }

    if(filme) {
        return(
            <div className="my-4 mx-auto w-[500px] flex flex-col">
                <h1 className="mb-3 text-center text-2xl font-bold">{filme.title}</h1>
                <img className="w-[500px] max-w-full" 
                src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} 
                />
                <h2 className="mt-2 mb-2 font-bold">Sinopse</h2>
                <span className="text-sm mb-3">{filme.overview}</span>
                <strong>Avalizção: {filme.vote_average} / 10</strong>
                <div className="mt-4 flex gap-4">
                    <button 
                    onClick={salvarFilme}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                    >
                        Salvar
                    </button>
                    <a
                    href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" 
                    target="black" rel="external"
                    >
                        Trailer
                    </a>
                </div>
            </div>
        )
    }
    
}
