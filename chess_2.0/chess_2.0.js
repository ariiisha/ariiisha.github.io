for (var i = 1; i <= 8; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    for (var j = 1; j <= 8; j++) {
        var cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        if ((j+i)%2 === 1) {
            cell.setAttribute("class", "cell cell_black");
        }
        row.appendChild(cell);
    }
    document.getElementById("main").appendChild(row);
}