import ContentLoader from "react-content-loader";

export const MainSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={500}
      viewBox="0 0 100% 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ marginTop: "70px" }}
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="80" />
      <rect x="0" y="100" rx="2" ry="2" width="500" height="400" />
      <rect x="650" y="100" rx="2" ry="2" width="220" height="40" />
      <rect x="650" y="200" rx="2" ry="2" width="220" height="40" />
      <rect x="650" y="300" rx="2" ry="2" width="220" height="40" />
      <rect x="650" y="440" rx="2" ry="2" width="220" height="60" />
    </ContentLoader>
  );
};
