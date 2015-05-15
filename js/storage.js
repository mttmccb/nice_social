function saveStorage( key, value ) {
    if ( !key || !value ) { return false; }
    if ( value === null ) { return false; }
    if ( hasStorage() ) { localStorage.setItem( key, value ); } else { window.store[key] = value; }
}
function readStorage( key ) {
    if ( !key ) { return false; }
    if ( hasStorage() ) { return localStorage.getItem(key) || false; }
        else { if ( window.store.hasOwnProperty(key) ) { return window.store[key]; } else { return false; }
    }
}
function deleteStorage( key ) {
    if ( !key ) { return false; }
    if ( hasStorage() ) { localStorage.removeItem(key); } else { window.store[key] = false; }
}
function hasStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
function saveData( key, value ) {
    if ( !key || !value ) { return false; }
    if (value === null) { return false; }
    window.store[key] = value;
}
function readData( key ) {
    if ( !key ) { return false; }
    if ( window.store.hasOwnProperty(key) ) { return window.store[key]; } else { return false; }
}