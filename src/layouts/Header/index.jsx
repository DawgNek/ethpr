// components/Header.jsx
import Discord from "../../api/userInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
  faGithub, 
  faDiscord, 
  faYoutube, 
  faInstagram, 
  faSpotify,
  faTiktok,
  faLinkedin,
  faTwitch,
  faSoundcloud,
  faZhihu,
  faGratipay
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Component icon Locket tự tạo
const LocketIcon = ({ className = "", size = 20, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Khung trái tim bên ngoài */}
      <path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
        fill={color}
        stroke="none"
      />
      {/* Ổ khóa hình tròn ở giữa */}
      <circle cx="12" cy="10" r="2.5" fill="white" />
      {/* Lỗ khóa */}
      <rect x="11.2" y="10" width="1.6" height="3.5" fill={color} rx="0.8" />
      {/* Đáy của ổ khóa */}
      <rect x="10.5" y="12.5" width="3" height="1.2" fill={color} rx="0.6" />
    </svg>
  );
};

function Header() {
  const socialButtonStyle =
    "group rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 size-[42px] items-center flex justify-center text-slate-600 dark:text-slate-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-400 dark:hover:border-slate-500 hover:bg-white dark:hover:bg-slate-700";

  return (
    <div className="p-4 md:p-4 rounded-xl shadow-sm text-neutral-800 dark:text-neutral-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500">
      <Discord />
      <div className="flex mt-6 gap-3 text-xl justify-center md:justify-start flex-wrap">
        {/* Gmail */}
        <Tippy animation="scale" content="Gmail">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="mailto:koishykana@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className="group-hover:text-red-500 transition-colors" />
          </a>
        </Tippy>

        {/* Github */}
        <Tippy animation="scale" content="Github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://github.com/DawgNek"
          >
            <FontAwesomeIcon icon={faGithub} className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
          </a>
        </Tippy>

        {/* Discord */}
        <Tippy animation="scale" content="Discord">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://discord.com/users/1432610221292916867"
          >
            <FontAwesomeIcon icon={faDiscord} className="group-hover:text-[#5865F2] transition-colors" />
          </a>
        </Tippy>

        {/* Facebook */}
        <Tippy animation="scale" content="Facebook">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://www.facebook.com/ethprr"
          >
            <FontAwesomeIcon icon={faFacebook} className="group-hover:text-[#1877F2] transition-colors" />
          </a>
        </Tippy>

        {/* Instagram */}
        <Tippy animation="scale" content="Instagram">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://www.instagram.com/ethprr/"
          >
            <FontAwesomeIcon icon={faInstagram} className="group-hover:text-[#E4405F] transition-colors" />
          </a>
        </Tippy>

        {/* Spotify */}
        <Tippy animation="scale" content="Spotify">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://open.spotify.com/user/31dgnv637c6qcpqtroberudgxpdu?si=a6fe49dcfdcc4b8f"
          >
            <FontAwesomeIcon icon={faSpotify} className="group-hover:text-[#1DB954] transition-colors" />
          </a>
        </Tippy>

        {/* TikTok */}
        <Tippy animation="scale" content="TikTok">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://www.tiktok.com/@young_ethpr"
          >
            <FontAwesomeIcon icon={faTiktok} className="group-hover:text-[#000000] dark:group-hover:text-white transition-colors" />
          </a>
        </Tippy>

        {/* SoundCloud */}
        <Tippy animation="scale" content="SoundCloud">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://soundcloud.com/koishy-s-y-u"
          >
            <FontAwesomeIcon icon={faSoundcloud} className="group-hover:text-[#FF7700] transition-colors" />
          </a>
        </Tippy>

        {/* Zhihu */}
        <Tippy animation="scale" content="People's Daily (Zhihu) - 人民日报">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://www.people.com.cn/"
          >
            <FontAwesomeIcon icon={faZhihu} className="group-hover:text-[#0084FF] transition-colors" />
          </a>
        </Tippy>

        {/* 🆕 Locket - Icon trái tim có ổ khóa (tự tạo bằng SVG) */}
        <Tippy animation="scale" content="Locket">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonStyle}
            href="https://locket.cam/haidaqnn"
          >
            <FontAwesomeIcon icon={faGratipay} className="group-hover:text-[#ffb900] transition-colors" />
          </a>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;