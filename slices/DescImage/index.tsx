import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DescImage`.
 */
export type DescImageProps = SliceComponentProps<Content.DescImageSlice>;

/**
 * Component for "DescImage" Slices.
 */
const DescImage = ({ slice }: DescImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for desc_image (variation: {slice.variation}) Slices
    </section>
  );
};

export default DescImage;
