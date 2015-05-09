function toggleClassIfExists(id, oldClass, newClass, toggle) {
    var d = document.getElementById(id);
    if (hasClass(d, oldClass)) {
        toggleClassWithElement(d, oldClass, newClass);
    }
    else if (toggle) {
        toggleClassWithElement(d, newClass, oldClass);
    }
}
exports.toggleClassIfExists = toggleClassIfExists;
exports.removeClass = function (id, cls) {
    var d = document.getElementById(id);
    d.className = d.className.replace(cls, "");
};
exports.addClass = function (id, cls) {
    var d = document.getElementById(id);
    d.className = d.className.replace(cls, ""); // first remove the class name if that already exists
    d.className = d.className + ' ' + cls; // adding new class name
};
function toggleClass(id, oldClass, newClass) {
    var d = document.getElementById(id);
    toggleClassWithElement(d, oldClass, newClass);
}
exports.toggleClass = toggleClass;
function toggleClassWithElement(element, oldClass, newClass) {
    element.className = element.className.replace(oldClass, "");
    element.className = element.className.replace(newClass, ""); // first remove the class name if that already exists
    element.className = element.className + ' ' + newClass; // adding new class name	
}
exports.toggleClassWithElement = toggleClassWithElement;
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
exports.hasClass = hasClass;
