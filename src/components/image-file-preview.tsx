import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

export const ImageFilePreviewVariants = tv({
  base: `rounded-lg overflow-hidden`,
});

export const ImageFilePreviewImageVariants = tv({
  base: `w-full h-full object-cover`,
});

interface ImageFilePreviewProps extends ComponentProps<"img"> {
  imageClassName?: string;
}

export default function ImageFilePreview({
  className,
  imageClassName,
  ...props
}: ImageFilePreviewProps) {
  return (
    <div className={ImageFilePreviewVariants({ className })}>
      <img
        className={ImageFilePreviewImageVariants({ className: imageClassName })}
        {...props}
      />
    </div>
  );
}
