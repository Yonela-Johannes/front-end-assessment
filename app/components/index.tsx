import React from 'react'

type Props = {}

export default function Wrapper({children}) {
  return (
    <div className='flex flex-col space-y-[40px] lg:space-y-[60px] items-center min-h-full max-w-[1920px]'>
        {children}
    </div>
  )
}