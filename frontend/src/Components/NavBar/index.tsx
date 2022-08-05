import './styles.css'

function NavBar(){
    return(
        <div className="nav">
            <div className="titulo">Minha biblioteca</div>
                <div className="links">
                    <a href='/' className="link-menu">Home</a>
                    <a href='/novo' className="link-menu">Cadastrar Livro</a>
                </div>
        </div>
    )
}

export default NavBar