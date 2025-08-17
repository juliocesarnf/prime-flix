import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="bg-black w-full h-10 flex items-center justify-around">
            <Link className="text-white text-2xl cursor-pointer" to="/">Prime Flix</Link>
            <Link className="text-blue-800 bg-white px-2 cursor-pointer rounded-sm" to="/favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;