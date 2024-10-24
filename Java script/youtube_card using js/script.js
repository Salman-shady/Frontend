function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    let monstr;

    if (views < 1000 && monthsOld < 12) {
        viewStr = views;
        monstr = monthsOld;
    } else if (views > 1000000 && monthsOld > 12) { // <-- Here's the correction
        viewStr = views / 1000000 + "M";
        monstr = Math.floor(monthsOld / 12) + " year";
    } else {
        viewStr = views / 1000 + "K";
        monstr = monthsOld;
    }

    if (monthsOld < 12) {
        monstr = monthsOld;
    } else {
        monstr = Math.floor(monthsOld / 12) + " year";
    }

    let html = `<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>s
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewStr} views . ${monstr} ${monstr > 1 ? 'years' : 'year'} ago</p>
        </div> 
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

// Example usage of the createCard function
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
