import { Link } from "@remix-run/react"

type Props = {}

export default function Card ({ category }) {
  return (
    <div className='h-full'>
        <img className='w-[324px] h-[321px] object-contain' src={category.imgSrc} alt={category.title} />
        <Link className="font-np-semi-bold text-[14px] my-6" to={category.btnTitle} >
        {category.btnTitle}
        </Link>
    </div>
  )
}