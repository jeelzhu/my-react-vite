import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [result, setResult] = useState<number>(0)
  const [amount, setAmount] = useState<number>(10000)
  const [rate, setRate] = useState<number>(0.1)
  const [year, setYear] = useState<number>(10)

  useEffect(()=>{
    /*document.querySelector('#result').value="";*/
  },[])

  useEffect(()=>{
    calculate();
    /*if(clear)
      document.querySelector('#result').value="";*/
  })

  const calculate = () => {
    console.log(`amount  ${amount}`);
    console.log(`type  ${typeof amount}`);
    console.log(`rate  ${rate}`);
    console.log(`year  ${year}`);
    let  totalAmount:number = parseFloat(amount);
    for ( let i=1;i < year; i++) {
      totalAmount += totalAmount * parseFloat(rate) ;
    }
    // @ts-ignore
    setResult(totalAmount.toFixed(2));
  }

  const test = () => {
    const items = [{},{}, {}];

  }


  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ul>
            <label>Initial amount:</label>
            <input id="amount" value={amount} onChange={(e) => { setAmount(e.target.value); calculate() }}/> <br/>
            Interest rate <input id="rate" value={rate}  onChange={(e) => { setRate(e.target.value); calculate() }}/> <br/>
            Year <input id="year" value={year}  onChange={(e) => { setYear(e.target.value); calculate() }}/> <br/>
            <label>{result}</label><br/>
          </ul>

        </p>


      </header>

    </div>
  )
}

export default App
