
const ProductsList = (props) => {

    const products = props.products;

    return (
        <div className="products-list">
            {products.map((product) => (
                <div className="products-preview" key={product.id}>
                    <h2> {product.title}</h2>
                    <p> U {product.title} spadaju: {product.body}</p>
                </div>
            ))}
        </div>
    );
}
export default ProductsList;