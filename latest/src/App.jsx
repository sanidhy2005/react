import {useDispatch,useSelector} from 'react-redux'
import './App.css'
import { useEffect } from 'react';
import  getProducts  from './Actions/productAction';
// import {getProducts} from './Actions/productAction';

function App() {
  const dispatch = useDispatch()

 const {value,error,loading}= useSelector((state)=>state.product);

console.log(value);
// if(error){
//   return;
// }   
useEffect(()=>{
  dispatch(getProducts())
},[])
  return (
    <>
{loading && <h1>loa
  loading...</h1>}  

{value && 
 value.map((res)=>{
  return(
<>
    <h4>{res.title}</h4>
    </>
  )
  
 })
}
    </>
  )
}

export default App
