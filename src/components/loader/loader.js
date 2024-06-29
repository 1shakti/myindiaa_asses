import { InfinitySpin } from "react-loader-spinner";

export const InfinitySpinLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <InfinitySpin
        visible={true}
        width="200"
        color="#f47e60"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
