
export enum UserRole {
    user,
    admin,
    superuser,
    editor,
}

const users = [
    {
        id: 1,
        firstName: "Moshe",
        lastName: "Cohen",
        role: UserRole.admin
    },
    {
        id: 2,
        firstName: "Moshe",
        lastName: "Cohen",
        role: UserRole.admin
    },
    {
        id: 3,
        firstName: "Moshe",
        lastName: "Cohen",
        role: UserRole.admin
    }

]

interface User {
    id: number
    firstName:string
    lastName: string
    phoneNumber: string
    role: UserRole
}

export function updateUser(userId: number, newUser:User ) : string  {
    let userToUpdate = users.find(user => user.id === userId)
    userToUpdate = {...userToUpdate, ...newUser}
    return "Success"
}

