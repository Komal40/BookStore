import React from 'react'

export default function Card({item}) {
  return (
    <div className="my-3">
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline p-3 hover:bg-pink-500 duration-200 cursor-pointer hover:text-white p-2">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}
