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

    test("4. Given a list of users give me the list of username", () => {
        const user1 = UserService.create(1, "HugoH1", "Hugo")
        const user2 = UserService.create(2, "HugoH2", "Hugo")
        const user3 = UserService.create(1, "HugoH3", "Hugo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("HugoH1")
        expect(usernames).toContain("HugoH2")
        expect(usernames).toContain("HugoH3")
    })
})