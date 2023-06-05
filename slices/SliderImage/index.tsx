import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SliderImage`.
 */
export type SliderImageProps = SliceComponentProps<Content.SliderImageSlice>;

/**
 * Component for "SliderImage" Slices.
 */
const SliderImage = ({ slice }: SliderImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slider_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SliderImage;
