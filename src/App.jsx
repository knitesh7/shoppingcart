import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './components/card/card.jsx'
import Filter from './components/filter/filter.jsx'
import MainHeader from './components/mainheader/mainheader.jsx'
import { setItems } from './redux/slices/filterslice.js'
import './App.css'


const App = () => {
  // const [data, setData] = useState([])
  const dispatch = useDispatch()
  const filterInfo = useSelector(state => state.filterInfo)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products', { method: 'get' })
      const jsonData = await response.json()

      dispatch(setItems(jsonData.products))
    }
    fetchData()
  }, [])
  return (
    <div className="App">

      <MainHeader />
      <Filter />
      <div className='cardContainer'>


        {filterInfo.searchItems.length > 0 ? (filterInfo.searchItems.map(product => <Card key={product.id} id={product.id} title={product.title} thumbnail={product.thumbnail} rating={product.rating} price={product.price} />)) : filterInfo.searchFound == false ? <h1>No such product to show</h1> : (filterInfo.filteredItems.length > 0 ? (filterInfo.filteredItems.map(product => <Card key={product.id} id={product.id} title={product.title} thumbnail={product.thumbnail} rating={product.rating} price={product.price} />)) : (filterInfo.unfilteredItems.map(product => <Card key={product.id} id={product.id} title={product.title} thumbnail={product.thumbnail} rating={product.rating} price={product.price} />)))}

      </div>

    </div>
  )
}

export default App



//   const products = [...Array(20)].map(()=>({
//     id:faker.datatype.uuid(),
//     name:faker.commerce.productName(),
//     price:faker.commerce.price(),
//     image:faker.image.image(),
//     inStock:faker.helpers.arrayElement([0, 3,5, 6, 7], 1),
//     fastDelivery:faker.datatype.boolean(),
//     ratings:faker.helpers.arrayElement([1, 2, 3, 4, 5], 1)
//   }))
