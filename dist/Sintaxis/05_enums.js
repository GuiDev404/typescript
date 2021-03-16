"use strict";
// La definicion seria identificadores constantes globales enumerados
var roles;
(function (roles) {
    roles[roles["usuario"] = 0] = "usuario";
    roles[roles["admin"] = 1] = "admin";
})(roles || (roles = {}));
const user = {
    username: '_GR',
    listMovies: ['Go!(2021)', 'Sing Street'],
    rol: roles.usuario
};
// console.log(user)
// --------------- Ejemplo 2
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["blue"] = 1] = "blue";
    colors[colors["green"] = 2] = "green";
    colors[colors["dark"] = 3] = "dark";
    colors[colors["light"] = 4] = "light";
})(colors || (colors = {}));
const preferences = {
    fontSize: 14,
    fontFamily: 'Times New Roman',
    color: colors.dark
};
const colorsList = [
    'red',
    'blue',
    'green',
    'dark',
    'light'
];
console.log(colorsList[preferences.color]);
// ----------- Ejemplo 3
// permite cambiar los valores que tomaran
var sizes;
(function (sizes) {
    sizes[sizes["sm"] = 5] = "sm";
    sizes[sizes["md"] = 6] = "md";
    sizes[sizes["lg"] = 15] = "lg";
    sizes[sizes["xl"] = 16] = "xl";
})(sizes || (sizes = {}));
var colorsHex;
(function (colorsHex) {
    colorsHex["red"] = "#ff0000";
    colorsHex["blue"] = "#0000ff";
    colorsHex["green"] = "#00ff00";
    colorsHex["dark"] = "#000000";
})(colorsHex || (colorsHex = {}));
console.log(colorsHex);
console.log(colorsHex.blue);
