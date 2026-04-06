const CategoryCardSkeleton = () => {
  return (
    <div className="w-40 h-72 bg-white rounded-lg border-[0.3px] border-gray-300 p-4 flex flex-col items-center animate-pulse">
      
      {/* Image */}
      <div className="pb-5">
        <div className="h-44 w-32 bg-gray-200 rounded-lg" />
      </div>

      {/* Title */}
      <div className="h-4 w-24 bg-gray-200 rounded mb-3" />

      {/* Count */}
      <div className="h-3 w-20 bg-gray-200 rounded-full" />
    </div>
  );
};

export default CategoryCardSkeleton;