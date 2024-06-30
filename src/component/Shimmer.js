const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-auto w-8/12 ">
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
      <CardShimmer />
    </div>
  )
}

const CardShimmer = () => {
  return <div className=" m-4 p-4 h-[300px] w-[200px] bg-gray-100"></div>
}

export default Shimmer
