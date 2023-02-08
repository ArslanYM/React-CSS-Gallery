import React , {useEffect,useState} from 'react';
import { ImageComponent } from './components/ImageComponent';
import './assets/App.css';

function App() {
  
  const [images , setImages] = useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [term , setTerm] = useState('');

  // useEffect(()=> {
  //   fetch('https://pixabay.com/api/?key=33480071-bb8e31e1e6f077551f97f13bf&q=${term}&image_type=photo&pretty=true')
  //   .then(res => res.json())
  //   .then(data => {
  //     setImages(data.hits);
  //     setIsLoading(false);
  //   })
  //   .catch(err => console.log(err))
  // },[]);

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
      {images.map(image => {
        <ImageComponent key={image.id} image={image}/>
      })}
      </div>
    </div>
  );
}

export default App;
