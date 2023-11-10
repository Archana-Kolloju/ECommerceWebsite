import {Component} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import ProductsSection from '../ProductsSection'
import './index.css'

class MainDisplay extends Component {
  render() {
    return (
      <div className="bg-con">
        <Header />
        <div className="card-con">
          <NavBar />
          <ProductsSection />
        </div>
      </div>
    )
  }
}
export default MainDisplay
