import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery} from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery className="gallery">
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </Gallery>
  );
};
