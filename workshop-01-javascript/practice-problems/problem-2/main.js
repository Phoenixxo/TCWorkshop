// Fill in for exercises!

const user = {
    username: "johndoe1",
    password: "anonymous2",
    isLoggedIn: false
};

const login = (username, password) => {
    if (user.username === username && user.password === password) {
        user.isLoggedIn = true;
        return console.log("Login successful!")
    } else {
        return console.log("Invalid username or password!")
    };
}

const logout = () => {
    user.isLoggedIn = false
    return console.log("Logged out!")
}

const checkLoginStatus = () => {
    if (user.isLoggedIn === true) {
        return console.log("Logged in.")
    } else {
        return console.log("Logged out.")
    }
}

login("johndoe1", "anonymous2")
login("johndoe2", "anonymous2")
checkLoginStatus()
logout()
checkLoginStatus()