const { usersServices, usersServicesById } = require('./usersServices');

// mock the usersServices and usersServicesById functions so that we don't make a real API call during tests because we want to test the functionality of the usersServices and usersServicesById functions, not the API call itself.
// jest will automatically look for a __mocks__ folder and use the mock functions in there instead of the real functions
jest.mock('./usersServices.js');

describe("Users Service test", () => {
    // b/c usersServices is a promise, use async/await
    test("it gets all users", async() => {
        const result = await usersServices();
        expect(result.data).toHaveLength(10);
    });

    test('it gets a user by id', async () => {
        const result = await usersServicesById(10);
        expect(result.data.userId).toBeGreaterThanOrEqual(1);
        expect(result.data.id).toBeGreaterThanOrEqual(1);
        expect(result.data.title).toBe('illo est ratione doloremque quia maiores aut');
        expect(result.data.completed).toBe(true);
    });
});