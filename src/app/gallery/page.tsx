import { ImageList, ImageListItem } from "@mui/material";
import { Image } from "@nextui-org/react";


const itemData = [
  {
    img: 'https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Bed',
  },
  {
    img: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Books',
  },
  {
    img: 'https://images.pexels.com/photos/19010692/pexels-photo-19010692/free-photo-of-leaves-and-oranges-in-overhead-view.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Sink',
  },
  {
    img: 'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Kitchen',
  },
  {
    img: 'https://images.pexels.com/photos/2228306/pexels-photo-2228306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Blinds',
  },
  {
    img: 'https://images.pexels.com/photos/18984669/pexels-photo-18984669/free-photo-of-purple-flowers-in-the-oat-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Chairs',
  },
  {
    img: 'https://images.pexels.com/photos/18867124/pexels-photo-18867124/free-photo-of-small-red-apples-on-a-branch-in-the-orchard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Laptop',
  },
  {
    img: 'https://images.pexels.com/photos/18994151/pexels-photo-18994151/free-photo-of-sunflower-in-field.jpeg',
    title: 'Doors',
  },
  {
    img: 'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee',
  },
  {
    img: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Storage',
  },
  {
    img: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Candle',
  },
  {
    img: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee table',
  },
  {
    img: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee table',
  },
  {
    img: 'https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee table',
  },
  {
    img: 'https://images.pexels.com/photos/20994227/pexels-photo-20994227/free-photo-of-tractor-on-rural-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee table',
  },
  {
    img: 'https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee table',
  },
  {
    img: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee table',
  },
];

const Gallery = () => {
  return (
    <>
      {/* Mobile Grid */}
      <div className="py-5 px-4 sm:hidden"> 
        <ImageList variant="masonry" cols={1} gap={8} className="border-0 sm:hidden">
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Image
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      {/* SMALL (tablet) Grid */}
      <div className="py-5 px-6 hidden sm:block lg:hidden">
        <ImageList variant="masonry" cols={3} gap={8} className=" border-0">
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Image
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      {/* LARGE (laptop) Grid */}
      <div className="py-5 px-10 hidden lg:block">
        <ImageList variant="masonry" cols={4} gap={8} className="hidden border-0">
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Image
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};

export default Gallery;