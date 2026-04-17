import GalleryAbout from "../../Utils/GalleryAbout";

export default function Gallery() {
  return (
    <>
      <h1 className="text-4xl font-1 font-black text-center tracking-tight mb-2 mt-16">
        Gallery
      </h1>
      <div className="flex">
        <div className="flex w-[100%] md:w-2/3">
          <GalleryAbout size="large" pos="1" />
        </div>
        <div className="hidden md:flex flex-col w-1/3">
          <GalleryAbout size="small" pos="2" />
          <GalleryAbout size="small" pos="3" />
        </div>
      </div>
    </>
  );
}
