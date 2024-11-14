import React, { FC } from "react"

const Wrapper : FC <React.ReactNode[]> = ({children}) => {
  return (
    <div className='flex flex-col gap-y-[40px] lg:gap-y-[60px] items-center min-h-full max-w-[1920px]'>
        {children}
    </div>
  )
}

export default Wrapper