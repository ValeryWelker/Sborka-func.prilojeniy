import ContentLoader from "react-content-loader";
export const ShopItemSkeleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={578}
      viewBox="0 0 100% 578"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="2" width="100%" height="478" />
      <rect x="0" y="502" rx="0" ry="0" width="100%" height="35" />
      <rect x="110" y="547" rx="0" ry="0" width="130" height="35" />
    </ContentLoader>
  );
};
