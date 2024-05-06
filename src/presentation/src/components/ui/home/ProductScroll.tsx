import { CustomScroll, ProductCard } from "../..";

export const ProductScroll = () => {
  return (
    <CustomScroll horizontal>
      <ProductCard
        title="Rita long sleeve Sweater"
        store="Rita.co"
        price="29.99"
        image={require("../../../../../../assets/img/product.png")}
      />
      <ProductCard
        title="Rita long sleeve Sweater"
        store="Rita.co"
        price="29.99"
        image={require("../../../../../../assets/img/product2.png")}
      />
      <ProductCard
        title="Rita long sleeve Sweater"
        store="Rita.co"
        price="29.99"
        image={require("../../../../../../assets/img/product3.png")}
      />
    </CustomScroll>
  );
};
