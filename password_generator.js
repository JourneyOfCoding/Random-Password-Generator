function passwordGenerator () {
    // Length of the password
    const length = 6;

    // Characters that will be used in the password
    const characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&";
    var password = "";

    for (let i = 1; i <= length; i++) {
        // Get the length of the characters string
        const charactersLength = characters.length;

        // Get the random characters within the length of characters
        const randomCharacters = Math.floor(Math.random() * charactersLength);

        // Get the character at the randomly selected characters
        const generatedPassword = characters[randomCharacters];

        // Assign the generated character to the password variable
        password = password + generatedPassword;
    }

    // Display the generated password in the HTML element with the id = "password"
    document.getElementById("password").innerHTML = password;
}
