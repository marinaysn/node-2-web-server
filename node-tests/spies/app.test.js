let expect = require('expect');
let rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {

    let db = {
        saveUser: expect.createSpy()
    }

    app.__set__('db', db);
    
    it('it should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Marina', 42);
        expect(spy).toHaveBeenCalledWith('Marina', 42);
    });

    it('it should call saveUser with user object', () => {
        let email = 'marina@gmail.com';
        let password = '1234567';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    })

});