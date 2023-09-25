
function Cards({cardColors , changeColorBg}) {
  return (
    <ul>
        {cardColors.map((color)=> {
            return <li onClick={()=> changeColorBg(color)} className="card" key={color} style={{background:color}}>{color}</li>
        })}
    </ul>
  )
}

export default Cards