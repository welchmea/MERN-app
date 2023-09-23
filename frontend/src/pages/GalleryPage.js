import React from 'react';
import ImageGallery from 'react-image-gallery';

const pictures = [
  
    {
      original: 'frontend/public/images/black-white-mount-hood-summit.jpeg',
      thumbnail: 'frontend/public/images/black-white-mount-hood-summit.jpeg',
      description: `Black and white image of Mount Hood (2020)`,
      originalHeight: '450px',
    },
    {
      original: 'frontend/public/images/blue-sky-with-clouds.jpeg',
      thumbnail: 'frontend/public/images/blue-sky-with-clouds.jpeg',
      description: `Blue Sky in Washington State (2021)`,
      originalHeight: '450px',
    },
    {
      original: 'frontend/public/images/enchantments-leavenworth-colchuck-lake.jpeg',
      thumbnail: 'frontend/public/images/enchantments-leavenworth-colchuck-lake.jpeg',
      description: `Enchantments Forest (2021)`,
      originalHeight: '450px',
    },
    {
      original: 'frontend/public/images/iceland-coastline-winter-snow-sunset-2.jpeg',
      thumbnail: 'frontend/public/images/iceland-coastline-winter-snow-sunset-2.jpeg',
      description: `Iceland coastline in the winter (2019)`,
      originalHeight: '450px',
    },
    {
      original: 'frontend/public/images/iceland-kirkjufell-western-peninsula-dusk-.jpeg',
      thumbnail: 'frontend/public/images/iceland-kirkjufell-western-peninsula-dusk-.jpeg',
      description: `Iceland Kirkjufell Mountain (2019)`,
      originalHeight: '450px',
    },
    {
      original: 'frontend/public/images/washington-state-winter-sunset-airplane-view.jpeg',
      thumbnail: 'frontend/public/images/washington-state-winter-sunset-airplane-view.jpeg',
      description: `Sunset from an airplane (2019)`,
      originalHeight: '450px',
    },
    {
      original: 'frontend/public/images/vietnam-water-buffalo-rice-terraces.jpeg',
      thumbnail: 'frontend/public/images/vietnam-water-buffalo-rice-terraces.jpeg',
      description: `Water Buffalo on rice terraces (2018)`,
      originalHeight: '450px',
    },
    {
      original: 'frontend/public/images/vietnam-homestay-locals-carrying-wood-cooking-fire.jpeg',
      thumbnail: 'frontend/public/images/vietnam-homestay-locals-carrying-wood-cooking-fire.jpeg',
      description: `Vietnam Spring (2018)`,
      originalHeight: '450px',
    },
    {
      original: 'frontend/public/images/red-rose-closeup-water-drops.jpeg',
      thumbnail: 'frontend/public/images/red-rose-closeup-water-drops.jpeg',
      description: `Red Roses (2022)`,
      originalHeight: '450px',
    },

    {
      original: 'frontend/public/images/mount-rainier-backcountry-snowy-summit-summer.jpeg',
      thumbnail: 'frontend/public/images/mount-rainier-backcountry-snowy-summit-summer.jpeg',
      description: `Mount Rainier backcountry (2018)`,
      originalHeight: '450px',
    },
]
 function GalleryPage() {
    return (
        <>
        <h2>Gallery</h2>
        <h3><p>A collection of photos displayed using React image gallery import.</p></h3>
        <article>
              <div className ="image-gallery">
              <ImageGallery items={pictures} />
              </div>
        </article>
        </>
    );
}
export default GalleryPage;