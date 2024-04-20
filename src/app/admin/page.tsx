import { getGalleryImages, uploadImage } from "@/lib/cloudinary";
import Gallery from "../gallery/page";

export default async function Admin() {
    const { images } = await getGalleryImages();
    
    return (
        <>
            <div className="max-w-[1200px] m-auto">
                <h2 className="text-center font-bold text-3xl mt-5">Адміністративна панель управління</h2>

                <h3 className="pl-6 text-xl font-semibold mb-2">Додати фотографії до галереї</h3>
                <form action={uploadImage}  className="">
                    <input type="file" name="image" id="image" /> <br />
                    <input type="submit" value="Submit" className="border-1 border-black cursor-pointer rounded-full px-5 py-2 mt-3" />
                </form>

                <h3>Фотографії на сайті: </h3>
                <Gallery />
            </div>
            
            
        
        </>
    )
}