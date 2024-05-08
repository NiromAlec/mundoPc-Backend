export const identificarRol = (username: string): string => {
    const regexEmail= /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    const regexUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (username.includes("MundoPcAdmin")) {
        return "admin";
    }else if (regexEmail.test(username)) {
        return "profesor";
    }else if (regexUUID.test(username.split("@")[1])) {
        return "estudiante";
    }else{
        return "none"
    }
}