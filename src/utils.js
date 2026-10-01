export function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}