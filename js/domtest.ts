export function toggleClassIfExists(id: string, oldClass: string, newClass: string, toggle?: boolean) {

	var d = document.getElementById(id);

	if (hasClass(d, oldClass)) {
		toggleClassWithElement(d, oldClass, newClass);
	} else if (toggle) {
		toggleClassWithElement(d, newClass, oldClass);
	}
}

interface classFunc {
  (id: string, cls: string): void;
}

export var removeClass: classFunc = function(id: string, cls: string) {
	var d = document.getElementById(id);
	d.className = d.className.replace(cls, "");
}

export var addClass: classFunc = function(id: string, cls: string) {
	var d = document.getElementById(id);
	d.className = d.className.replace(cls, ""); // first remove the class name if that already exists
	d.className = d.className + ' ' + cls; // adding new class name
}

export function toggleClass(id: string, oldClass: string, newClass: string) {
	var d = document.getElementById(id);
	toggleClassWithElement(d, oldClass, newClass);
}

export function toggleClassWithElement(element: HTMLElement, oldClass: string, newClass: string) {
	element.className = element.className.replace(oldClass, "");
	element.className = element.className.replace(newClass, ""); // first remove the class name if that already exists
	element.className = element.className + ' ' + newClass; // adding new class name	
}

export function hasClass(element: HTMLElement, cls: string) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

