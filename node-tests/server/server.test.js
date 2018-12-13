const request = require('supertest');
let app = require('./server').app;
let expect = require('expect');

describe('Service Tests', () => {
    
    describe('#First Test', () => {
        
        it('should return 404 - Page Not Found', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page Not Found'
                    });
                })
                .end(done);
        })
    })
 
    describe('#Second Test', () => {
        it('should return Jane object', (done) => {
    
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Jane',
                    age: 37})
                })
                .end(done);
        }) 
    })


})
