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
  faInstagram, 
  faSpotify,
  faTiktok,
  faSoundcloud,
  faZhihu,
  faGratipay
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
            href="https://www.instagram.com/lil_ethpr/"
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