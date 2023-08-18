export function millisToMinutesAndSecs(millis){
    const minutes = Math.floor(millis / 60000);
    const sec = ((millis % 60000) / 1000).toFixed(0);
    return sec == 60 ? minutes + 1 + ":00" : minutes + ":" + (sec < 10 ? "0" : "") + sec; 
}