import logo from './logo.svg';
import './App.css';
import { One } from './One';
import image from './image.jpg'
import Cards from './Cards';


function App() {
    let a=[{title:'title1',body:'body1',cls:'bg-black text-white w-32 p-3'},
    {title:'title2',body:'body2',img:image,cls:'bg-black text-white w-32 p-3'},
    {title:'title3',body:'body3',cls:'bg-black text-white w-32 p-3'},
    {title:'title4',body:'body4',cls:'bg-black text-white w-32 p-3'},
    {title:'title4',body:'body4',cls:'bg-black text-white w-32 p-3'},
]

  return (
  <>
  <div className='flex gap-10'>

{a.map((item)=>(

<Cards cls={item.cls} img={item.img} title={item.title} body={item.body}/>



))}



  
  </div>
  </>

  );
}

export default App;
