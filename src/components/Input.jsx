import React from 'react';
import { GrLocation } from "react-icons/gr";

const Input = ({ value, onChangeCallback,placeHolder }) => {
    const changeHandler = (event) => {
        onChangeCallback(event.target.value)
    }

    return (
        <div className='flex bg-white p-2 rounded-lg'>
            <label htmlFor="input" className='flex justify-center items-center pr-2'>
            <GrLocation/>
            </label>
            <input
                className='focus:outline-none w-full'
                id='input'
                placeholder={placeHolder}
                type="text"
                value={value}
                onChange={changeHandler}
            />
        </div>
    )
}

export default Input