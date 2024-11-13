import React, { Fragment } from 'react'
import { ITitle } from '~/lib/types'
import { Button } from './ui/button'
import compareLanding from '../data/index.json'

export default function Title ({ title, description}) {
   const {title: t, description: d } = compareLanding.landing
  return (
    <div className='flex flex-col gap-y-[30px] h-full'>
        <h1 className={`${title ===  t ? 'text-[48px] lg:text-[105px]' : 'text-[22px] lg:text-[24px]'} font-np-cond-black leading-[90%] lg:font-np-bold`}>{title}</h1>
        <p className={`${description == d} font-np-regular text-[22px] lg:text-[24px]`}>{description}</p>
    </div>
  )
}