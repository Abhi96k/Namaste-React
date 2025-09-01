import { useEffect, useState } from "react";
import { userProfileStyles } from "../CustomStyle/CustomStyle";

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
    <div className={userProfileStyles.userProfile}>
      {githubdata && (
        <div className={userProfileStyles.profileCard}>
          <div className={userProfileStyles.profileHeader}>
            <img
              src={githubdata.avatar_url}
              alt={githubdata.name}
              className={userProfileStyles.avatar}
            />
            <div className={userProfileStyles.profileInfo}>
              <h1 className={userProfileStyles.profileName}>
                {githubdata.name}
              </h1>
              <p className={userProfileStyles.username}>@{githubdata.login}</p>
              <p className={userProfileStyles.bio}>{githubdata.bio}</p>
            </div>
          </div>

          <div className={userProfileStyles.profileDetails}>
            <div className={userProfileStyles.detailItem}>
              <span className={userProfileStyles.infoIcon}>📍</span>
              <span>{githubdata.location}</span>
            </div>
            <div className={userProfileStyles.detailItem}>
              <span className={userProfileStyles.infoIcon}>🏢</span>
              <span>{githubdata.company}</span>
            </div>
            <div className={userProfileStyles.detailItem}>
              <span className={userProfileStyles.infoIcon}>🔗</span>
              <a
                href={githubdata.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-200"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className={userProfileStyles.stats}>
            <div className={userProfileStyles.stat}>
              <span className={userProfileStyles.statNumber}>
                {githubdata.public_repos}
              </span>
              <span className={userProfileStyles.statLabel}>Repositories</span>
            </div>
            <div className={userProfileStyles.stat}>
              <span className={userProfileStyles.statNumber}>
                {githubdata.followers}
              </span>
              <span className={userProfileStyles.statLabel}>Followers</span>
            </div>
            <div className={userProfileStyles.stat}>
              <span className={userProfileStyles.statNumber}>
                {githubdata.following}
              </span>
              <span className={userProfileStyles.statLabel}>Following</span>
            </div>
          </div>

          <div className={userProfileStyles.profileActions}>
            <a
              href={githubdata.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={userProfileStyles.githubBtn}
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
