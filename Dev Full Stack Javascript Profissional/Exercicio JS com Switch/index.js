var distanceInLY;
var choseOption;

while (isNaN(distanceInLY)) {
    distanceInLY = prompt("Infome a distância em anos luz!");
}

while (isNaN(choseOption)) {
    choseOption = prompt("Escolha uma opção de conversão:\n1 - Parsec (pc)\n2 - Unidade astronônima (AU)\n3 - Quilômetros (km)");
}
alert(choseOption);
switch (choseOption) {
    case "1":
        alert("Distância em anos luz: " + distanceInLY + "\n\nDistância em Parsec (pc)\n" + distanceInLY * 0.306601);
        break;
    case "2":
        alert("Distância em anos luz: " + distanceInLY + "\n\nDistância em Unidade astronônima (AU)\n" + distanceInLY * 63241.1);
        break;
    case "3":
        alert("Distância em anos luz: " + distanceInLY + "\n\nQuilômetros (km)\n" + distanceInLY * 9.5 * Math.pow(10, 12));
        break;

    default:
        break;
}