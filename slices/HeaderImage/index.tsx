import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeaderImage`.
 */
export type HeaderImageProps = SliceComponentProps<Content.HeaderImageSlice>;

/**
 * Component for "HeaderImage" Slices.
 */
const HeaderImage = ({ slice }: HeaderImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for header_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeaderImage;
