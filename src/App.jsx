import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'



function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
<>
      <h1>Currency Coverter</h1>
      <div class="container">
          
              <div>
                
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                    >
                      <div  >
                          <InputBox
                              label="From"
                              amount = {amount}
                              currencyOptions = {options}
                              onCurrencyChange = {(currency) => {
                                // setAmount(amount)
                                setFrom(currency)
                              }}
                              onAmountChange = {(amount) => {
                                setAmount(amount)
                              }}
                              selectCurrency = {from}
                              
                          />
                      </div>
                      <div class="btn">
                          <button
                              type="button"
                              
                              onClick = {swap}
                          >
                              swap
                          </button>
                      </div>
                      <div class="secondInputBox">
                          <InputBox
                              label="To"
                              amount = {convertedAmount}
                              currencyOptions = {options}
                              onCurrencyChange = {(currency) => {
                                setTo(currency)
                              }}
                              selectCurrency = {to}
                              amountDisabled
                          />
                      </div>
                      <div class="btn">
                        <button type="submit">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                      
                      </div>
                      
                  </form>
              </div>
              
      </div>
      
      </>
  )
}

export default App
