import React, {useState} from 'react'

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updatePrice = (e) => {
    setPrice(e.target.value);
  }

  // addMovie = e => {
  //   e.preventDefault();
  // }

  return (
    <form>
      <input type="text" name="name" value={name} onChange={updateName}/>
      <input type="text" price="price" value={price} onChange={updatePrice}/>
      <button>Submit</button>
    </form>
  )
}

export default AddMovie;


