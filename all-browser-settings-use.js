document.getElementById('notifyBtn').addEventListener('click', () => {
    // Check if notifications are supported
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
        return;
    }

    // If permission already granted, show the notification
    if (Notification.permission === "granted") {
        sendNotification();
    }
    // If permission not yet granted, ask for it
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            sendNotification();
        } else {
            alert("Notifications are blocked.");
        }
        });
    } else {
        alert("You have blocked notifications. Please enable them in browser settings.");
    }
    });

    // Function to send the notification
    function sendNotification() {
    const notification = new Notification("Hello there!", {
        body: "This is your test browser notification 😊",
        icon: "https://cdn-icons-png.flaticon.com/512/1827/1827340.png" // optional icon
    });

    // Optional: add click behavior
    notification.onclick = () => {
        window.focus();
        // window.location.href = 'https://www.google.com/';
    };
}

console.info("Browser informatie:");
console.info("===================");

console.log(navigator.userAgent);      // Browser + OS info
console.log(navigator.language);       // e.g. "en-US"
console.log(navigator.onLine);         // true if connected to internet
console.log(window.innerWidth);        // viewport width
console.log(window.innerHeight);       // viewport height
console.log(screen.width, screen.height); // screen resolution

if ('connection' in navigator) {
    console.log(navigator.connection.effectiveType); // e.g. '4g', 'wifi'
    console.log(navigator.connection.downlink);      // Mbps estimate
}

navigator.geolocation.getCurrentPosition(
    position => {
        console.log(position.coords.latitude, position.coords.longitude);
    },
    error => console.error(error),
    { enableHighAccuracy: true }
);

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
.then(stream => console.log("Camera access granted!"))
.catch(err => console.error("Access denied:", err));

if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
        console.log(`Battery level: ${battery.level * 100}%`);
    });
}

window.addEventListener('deviceorientation', event => {
    console.log(event.alpha, event.beta, event.gamma);
});

navigator.permissions.query({ name: 'notifications' })
.then(result => console.log(result.state)); // "granted", "denied", or "prompt"
