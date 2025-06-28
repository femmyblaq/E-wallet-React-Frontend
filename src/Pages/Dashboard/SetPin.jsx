import React, { useRef, useState } from 'react'
import style from '../Dashboard/SetPin.module.css'

export default function SetPin() {
    const inputRefs = [useRef(), useRef(), useRef(), useRef()]
    const [values, setValues] = useState(['', '', '', ''])

    const handleChange = (e, index) => {
        const val = e.target.value;

        if(/^\d$/.test(val)) {
            const newValues = [...values]
            newValues[index] = val;
            setValues(newValues);

            //Move to the next input
            if(index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();

            }else {
                handleSubmit(newValues)
            }
        }else {
            e.target.value = '';
        }
    }

    const handleSubmit = (finalValues) => {
        const pin = finalValues.join('');
            console.log('Submitted PIN:', pin);
        //TODO
    }
  return (
    <div className={style.setPin}>
      <h4>Set Pin Page</h4>
      <div style={{display: 'flex', gap: '8px', marginTop: '20px'}}>
        {inputRefs.map((ref, index) => (
            <input key={index} ref={ref} type="text" maxLength={1} inputMode='numeric' pattern='\d*' value={values[index]} onChange={(e) => handleChange(e, index)} style={{width: '40px', padding: '5px', height: '40px', textAlign: 'center', fontSize: '1.2rem' }} />
        ))}

      </div>
    </div>
  )
}
