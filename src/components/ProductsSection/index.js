import {Component} from 'react'
import ProductItems from '../ProductItems'
import './index.css'

class ProductsSection extends Component {
  state = {productsList: []}

  componentDidMount() {
    this.GetAllProducts()
  }

  GetAllProducts = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
    )
    const data = await response.json()
    console.log(data)

    const categoryData = data.categories.map(eachName => ({
      name: eachName.name,
      products: eachName.products.map(eachProduct => ({
        id: eachProduct.id,
        name: eachProduct.name,
        weight: eachProduct.weight,
        price: eachProduct.price,
        image: eachProduct.image,
      })),
    }))
    console.log(categoryData)
    // const productsListData = categoryData.products.map(eachData => ({
    //   id: eachData.id,
    //   name: eachData.name,
    //   weight: eachData.weight,
    //   price: eachData.price,
    //   image: eachData.image,
    // }))
    // console.log(productsListData)

    // // console.log(categoryData.products)

    // const updatedData = data.products.map(eachData => ({
    //   id: eachData.id,
    //   name: eachData.name,
    //   weight: eachData.weight,
    //   price: eachData.price,
    //   image: eachData.image,
    // }))
    // console.log(updatedData)

    this.setState({productsList: categoryData})
  }

  render() {
    const {productsList} = this.state

    return (
      <div className="">
        <ul className="product-con">
          {productsList.map(eachData => (
            <ProductItems key={eachData.id} productData={eachData} />
          ))}
        </ul>
      </div>
    )
  }
}

export default ProductsSection
