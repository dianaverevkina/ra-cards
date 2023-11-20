import { CardWithImg } from './components/CardWithImg/CardWithImg';
import { CardWithoutImg } from './components/CardWithoutImg/CardWithoutImg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <CardWithoutImg 
        title={'Special title treatment'} 
        text={'With supporting text below as a natural lead-in to additional content.'}
      />
      <CardWithImg 
        title={'Card title'} 
        text={'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
        link={'https://media.istockphoto.com/id/1067347086/photo/cat-with-blue-eyes-looks-at-camera.jpg?s=612x612&w=0&k=20&c=UP1yQs6o0eidm4L2F74DDm02pyeH40MwBwwGRAKhb4E='}
      />
      </div>
  );
}

export default App;
