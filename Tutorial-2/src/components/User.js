import { useEffect, useState } from "react";

const User = () => {
  const [githubdata, setGithubData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://api.github.com/users/Abhi96k");
    const data = await response.json();
    setGithubData(data);
  };

  return (
    <div className="user-profile">
      {githubdata && (
        <div className="profile-card">
          <div className="profile-header">
            <img
              src={githubdata.avatar_url}
              alt={githubdata.name}
              className="avatar"
            />
            <div className="profile-info">
              <h1 className="name">{githubdata.name}</h1>
              <p className="username">@{githubdata.login}</p>
              <p className="bio">{githubdata.bio}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-item">
              <span className="icon">📍</span>
              <span>{githubdata.location}</span>
            </div>
            <div className="detail-item">
              <span className="icon">🏢</span>
              <span>{githubdata.company}</span>
            </div>
            <div className="detail-item">
              <span className="icon">🔗</span>
              <a
                href={githubdata.blog}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <span className="stat-number">{githubdata.public_repos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat">
              <span className="stat-number">{githubdata.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-number">{githubdata.following}</span>
              <span className="stat-label">Following</span>
            </div>
          </div>

          <div className="profile-actions">
            <a
              href={githubdata.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default User;
