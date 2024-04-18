const api_key = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
const api_secret = process.env.CLOUDINARY_API_SECRET
const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

// Get ALL Images From Cloudinary Media Library
export async function getAllImages() {
    const results = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/resources/image`, {
      headers: {
        Authorization: `Basic ${Buffer.from(api_key + ':' + api_secret).toString('base64')}`
      }
    }).then(res => res.json());
  
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
  
    return { images };
}

// Get Images From Cloudinary Media Library From GALLERY Folder
export async function getGalleryImages() {
  const results = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/resources/by_asset_folder?asset_folder=gallery`, {
      headers: {
        Authorization: `Basic ${Buffer.from(api_key + ':' + api_secret).toString('base64')}`
      }
    }).then(res => res.json());

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

  return { images };
}