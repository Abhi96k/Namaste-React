const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img"></div>
      <div className="skeleton-text skeleton-title"></div>
      <div className="skeleton-text skeleton-subtitle"></div>
      <div className="skeleton-text skeleton-rating"></div>
      <div className="skeleton-text skeleton-price"></div>
      <div className="skeleton-text skeleton-time"></div>
    </div>
  );
};

const SkeletonContainer = ({ count = 8 }) => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: count }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export { SkeletonCard, SkeletonContainer };
