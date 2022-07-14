import NavBar from '../komponente/NavBar';
import ProductsList from '../komponente/ProductsList';
import { useState, useEffect } from 'react';

const Pocetna = () => {

    const [products, setProducts] = useState([
        { title: 'Nakit', body: 'Narukvice, lancic...', id: 1 },
        { title: 'Torbe', body: 'Male, velike...', id: 2 },
        { title: 'Naocare', body: 'Za sunce, za vid...', id: 3 }
    ]);

    const deleteProduct = (id) => {
        const niz = products.filter(product => product.id != id);
        setProducts(niz);
    }


    return (
        <div className='pocetna'>

            <NavBar />

            <div className='content'>
                <ProductsList products={products} delete={deleteProduct} />
            </div>

        </div>
    );
}


export default Pocetna;