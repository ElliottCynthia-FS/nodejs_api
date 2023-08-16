const { usersServices, usersServicesById } = require('./usersServices');

describe("Users Service test", () => {
    // b/c usersServices is a promise, use async/await
    test("it gets all users", async() => {
        const result = await usersServices();
        expect(result.data).toHaveLength(200);
    });

    test('it gets a user by id', async () => {
        const result = await usersServicesById(2);
        expect(result.data.id).toEqual(2);
    });
});