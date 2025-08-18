import './header.css'

interface HeaderProps{
    titulo : string;
    texto ?: string;
}

export default function Header({titulo, texto} : HeaderProps){
    return(
        <>
            <header className="header">
                <h1>{titulo}</h1>
                <p>{texto}</p>
            </header>
            <hr></hr>
        </>
    )
}