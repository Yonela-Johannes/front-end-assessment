declare type ProductPageProps = {
    products: ProductEdge[];
    handle: string;
    initialColourIndex: number;
    handleCurrentIndex: (index: number) => void;
    currentProduct: ProductEdge;
    upsellProducts?: UnbxdProduct[];
  };


  export interface ITitle {
    title: string;
    description: string
  }