import { type ReactNode, useEffect, useState } from "react";
import { api, apiKey } from "../../services/api";
import { type Filme } from "../../types/Filme";
import { Link } from "react-router-dom";

function Home():ReactNode {

    const [ filmes, setFilmes ] = useState<Filme[]>([]);
    const [ loading, setLoading] = useState<boolean>(true);

    useEffect( () => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", { 
                params: {
                    api_key: apiKey,
                    language: 'pt-BR',
                    page: 1
                }
            });
            setFilmes( response.data.results.slice( 0, 10 ) );
            setLoading( false );
        }

        loadFilmes();

    });

    if( loading ) {
        return(
            <div className="flex text-center mt-5 justify-center">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return(
        <div className='w-full'>
            <div className="mx-auto p-2 max-w-[400px]">
                { filmes.map( (f) => {
                    return(
                        <article key={ f.id } className="w-full p-3 flex flex-col mb-5">
                            <strong className="text-center mb-2">{ f.title }</strong>
                            <img className="w-full h-[500px] rounded-t-md" src={`https://image.tmdb.org/t/p/original/${f.poster_path}`} alt={f.title} />
                            <Link className="text-center p-[8px] bg-[#116FEB] text-white rounded-b-md" to={`/filme/${f.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;