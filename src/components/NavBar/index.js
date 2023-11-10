import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  state = {navBarDisplaydata: [], selectedcategory: false}

  componentDidMount() {
    this.GetAllProducts()
  }

  GetAllProducts = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
    )
    const data = await response.json()

    const updatedData = data.categories.map(eachData => ({
      name: eachData.name,
      products: eachData.products,
    }))

    this.setState({navBarDisplaydata: updatedData})
  }

  onClickcategoryButton = () => {
    this.setState(prevState => ({
      selectedcategory: !prevState.selectedcategory,
    }))
  }

  render() {
    const {navBarDisplaydata, selectedcategory} = this.state
    const categoryClassName = selectedcategory ? 'category-btn' : 'btn'

    return (
      <div className="nav-bg">
        <ul className="navbar-content-con">
          {navBarDisplaydata.map(eachData => (
            <li className="nav-li-con" key={eachData.name}>
              <button
                className={categoryClassName}
                onClick={this.onClickcategoryButton}
              >
                {eachData.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default NavBar
