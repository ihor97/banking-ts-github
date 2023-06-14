var User;
(function (User) {
    User[User["Admin"] = 0] = "Admin";
    User[User["Client"] = 1] = "Client";
})(User || (User = {}));
// використання єнамів, єнам це перечислення
let a = User.Admin;
// ще можна записати ось так число що відповідає значенню з єнама
let b = 1;
//# sourceMappingURL=app.js.map