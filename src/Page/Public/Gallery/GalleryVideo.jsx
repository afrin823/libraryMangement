import Notice from "../PublicComponent/Notice";
import SectionTitle from "../PublicComponent/SectionTitle";

const GalleryVideo = () => {
  return (
<div className="width-control   py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Latest Blog Post */}
        <div className="flex-1">
        <SectionTitle  title="Notice" />
          <div className="mt-6">
           <Notice className=""/>
          </div>
        </div>

        {/* Right Section - YouTube Video */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Check Out Our Online Tutorial</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MXnj8h5tZfw?si=E7DjlC5uiYPGeiCH"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryVideo;
