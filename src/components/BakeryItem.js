// TODO: create a component that displays a single bakery item
export default function BakeryItem({name,description,price,image,cart,setCart,tprice, setPrice}){
  // const name = props.name;
  // const description = props.description;
  // const price = props.price;
  // const image = props.image;


  function handleClick(){
    setCart([...cart,name]);
    setPrice(tprice+price);
  }

  return(

    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price} </p>
      <img src={image}/>
      <button onClick={handleClick}>Add to Cart</button>
    </div>

  )
}
