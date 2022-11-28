import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({data}) => {
    const params = useParams()
    console.log(params)

    let result = data?.find(item => item.id === params.id)
    console.log(result)

  return (
    <div>
      <h2>{result?.title}</h2>
      <img src={result?.thumbnail} alt="" />
    </div>
  )
}

export default ItemDetail
