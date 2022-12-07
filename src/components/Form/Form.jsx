import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

function Form() {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('phisical')
    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        const data = {
            country, 
            street, 
            subject
        }

        tg.sendData(JSON.stringify(data))
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }

    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Sent the data'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])

    const onChangeCountry = e => setCountry(e.target.value)
    const onChangeStreet = e => setStreet(e.target.value)
    const onChangeSubject = e => setSubject(e.target.value)

  return (
    <div className='form'>
      <h3>Please fill the form</h3>
      <input type='text' className='input' placeholder='Street'value={street} onChange={onChangeStreet}/>
      <input type='text' className='input' placeholder='Country' value={country} onChange={onChangeCountry}/>
      <select className='select' value={subject} onChange={onChangeSubject}>
        <option value={'phisical'}>Phisical worker</option>
        <option value={'mental'}>Mental worker</option>
      </select>
    </div>
  )
}

export default Form
