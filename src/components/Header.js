import React from 'react'
import { GrSearch } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='h-16 shadow-md bg-white'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div>
                    <h1 className='font-bold text-2xl text-green-500'>
                        <Link to={"/"}>
                            Hemooo
                        </Link>
                    </h1>
                </div>
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                    <input type='text' placeholder='Search product here...' className='w-full outline-none' />
                    <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                        <GrSearch />
                    </div>
                </div>

                <div className='relative flex justify-center gap-7'>
                    <div className='text-3xl cursor-pointer relative flex justify-center'>
                        <FaCircleUser />
                    </div>

                    <div className='text-3xl relative'>
                        <span>  <FaShoppingCart /></span>
                        <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex justify-center items-center absolute -top-2 -right-3'>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>
                    <div>
                        <Link to={"/login"} className='px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700'>Login</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
