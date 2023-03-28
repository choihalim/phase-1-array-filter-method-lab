function findMatching(names, target) {
    return names.filter(name => name.toLowerCase() === target.toLowerCase());
}

function fuzzyMatch(names, target) {
    return names.filter(name => name.startsWith(target));
}

function matchName(drivers, target) {
    return drivers.filter(driver => driver.name === target);
}