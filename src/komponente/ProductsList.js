
const ProductsList = (props) => {

    const products = props.products;

    return (
        <div className="products-list">
            {products.map((product) => (
                <div className="products-preview" key={product.id}>
                    <h2> {product.title}</h2>
                    <p> U {product.title} spadaju: {product.body}</p>
                    <button onClick={() => props.delete(product.id)} id="button-obrisi">Obriši</button>
                </div>
            ))}
        </div>
    );
}
export default ProductsList;