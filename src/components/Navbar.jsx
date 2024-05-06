import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  
  const [isSticky,setIsSticky] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 0){
        setIsSticky(true)
      }
    };
    window.addEventListener("scroll",handleScroll)
  },[])


  return (
    <div>
        <header className='w-full fixed top-0 left-0 right-0 bg-slate-400'>
            <nav className={`py-4 md:px-8 px-4 pt-8 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white":""}`}>
              <div className='flex-item'>
                <div className='font-bold text-lg cursor-pointer text-black'>
                    <a href='/'className='block hover:text-gray-400 py-2 px-4'>Let-Me-Summarize</a>
                </div>
              </div>
            </nav>
        </header>
    </div>
  )
}
