import { getAllImages, getGalleryImages } from "@/lib/cloudinary";
import { ImageList, ImageListItem } from "@mui/material";
import { Image } from "@nextui-org/react";

export default async function Gallery() {
  const { images } = await getAllImages();
  console.log(images);

  const ImagesGrid = () => {
    return (
      <>
        {images.map((image:any) => (
          <ImageListItem key={image.asset_id}>
            <Image
              src={image.secure_url}
              alt={image.public_id}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </>
    )
  }
  
  return (
    <>
      {/* Mobile Grid */}
      <div className="py-5 px-4 sm:hidden"> 
        <ImageList variant="masonry" cols={1} gap={8} className="border-0 sm:hidden">
          {ImagesGrid()}
        </ImageList>
      </div>

      {/* SMALL (tablet) Grid */}
      <div className="py-5 px-6 hidden sm:block lg:hidden">
        <ImageList variant="masonry" cols={3} gap={8} className="border-0">
          {ImagesGrid()}
        </ImageList>
      </div>

      {/* LARGE (laptop) Grid */}
      <div className="py-5 px-10 hidden lg:block">
        <ImageList variant="masonry" cols={4} gap={8} className="hidden border-0">
          {ImagesGrid()}
        </ImageList>
      </div>
    </>
  );
};
