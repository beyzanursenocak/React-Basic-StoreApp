export default function Product({ productObj }){
    if(!productObj.is_active) return null
    return (
      <div className='card shadow-sm h-100'>
        <img className='card-img-top p-2 p-md-3 border-bottom' style={{minHeight: "450px"}} src={ "/img/" + productObj.image } alt='' />
        <div className='card-body'>
          <h2 className='card-title'>{ productObj.title }</h2>
          <p className='card-text'>{ productObj.description }</p>
          <span className="badge text-bg-success">{ productObj.price } TL</span>
        </div>
      </div>
    )
  }
  