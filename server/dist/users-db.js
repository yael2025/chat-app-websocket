var RoleTypes;
(function (RoleTypes) {
    RoleTypes["admin"] = "admin";
    RoleTypes["client"] = "client";
    RoleTypes["manager"] = "manager";
})(RoleTypes || (RoleTypes = {}));
const users = [];
export function updateUser(id, newUserDetails) {
    console.log("update user");
    return;
}
updateUser(1, { name: "Moshe" });
