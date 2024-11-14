import { Link } from "@remix-run/react";

type Props = {
  product: Array<{
    imgSrc: string;
    title: string;
  }>;
};

export default function GridCard({ product }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {/* First column with one large image taking 2 rows */}
      <div className="col-span-2 row-span-2">
        <img
          className="w-full h-full object-cover"
          src={product[0].imgSrc}
          alt={product[0].title}
        />
        <Link
          className="font-np-semi-bold text-[14px] my-6 block"
          to={product[0].title}
        >
          {product[0].title}
        </Link>
      </div>

      {/* Second column with two smaller images, stacked */}
      <div className="col-span-1 row-span-2 gap-4 flex flex-col">
        <div>
          <img
            className="w-full h-full object-cover"
            src={product[1].imgSrc}
            alt={product[1].title}
          />
          <Link
            className="font-np-semi-bold text-[14px] my-6 block"
            to={product[1].title}
          >
            {product[1].title}
          </Link>
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={product[2].imgSrc}
            alt={product[2].title}
          />
          <Link
            className="font-np-semi-bold text-[14px] my-6 block"
            to={product[2].title}
          >
            {product[2].title}
          </Link>
        </div>
      </div>

      {/* Third column with two smaller images, side-by-side */}
      <div className="col-span-1 row-span-2 gap-4 flex flex-col">
        <div className="flex-1">
          <img
            className="w-full h-full object-cover"
            src={product[3].imgSrc}
            alt={product[3].title}
          />
          <Link
            className="font-np-semi-bold text-[14px] my-6 block"
            to={product[3].title}
          >
            {product[3].title}
          </Link>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-full object-cover"
            src={product[4].imgSrc}
            alt={product[4].title}
          />
          <Link
            className="font-np-semi-bold text-[14px] my-6 block"
            to={product[4].title}
          >
            {product[4].title}
          </Link>
        </div>
      </div>
    </div>
  );
}