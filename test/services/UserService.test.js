const UserService = require('../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserServicie", () => {
        const user = UserService.create(1, "HugoH", "Hugo")

        expect(user.username).toBe("HugoH")
        expect(user.name).toBe("Hugo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    
})