import React, { Fragment } from 'react'
import { ITitle } from '~/lib/types'
import { Button } from './ui/button'
import compareLanding from '../data/index.json'

export default function Title ({ title, description}) {
   const {title: t, description: d } = compareLanding.landing
  return (
    <div className={`flex flex-col ${title === t ? 'gap-y-[30px]' : 'gap-y-2 my-4'} h-full`}>
        <h1 className={`${title ===  t ? 'text-[48px] lg:text-[105px] font-np-cond-black' : 'text-[22px] lg:text-[24px]'} leading-[90%]`}>{title ===  t ? title?.toUpperCase() : title}</h1>
        <p className={`${description == d ? 'text-[12px] lg:text-[12px] w-[238px]' : 'text-[22px] lg:text-[14px]'} font-np-regular `}>{description}</p>
        {title ===  t ? (<Button className="w-[258.8px] bg-black text-white">Shop UA New Arrivals</Button>) : ('')}
    </div>
  )
}