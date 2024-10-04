import React, { useState } from 'react'

export default function SearchBar({ handleSeach }) {
    const [enterCity, setEnterCity] = useState('');
    const searchHere = () => {

        setEnterCity(handleSeach);
        setEnterCity('');
    }
    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            setEnterCity(handleSeach);
            setEnterCity('');
        }
    }
    return (
        <>
            <div className='text-center flex justify-center my-9 items-center  border border-red-200  rounded '>
                <input className='p-3' onKeyDown={handleEnter} type="text" value={enterCity} placeholder='type any city name' onChange={(e) => setEnterCity(e.target.value)} name="" id="" />
                <button onClick={searchHere} className='btn text-white bg-black p-3 rounded-r'>Search</button>
            </div>
        </>
    )
}
