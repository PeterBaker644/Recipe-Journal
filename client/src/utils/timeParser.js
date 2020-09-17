export default function timeParser(mode, t1, t2) {
    switch (mode) {
        case "HMS":
            let t = Number(t1);
            let h = Math.floor(t / 3600);
            let m = Math.floor(t % 3600 / 60);
            let s = Math.floor(t % 3600 % 60);

            const hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs ") : "";
            const mDisplay = m > 0 ? m + (m == 1 ? " min " : " mins ") : "";
            const sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "";
            return (hDisplay + mDisplay + sDisplay);
        case "SEC":
            const seconds = (Number(t1) * 3600) + (Number(t2) * 60);
            return seconds;
    }

}