/**
 * @param {int} min 
 * @param {int} max 
 * @returns {int}
 */
export function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}