const UserService = require('../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserServicie", () => {
        const user = UserService.create(1, "HugoH", "Hugo")

        expect(user.username).toBe("HugoH")
        expect(user.name).toBe("Hugo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "HugoH", "Hugo")
        const userInfoInList = UserService.getInfo(user)
        
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("HugoH")
        expect(userInfoInList[2]).toBe("Hugo")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "HugoH", "Hugo")

        UserService.updateUserUsername(user, "HugoHR")
        expect(user.username).toBe("HugoHR")
    })

})