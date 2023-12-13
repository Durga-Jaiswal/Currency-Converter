import React, {useId} from 'react';
export default function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        currencyDisabled = false,
        amountDisabled = false,
        selectCurrency= "usd"}
) 
  {  
    const amountInputId = useId();
    return (  
        <div class="firstInputBox">
            <div class="flex frombox" >
                <label  htmlFor={amountInputId}>
                    {label}
                </label>
                <input 
                    class="firstInput"
                    id= {amountInputId}
                    disabled = {amountDisabled}
                    value = {amount}
                    type="number"
                    placeholder="Amount"
                    onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div class="flex currencybox">
                <p class="marginZero">Currency Type</p>
                <select
                    value={selectCurrency}
                    disabled = {currencyDisabled}
                    onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    >
                        
                        {currencyOptions.map((currency) => (
                                <option 
                                key = {currency}
                                value={currency}>
                                {currency}
                            </option>
                        ))}

                        
                
                </select>
            </div>
    </div>
    );
}


