let db;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true});
};

request.onsuccess = function (event) {
    db = event.target.result;
     if (navigator.onLine) {
         checkDatabase();
     }
};

request.onerror = function(event) {
    console.log("No connection" + event.target.errorCode)
}

function checkDatabase() {
    const transaction = db.transaction(["pending"], "readwrite")
}
