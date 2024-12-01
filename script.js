document.getElementById("baton").addEventListener("click", function() {
    let x = parseInt(document.getElementById("x").value);
    const data = parseInt(document.getElementById("date").value);


    // картинка
    const img = document.createElement("img");
    img.src = "img/importantfile.jpg";
    img.classList.add("img-imp");
    const rh = document.getElementById("show-img");
    rh.appendChild(img);

    let cal = data / (100)
    cal = cal * x / 100;

    const text = document.createElement("h1");
    const text2 = document.createElement("h1");
    text2.textContent = "я тут прикинул";
    text.textContent = cal.toString() + "%";
    rh = document.getElementById("show-calculate");
    rh.append(text2)
    rh.append(text);
});
