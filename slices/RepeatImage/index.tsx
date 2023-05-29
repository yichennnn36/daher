import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RepeatImage`.
 */
export type RepeatImageProps = SliceComponentProps<Content.RepeatImageSlice>;

/**
 * Component for "RepeatImage" Slices.
 */
const RepeatImage = ({ slice }: RepeatImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for repeat_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RepeatImage;
