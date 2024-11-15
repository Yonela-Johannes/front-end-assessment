import React, { Children } from 'react'

type Props = {}

const ContentWrapper = ({children}) => {
  return (
    <div className='px-2 sm:px-6'>
        {children}
    </div>
  )
}

export default ContentWrapper