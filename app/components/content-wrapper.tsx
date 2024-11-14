import React, { Children } from 'react'

type Props = {}

const ContentWrapper = ({children}) => {
  return (
    <div className='px-2 lg:p-0'>
        {children}
    </div>
  )
}

export default ContentWrapper