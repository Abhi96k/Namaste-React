import { skeletonStyles } from "../CustomStyle/CustomStyle.js";

const SkeletonCard = () => {
  return (
    <div className={skeletonStyles.skeletonCard}>
      <div className={skeletonStyles.skeletonImg}></div>
      <div
        className={`${skeletonStyles.skeletonText} ${skeletonStyles.skeletonTitle}`}
      ></div>
      <div
        className={`${skeletonStyles.skeletonText} ${skeletonStyles.skeletonSubtitle}`}
      ></div>
      <div
        className={`${skeletonStyles.skeletonText} ${skeletonStyles.skeletonRating}`}
      ></div>
      <div
        className={`${skeletonStyles.skeletonText} ${skeletonStyles.skeletonPrice}`}
      ></div>
      <div
        className={`${skeletonStyles.skeletonText} ${skeletonStyles.skeletonTime}`}
      ></div>
    </div>
  );
};

const SkeletonContainer = ({ count = 8 }) => {
  return (
    <div className={skeletonStyles.skeletonContainer}>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export { SkeletonCard, SkeletonContainer };
