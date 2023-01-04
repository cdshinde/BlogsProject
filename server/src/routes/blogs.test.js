const {loadAllBlogDataCountByKey } = require('./blogs.controller');
const app = require('../app');

const request = require('supertest');


describe('Unit Tests', () => {
    test('Check Occurance for language key', () => {
        const actual = { "en": 22, "fr": 4, "es": 6, "de": 6 };
        return expect(loadAllBlogDataCountByKey('language')).resolves.toEqual(actual);
      });

});

describe('Test GET calls', () => {
    const actual = { 'technology': 13, 'national': 4, 'religion': 21 };
    test('Get all Categories', async () => {
        const response = await request(app).get('/blogs/query=category')
            expect(response.status).toEqual(200);
            expect(response.body).toEqual(actual);
    });
});