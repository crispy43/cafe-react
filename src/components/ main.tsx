import ContactSection from "./contact-section";
import GallerySection from "./gallery-section";
import IntroSection from "./intro-section";
import MenuSection from "./menu-section";

import type { Props as ImageSectionProps } from "./gallery-section";
import type { Props as MenuSectionProps } from "./menu-section";

interface Props {
  images: ImageSectionProps["images"];
  menu: MenuSectionProps["menu"];
}

const Main = ({ images, menu }: Props) => {
  return (
    <main>
      <IntroSection />
      <MenuSection menu={menu} />
      <GallerySection images={images} />
      <ContactSection />
    </main>
  );
}

export default Main;
