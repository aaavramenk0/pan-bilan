import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from 'next/cache';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Get ALL Images From Cloudinary Media Library
export async function getAllImages() {
  const results = await cloudinary.api.resources();
  const { resources } = results;

  const images = resources.map((resource : any) => {
    return {
      asset_id: resource.asset_id,
      public_id: resource.public_id,
      secure_url: resource.secure_url,
      width: resource.width,
      height: resource.height
    }
  })
  revalidatePath('/')
  return { images } 
}

// Get Images From Cloudinary Media Library From GALLERY Folder
export async function getGalleryImages() {
  const results = await cloudinary.search.expression("asset_folder=gallery").execute();
  const { resources } = results;

  const images = resources.map((resource : any) => {
    return {
      asset_id: resource.asset_id,
      public_id: resource.public_id,
      secure_url: resource.secure_url,
      width: resource.width,
      height: resource.height
    }
  })
  revalidatePath('/gallery')
  return { images }

}

// Upload image to the Media Library
export async function uploadImage(formData: FormData) {
  'use server';
  const file = formData.get('image') as File;
  const arrayBuffer = await file.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)
  await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({
      folder: "gallery"
    }, function (error, result) {
      if (error) {
        reject(error);
        return
      } else {
        resolve(result)
        formData.delete('image')
      }
      
    }).end(buffer)
  })
  revalidatePath('/admin')
}