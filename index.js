let a = 1;

function clicked(){
    if (a == 1) {
        document.getElementById("noo").innerHTML = "I said no!";
        var img = document.getElementById("img1");
        img.src = "angry2.png";
        a++;
    }
    
    else if (a == 2) {
        document.getElementById("noo").innerHTML = "pls click yes!";
        var img = document.getElementById("img1");
        img.src = "sad.png";
        a++;
    }
    
    else if (a == 3) {
        document.getElementById("noo").innerHTML = "lovey!";
        var img = document.getElementById("img1");
        img.src = "worried.png";
        a++;
    }

    else if (a == 4) {
        document.getElementById("noo").innerHTML = "I have someting for you if you click yes!";
        var img = document.getElementById("img1");
        img.src = "hugg.png";
        a++;
    }

    var button = document.getElementById("no");
    var maxWidth = window.innerWidth - button.clientWidth;
    var maxHeight = window.innerHeight - button.clientHeight;

    var newX = Math.floor(Math.random() * maxWidth);
    var newY = Math.floor(Math.random() * maxHeight);

    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
