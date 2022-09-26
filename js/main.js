window.addEventListener("load", function(){
    truncateText()
});
function truncateText(){
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for (var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;
        var newText = truncateString(text, 30);
        cardList[i].innerHTML = newText;
    }
}
function truncateString(str, num){
    if(str.length > num){
        return str.slice(0, num) + " ...";
    }
    else{
        return str;
    }
}

// Open Toggle Button
var toggleBtn = document.querySelector('.sidebarMode__button');
var sidebarMode = document.querySelector('.sidebarMode');
toggleBtn.addEventListener('click', function(){
    sidebarMode.classList.toggle('opened');
});

//Switch button
var switchBtn = document.querySelector("#checkbox");
switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode');
});