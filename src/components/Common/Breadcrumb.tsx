import React from "react";

/**
 * Used to be a giant page-title hero ("Shop Details", "Cart", "Wishlist"...).
 * Pure template noise — every page has its own title in its own content, so
 * the duplicated card was just visual clutter.
 *
 * Reduced to an empty spacer that preserves the top offset the original
 * component provided (which compensates for the fixed `<Header />`). Every
 * existing call site keeps working — the `title` and `pages` props are
 * accepted and ignored — so the change is non-disruptive across the
 * 16 components that import this.
 */
type BreadcrumbProps = {
  title?: string;
  pages?: string[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  return (
    <div
      aria-hidden
      className="pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]"
    />
  );
};

export default Breadcrumb;
