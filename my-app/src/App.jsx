
import './App.css'
import { add, diff, mul, divide as div } from './utils/calculation/math'

function App() {
 
  const exportSum = add(2,5);
  console.log(exportSum);

  const exportDiff = diff(10,5);
  console.log(exportDiff);

  const mult = mul(4,5);
  console.log(mult);

  const divv = div(10, 2);
  console.log(divv);

  return (
    <>
     
      <h1>Vite + React</h1>
    
     
    </>
  )
}

export default App
