console.log("it works");

let updatedCookie = "user=John; max-age=3600";
document.cookie = updatedCookie;

console.log(document.cookie);
