import Genshin_Impact_App from "../../assets/imgs/games/Genshin_Impact_App.png";
import vscode from "../../assets/imgs/games/all/vscode.png";
import zingspeedmobile from "../../assets/imgs/games/all/zingspeed.jpg";

export const t = {
    gamesTitle: "Games",
    playedGames: "Games I Played...",
    topGames: "Top Played",
    allGames: "All",
    gameEvents: "Game Events",
    activeCodes: "Active Codes",
    inactiveCodes: "Inactive Codes",
    noActiveCodes: "No active codes available",
    noInactiveCodes: "No inactive codes available",
    noEvents: "No events available",
    errorLoading: "❌ Error loading data, please try again",
    copied: "Copied:",
    viewFull: "View full event details",
    noDescription: "This event has no detailed description.",
    events: "Events",
    previous: "Previous",
    next: "Next",
};

export const FALLBACK_IMAGE = "https://via.placeholder.com/520x300?text=No Image";

export const GAME_THEMES = {
    genshin: "from-blue-50 via-cyan-50/30 to-white dark:from-slate-900 dark:via-cyan-900/10 dark:to-slate-900",
    starrail: "from-indigo-50 via-purple-50/30 to-white dark:from-slate-900 dark:via-indigo-900/10 dark:to-slate-900",
    zingspeedmobile: "from-orange-50 via-amber-50/30 to-white dark:from-slate-900 dark:via-orange-900/10 dark:to-slate-900",
    default: "from-slate-50 via-slate-100/30 to-white dark:from-slate-900 dark:via-slate-800/10 dark:to-slate-900"
};

export const ACTIVE_COLORS = {
    genshin: "bg-cyan-600 shadow-cyan-200/50 dark:shadow-cyan-900/50",
    starrail: "bg-indigo-600 shadow-indigo-200/50 dark:shadow-indigo-900/50",
    zingspeedmobile: "bg-orange-600 shadow-orange-200/50 dark:shadow-orange-900/50",
    default: "bg-slate-800 shadow-slate-300/50 dark:shadow-slate-900/50"
};

export const TOP_GAMES = [
    { name: "Zing Speed Mobile", time: 6, img: zingspeedmobile, url: "https://zingspeedmobile.com/" },
    { name: "VSCode", time: 524, img: vscode, url: "https://code.visualstudio.com/" },
];

export const ALL_GAMES = [
    { name: "Genshin Impact", time: 968, img: Genshin_Impact_App, url: "https://genshin.hoyoverse.com/" },                    
    { name: "Zing Speed Mobile", time: 6, img: zingspeedmobile, url: "https://zingspeedmobile.com/" },
    { name: "VSCode", time: 524, img: vscode, url: "https://code.visualstudio.com/" },
];

export const GAME_SELECTOR_ITEMS = [
    { id: 'genshin', icon: Genshin_Impact_App, name: 'Genshin' },
];

export const TABS = [
    { id: 'news', name: 'Events/News' },
    { id: 'codes', name: 'Codes' }
];
