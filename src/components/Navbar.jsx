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
            <nav className={`py-1 md:px-4 px-4 pt-4 bg-slate-300${isSticky ? "sticky top-0 right-0 left-0 bg-white":""}`}>
              <div className='flex-item'>
                <div className='font-mono text-lg cursor-pointer text-zinc-900'>
                    <a href='/'className='block hover:text-gray-400 py-2 px-4'>Let-Me-Summarize</a>
                </div>
              </div>
            </nav>
        </header>
    </div>
  )
}
