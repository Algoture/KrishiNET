const RecomSkeleton = () => {
  return (
    <div className="w-full flex gap-5 py-6 flex-wrap items-center justify-center">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="h-full max-w-sm w-[21rem] bg-white shadow-box rounded-lg p-5 animate-pulse"
        >
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center justify-center">
              <div className="animate-pulse w-20 h-20 bg-gray-300 rounded-full" />
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-1" />
            <div className="flex justify-between text-gray-600 text-base">
              <div className="flex items-center justify-center">
                <div className="animate-pulse w-24 h-4 bg-gray-300 rounded" />
              </div>
              <div className="animate-pulse w-12 h-4 bg-gray-300 rounded" />
            </div>
            <div className="flex">
              <div className="flex items-center">
                <div className="animate-pulse w-16 h-4 bg-gray-300 rounded mr-1" />
                <div className="animate-pulse w-8 h-4 bg-gray-300 rounded" />
              </div>
            </div>
            <div className="mt-3">
              <div className="animate-pulse w-full h-4 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecomSkeleton;
