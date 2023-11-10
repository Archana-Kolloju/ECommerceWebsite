import './index.css'

const ProductItems = props => {
  const {productData} = props
  const {name, products} = productData
  return (
    <li className="section">
      <div className="title-section">
        <h1 className="name">{name}</h1>
        <img
          src="https://res.cloudinary.com/dgifxw9bf/image/upload/v1699614546/entypo_chevron-small-right_fpyskj.png"
          className="image-logo"
        />
      </div>
      <ul className="products-section">
        {products.map(eachProduct => (
          <li className="list-products-con">
            <div className="list-products">
              <img src={eachProduct.image} className="product-image" />
              <p className="price">{eachProduct.price}</p>
              <p className="product-name">{eachProduct.name}</p>
              <p className="weight">{eachProduct.weight}</p>
            </div>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default ProductItems
