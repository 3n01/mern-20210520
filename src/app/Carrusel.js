import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Carrusel = () => {
    useEffect(() => {
        fetchItems();
      }, [])
    
      const [items, setItems] = useState([]);
    
      const fetchItems =  () => {
        fetch('http://localhost:8080/api/images/1', {
          method: 'GET',
          mode: 'cors'
        }).then( data => data.json())
        .then(
            items => {
                console.log(items.result);
                setItems(items.result);
            },
            err => console.log(err)
        )
      }
    
      return (
        <div className="carrusel">
          <Carousel>
            {items.sort((a,b) => a.sort - b.sort).map(item => {
              alert(item.url)
              return <Carousel.Item key={item._id}>
                <img className="image-carousel" 
                    src={item.url} 
                    alt={item.name}>
                </img></Carousel.Item>
            })}
          </Carousel>
        </div>
      );
    
    
}

export default Carrusel;