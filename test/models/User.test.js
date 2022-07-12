const User = require('../../app/models/user')

describe("Unit Tests for User class", () => {

    test('Create an User object', () => {

        const user = new User(1, "HugoH", "Hugo", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("HugoH")
        expect(user.name).toBe("Hugo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()//verifica que el valor no sea undefine
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('Add getters', () => {
        
        const user = new User(1, "HugoH", "Hugo", "Bio")

        expect(user.getUsername).toBe("HugoH")
        expect(user.getName).toBe("Hugo")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('Add setters', () => {
        const user = new User(1, "HugoH", "Hugo", "Bio")

        user.setUsername ="HugoHR"
        expect(user.username).toBe("HugoHR")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
})