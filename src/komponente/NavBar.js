import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>Prodavnica</h1>
            <div className='links'>
                <Link to="/">Pocetna</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#0f0458',
                    borderRadius: '8px'
                }}>Novi proizvod</Link>
            </div>
        </nav>
    );
}


export default NavBar;