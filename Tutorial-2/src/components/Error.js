import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">🚫</div>
        <h1>404 - Page Not Found</h1>
        <p className="error-message">
          Oops! The page you're looking for seems to have wandered off into the
          digital wilderness. It might have been moved, deleted, or never
          existed.
        </p>

        <div className="error-actions">
          <button className="error-btn primary" onClick={handleGoHome}>
            🏠 Go to Home
          </button>
          <button className="error-btn secondary" onClick={handleGoBack}>
            ⬅️ Go Back
          </button>
        </div>

        <div className="error-help">
          <h3>💡 Here are some things you can try:</h3>
          <ul>
            <li>Check the URL for any typos</li>
            <li>Use the navigation menu above</li>
            <li>Go back to the previous page</li>
            <li>Return to the home page</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Error;
