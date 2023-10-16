function checkForm(event) {
    const nameTemplate = /^[A-ZА-ЯҐЄІЇ][a-zа-яґєії]*$/;
    const loginTemplate = /^[A-Za-z0-9_]+$/;
    const passwordTemplate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const emailTemplate = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;

    const usernameInput = document.getElementById("username");
    const nameInput = document.getElementById("name");
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const retryPasswordInput = document.getElementById("retry_password");
    const emailInput = document.getElementById("email");
    const acceptCheckbox = document.getElementById("accept");

    usernameInput.classList.remove("error");
    nameInput.classList.remove("error");
    loginInput.classList.remove("error");
    passwordInput.classList.remove("error");
    retryPasswordInput.classList.remove("error");
    emailInput.classList.remove("error");

    const username = usernameInput.value;
    const name = nameInput.value;
    const login = loginInput.value;
    const password = passwordInput.value;
    const retryPassword = retryPasswordInput.value;
    const email = emailInput.value;

    if (!nameTemplate.test(username)) {
        $("#error-message1").html("Прізвище повинно починати з великою буквою");
        usernameInput.classList.add("error");
        return false;
    } else {
        $("#error-message1").html("");
        usernameInput.classList.remove("error");
    }

    if (!nameTemplate.test(name)) {
        $("#error-message2").html("Ім'я повинно починати з великою буквою");
        nameInput.classList.add("error");
        return false;
    } else {
        $("#error-message2").html("");
        nameInput.classList.remove("error");
    }

    if (!loginTemplate.test(login)) {
        $("#error-message3").html("Логін повинен мати тільки латинські букви, цифрі, і нижне підчеркування");
        loginInput.classList.add("error");
        return false;
    } else {
        $("#error-message3").html("");
        loginInput.classList.remove("error");
    }

    if (!passwordTemplate.test(password)) {
        $("#error-message4").html("Пароль повинен мати мінімум одну велику букву, малу букву, цифру, \n один спеціальний символ (наприклад, !@#$%^&*), довжина пароля не меньша 8");
        passwordInput.classList.add("error");
        return false;
    } else {
        $("#error-message4").html("");
        loginInput.classList.remove("error");
    }

    if (password !== retryPassword) {
        $("#error-message5").html("Паролі не співпадають");
        retryPasswordInput.classList.add("error");
        return false;
    } else {
        $("#error-message5").html("");
        retryPasswordInput.classList.remove("error");
    }

    if (!emailTemplate.test(email)) {
        alert("Поле 'Email' не відповідає вимогам");
        emailInput.classList.add("error");
        return false;
    }

    if (!acceptCheckbox.checked) {
        $("#error-message").html("Для реєстрації вам потрібно погодитися з правилами");
        return false;
    }

    document.getElementById("username").value = "";
    document.getElementById("name").value = "";
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
    document.getElementById("retry_password").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pcode").value = "";
    document.getElementById("accept").checked = false;

    $("#result").html("Привіт, " + name + " " + username + "! Ви успішно пройшли реєстрацію!");
    event.preventDefault();
    return true;
}
