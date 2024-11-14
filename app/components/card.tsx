import { Link } from "@remix-run/react"

type Props = {}

export default function Card ({ category }) {
  return (
    <div className='h-full w-full'>
        <img className='h-[230px] w-[230px] lg:w-[324px] lg:h-[321px] object-contain' src={category.imgSrc} alt={category.title} />
        <Link className="hidden lg:block font-np-semi-bold text-[14px] my-6" to={category.btnTitle} >
        {category.btnTitle}
        </Link>
    </div>
  )
}