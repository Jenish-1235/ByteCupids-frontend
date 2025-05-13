// Place this above <TopicPageHeader ... /> in your TopicPage component
import { useNavigate } from "react-router-dom";

const TopicPageMobileBack: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <button
      className="topic-page-mobile-back"
      onClick={() => navigate(-1)}
      aria-label="Back to Home"
    >
      <span className="sidebar__icon">
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
          <path
            d="M3 9.5L10 4L17 9.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 17V10.5H15V17"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="topic-page-mobile-back-label">Back</span>
    </button>
  );
};

export default TopicPageMobileBack;