// tests/user.test.js
import request from 'supertest';
import app from '../app.js';

describe('User API', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/v1/register')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User registered successfully');
    });

    it('should login a user', async () => {
        const res = await request(app)
            .post('/api/v1/login')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
