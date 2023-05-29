import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Product`.
 */
export type ProductProps = SliceComponentProps<Content.ProductSlice>;

/**
 * Component for "Product" Slices.
 */
const Product = ({ slice }: ProductProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product (variation: {slice.variation}) Slices
    </section>
  );
};

export default Product;
