const titleStyle =
  "text-xl font-semibold mb-3 text-gray-800 group-hover:underline transition-all duration-500";

const GalleryCard = ({ gallery, handleClick, i }) => {
  return (
    <section onClick={() => handleClick(i)} className="width-control ">
      <div className="group rounded-md relative overflow-hidden shadow-md flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all duration-500">
        <img
          src={gallery?.singleImage}
          alt={gallery?.title}
          className="object-cover w-full h-56  "
        />
        <div className="p-3 bg-natural">
          <h3 className={`${titleStyle}`}>{gallery?.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {gallery?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryCard;
