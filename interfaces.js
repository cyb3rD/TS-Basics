var interfaces;
(function (interfaces) {
    var greetingString;
    var myDad = {
        name: "Oleg",
        surname: "Ignatyev"
    };
    greetingString = function (man) {
        console.log(" Hi, " + man.name + " " + man.surname + "!");
    };
    greetingString(myDad);
})(interfaces || (interfaces = {}));
//# sourceMappingURL=interfaces.js.map