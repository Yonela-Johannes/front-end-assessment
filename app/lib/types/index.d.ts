
interface ITitle {
  title: string;
  description: string;
  btnTitle?: string;
}
interface ISection {
  description: string;
  btnTitle: string;
  bgImg: string;
  mobileBgImg: string;
}

interface ICategory {
  title: string;
  imgSrc?: string;
  btnTitle?: string;
}

interface IProduct {
  title?: string;
  imgSrc?: string;
  link?: string;
  vidSrc?: string;
  mobileVidSrc?: string;
}

export interface IData {
  title?: ITitle;
  landing: {
    header: string;
    title: string;
    description: string;
    btnTitle: string;
    vidSrc: string;
    mobileVidSrc: string;
  };
  hero: {
    header: string;
    title: string;
    description: string;
    btnTitle: string;
    bgImg?: string;
    mobileBgImg: string;
  }
  section: {
    title: string;
    description: string;
    category?: ICategory;
    categories?: ICategory[];
    product?: IProduct
    products?: IProduct[]
    elem?: IProduct | ICategory
  }

};