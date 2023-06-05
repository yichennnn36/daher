import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductTag`.
 */
export type ProductTagProps = SliceComponentProps<Content.ProductTagSlice>;

/**
 * Component for "ProductTag" Slices.
 */
const ProductTag = ({ slice }: ProductTagProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_tag (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProductTag;
