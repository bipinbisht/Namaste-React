const Card = (prop) => {
  const URL =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
  const {
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    name,
    areaName,
    sla,
  } = prop?.item?.info
  return (
    <div className=" m-4 p-4 w-[215px]  bg-gray-100 hover:bg-gray-200">
      <div className="h-1/2">
        <img
          className="rounded-lg "
          src={URL + cloudinaryImageId}
          alt="RES_LOGO"
        />
      </div>
      <div className="h-1/4 text-pretty">
        <h2 className="font-bold py-4 text-xl">{name}</h2>
        <h4 className="font-bold">{avgRating} stars</h4>
        <h4 className="text-wrap">{cuisines.join(' , ')}</h4>
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  )
}
export default Card
