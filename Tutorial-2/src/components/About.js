import User from "./User.js";
import { aboutStyles } from "../CustomStyle/CustomStyle.js";

const About = () => {
  return (
    <div className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.aboutContent}>
        <User />
      </div>
    </div>
  );
};

export default About;
