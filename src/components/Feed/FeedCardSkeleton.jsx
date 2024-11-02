import { Skeleton } from "@mui/material";

const FeedCardSkeleton = ({ indexKey }) => {
  return (
    <div
      key={indexKey}
      className="rounded-xl shadow-box lg:w-96 w-80 bg-white p-4 flex flex-col"
    >
      <div className="flex items-center gap-2">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex items-center justify-between w-full">
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="text" width="30%" height={20} />
        </div>
      </div>

      <Skeleton variant="text" width="80%" height={30} className="mt-2" />
      <Skeleton variant="text" width="100%" height={20} className="mt-2" />

      <span className="inline-block bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded-full font-bold w-fit mt-2">
        <Skeleton variant="text" width={50} height={15} />
      </span>

      <Skeleton
        variant="rectangular"
        height={176}
        className="rounded-lg mt-4"
      />

      <div className="flex items-center justify-between text-sm text-gray-600 font-bold mt-4 -ml-1">
        <div className="flex items-center">
          <Skeleton variant="text" width={50} height={20} />
        </div>
        <Skeleton variant="text" width={30} height={20} />
      </div>

      <div className="flex items-center justify-between mt-2">
        <Skeleton variant="text" width={50} height={30} />
        <Skeleton variant="rectangular" width={30} height={30} />
      </div>
    </div>
  );
};

export default FeedCardSkeleton;
