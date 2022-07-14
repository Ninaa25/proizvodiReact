import NavBar from '../komponente/NavBar';
import ProductsList from '../komponente/ProductsList';
import { useState } from 'react';

const Pocetna = () => {

    const [products, setProducts] = useState([
        { title: 'Nakit', body: 'Narukvice, lancic...', id: 1 },
        { title: 'Torbe', body: 'Male, velike...', id: 2 },
        { title: 'Naocare', body: 'Za sunce, za vid...', id: 3 }
    ]);

    return (
        <div className='pocetna'>

            <NavBar />

            <div className='content'>
                <ProductsList products={products} />
            </div>

        </div>
    );
}


export default Pocetna;