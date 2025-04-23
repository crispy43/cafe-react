const WIDTH = 250;

export interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

const GallerySection = ({ images }: Props) => {
  return (
    <section id="gallery">
      <h2>갤러리</h2>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          width={WIDTH}
        />
      ))}
    </section>
  );
}

export default GallerySection;
