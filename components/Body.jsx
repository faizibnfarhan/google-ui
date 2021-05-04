import { useRef, useState } from 'react';
import {IoMdSearch} from 'react-icons/io'
import {useRouter} from 'next/router'



function Body() {
    const router = useRouter();
    const searchInputRef = useRef(null);    
    const search = (e) => {
        e.preventDefault();
        let result = searchInputRef.current.value;
        if(!result) return;
        router.push(`/search?result=${result}`)
    }
    return (
        <form className="m-5 flex-grow lg:my-40 md:my-30 sm:mt-35">
            <div className="w-100">
                <img src="/logo.png" className="ml-auto mr-auto" width="450"  height="100"/>
            </div>
            <div className="input flex flex-row mb-5 ml-auto mr-auto -mt-8 items-center w-100">
                <IoMdSearch/>
                <input type="text" className="flex-grow pl-4" ref={searchInputRef}/>
            </div>
            <div className="flex flex-row m-6 justify-center space-x-4">
                <button type="submit" onClick={search} className="google bg-gray-50 focus:outline-none text-gray-600">Google Search</button>
                <button onClick={search} className="google bg-gray-50 focus:outline-none text-gray-600">I'm Feeling Lucky</button>
            </div>
            <div className="flex flex-row justify-center items-center">
                <p className="text-gray-700 mr-1 text-sm">
                    Google offered in : 
                </p>
                <p className="text-blue-700 mr-1 text-sm hover:underline">
                   Languages 
                </p>
            </div>
        </form>
    )
}

export default Body
