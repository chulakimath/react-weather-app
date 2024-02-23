import React from 'react';
import { FaSearchLocation } from "react-icons/fa";

const Button = ({ getData }) => {

    return (
        <div className=''>
            <button
                className='bg-black text-white rounded-lg px-8 py-2 flex justify-end items-center gap-2'
                onClick={getData}
            >
                <span>Get Info </span>
                <span className=''><FaSearchLocation /> </span>
            </button>
        </div>
    )
}

export default Button