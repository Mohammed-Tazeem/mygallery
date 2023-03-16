import React, {useState, useEffect} from 'react';
import ImageCard from './components/imageCard.js';
import ImageSearch from './components/imageSearch.js';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect( () =>{
    fetch('https://pixabay.com/api/?key=33701527-329a08f489ba447cde4d3d282&q=${term}&image_type=photo&pretty=true')
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsloading(false);
    }
)
    .catch(err => console.log(err));
  
  
  },[term]);


  return (
    <div className='container mx-auto'>
      <ImageSearch searchText= {(text)=>setTerm(text)}/>
      {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'> LOADING....</h1>:<div className='grid grid-cols-3 gap-4'>  
      {images.map(image=> (
      <ImageCard key={image.id} image= {image}/>
      ))}
      </div>}

    </div>
  );

}
      
export default App; 
      
