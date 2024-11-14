import { Link } from "@remix-run/react"
import { FC } from "react"

const Card: FC = ({ elem }) => {
  return (
    <div className='h-full w-full'>
        <img className='h-[230px] w-[230px] lg:w-[324px] lg:h-[321px] object-contain' src={elem.imgSrc} alt={elem.title} />
        <Link className="hidden lg:block font-np-semi-bold text-[14px] my-6" to={elem.btnTitle} >
        {elem.btnTitle}
        </Link>
    </div>
  )
}

export default Card