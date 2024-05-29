import Gallery from "@/app/gallery/page";
import { uploadImage } from "@/lib/cloudinary";


export default function AdminGallery() {
  
  return (
    <div>
      <div className="max-w-[90vw] m-auto bg-slate-300 bg-opacity-55 p-5">
        <h2 className="font-bold text-2xl"> Завантажити нове фото в галерею </h2>
        <form action={uploadImage}>
          <input type="file" name="image" id="image"  className="my-4"/>
          <br />
          <input type="submit" value="Завантажити фото" className=" border-1 border-black p-2"/>
        </form>
      </div>
      
      
      <Gallery />
    </div>
  );
}