function closeReview() {
    document.getElementById("review-popup").style.display = "";
}
function showReviews() {
    document.getElementById("review-popup").style.display = "flex";
}


function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('uploaded-image');

    var reader = new FileReader();
    reader.onload = function () {
        preview.src = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
}

function openLeaveMessage() {
    document.getElementById("messageUs").style.display = "flex";
    document.getElementById("sidebar-container").style.display ="";
}
function closeMessages() {
    document.getElementById("messageUs").style.display = "none";
}
function showFirstDropdown() {
   if (document.getElementById("first-dropdown").style.display === "") {
     document.getElementById("first-dropdown").style.display = "block";
     document.getElementById("icon1").classList.add("rotate");
   } else {
    document.getElementById("first-dropdown").style.display = "";
    document.getElementById("icon1").classList.remove("rotate");
   }
}
function showSecondDropdown() {
    if (document.getElementById("second-dropdown").style.display === "") {
        document.getElementById("second-dropdown").style.display = "block"; 
        document.getElementById("icon2").classList.add("rotate");
    } else {
       document.getElementById("second-dropdown").style.display = "";
       document.getElementById("icon2").classList.remove("rotate");
    }
}
function showMessageLinks() {
    if (document.getElementById("cont-content").style.display === "") {
        document.getElementById("cont-content").style.display = "block"; 
        document.getElementById("icon3").classList.add("rotate");
        
    } else {
       document.getElementById("cont-content").style.display = "none";
       document.getElementById("icon3").classList.remove("rotate");
    }
}
function showLinks() {
    if (document.getElementById("link-socials").style.display === "") {
        document.getElementById("link-socials").style.display = "block"; 
        document.getElementById("icon4").classList.add("rotate");
    } else {
       document.getElementById("link-socials").style.display = "";
       document.getElementById("icon4").classList.remove("rotate");
    }
}
function showsidebar() {
    document.getElementById("sidebar-container").style.display = "block";
}
function hidesidebar() {
    document.getElementById("sidebar-container").style.display = "";
}

function showServices() {
    window.location.href = "services.html";
}

function openAbout() {
    window.location.href = "learnaboutus.html";
}
function previewImage(event) {
    var image = document.getElementById('uploaded-image');
    image.src = URL.createObjectURL(event.target.files[0]);
}