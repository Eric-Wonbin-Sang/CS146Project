function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}

function likeImage(imgNum)
{
    var likes = document.getElementsByClassName("numlikes");
    var buttons = document.getElementsByClassName("like_button");
    
    
    if (buttons[imgNum].src.includes("images/general/liked_pc.png")){
        
        likes[imgNum].innerHTML = parseInt(likes[imgNum].textContent) - 1;
        buttons[imgNum].src = "images/general/unliked_pc.png";
        
    }
    
    else
    {
        
        likes[imgNum].innerHTML = parseInt(likes[imgNum].textContent) + 1;
        buttons[imgNum].src = "images/general/liked_pc.png";
        
    }
    
}
