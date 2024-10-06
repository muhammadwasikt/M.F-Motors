

function ExampleCarouselImage({ imgSrc }) {
  return (
    <div className="w-[100%] h-[73vh] py-2 flex justify-center bg-primaryColor">
    <img className="w-[80%] h-[70vh]" src={imgSrc} alt="" />
    </div>
  );
}

export default ExampleCarouselImage;