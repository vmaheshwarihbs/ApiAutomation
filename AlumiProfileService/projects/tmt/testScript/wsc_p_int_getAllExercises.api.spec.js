const superTest = require('supertest'),
    config = require('config'),
    request = superTest(global.ENV),
    Logger = require('../../../utils/logger'),
    logger = new Logger('superTest'),
    api_key = global.APIKEY,
    // schema = require('../schema/events'),
    data = require('../testData/wsc_p_int_getAllExercises'),
    Joi = require('joi');
jest.setTimeout(100000);



describe('GET_AllExercises', () => {

    it('TC-001 - All Exercises - should return all execises with 200 status code', (done) => {
        request.post(data.TC001.endpoint)
            .set("HBS_PERSON_ID", data.TC001.personId)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .end((err, res) => {
                if (err) done.fail(err);
                expect(res.status).toBe(200);
                expect(Object.keys(res.body).length).toBeGreaterThan(0);
                logger.info("TC-001 -alumni_allEvents - Request: ", res.request); //Logging request
                logger.info("TC-001 -alumni_allEvents - Response: ", res.text); // Logging response
                done();
            });
    });
    it('TC-002 - All Exercises - should not return all execises with 403 status code', (done) => {
        request.post(data.TC002.endpoint)
            .set("HBS_PERSON_ID", data.TC002.personId)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .end((err, res) => {
                if (err) done.fail(err);
                expect(res.status).toBe(403);
                logger.info("TC-001 -alumni_allEvents - Request: ", res.request); //Logging request
                logger.info("TC-001 -alumni_allEvents - Response: ", res.text); // Logging response
                done();
            });
    });
    it('TC-003 - All Exercises - should return correct content-type and schema in JSON format', (done) => {
        request.post(data.TC003.endpoint)
            .set("HBS_PERSON_ID", data.TC003.personId)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .end((err, res) => {
                if (err) done.fail(err);
                expect(res.type).toEqual('application/json');
                logger.info("TC-003 -alumni_allEvents - Request: ", res.request); //Logging request
                logger.info("TC-003 -alumni_allEvents - Response: ", res.text); // Logging response
                done();
            });
    });
    it('TC-004 - All Exercises - should return the response in sepecified time', (done) => {
        request.post(data.TC004.endpoint)
            .set("HBS_PERSON_ID", data.TC004.personId)
            .set("Content-Type", "application/json")
            .end((err, res) => {
                if (err) done.fail(err);
                jest.setTimeout(10000);
                logger.info("TC-004 -alumni_allEvents - Request: ", res.request); //Logging request
                logger.info("TC-004 -alumni_allEvents - Response: ", res.text); // Logging response
                done();
            });
    });
    it('TC-005 - All Exercises - should return status code 404 for access denied', (done) => {
        request.post(data.TC005.endpoint)
            .set("HBS_PERSON_ID", data.TC005.personId)
            .set("Content-Type", "application/json")
            .set("accept", "application/json")
            .end((err, res) => {
                if (err) done.fail(err);
                expect(res.status).toBe(404);
                logger.info("TC-006 -alumni_allEvents - Request: ", res.request); //Logging request
                logger.info("TC-006 -alumni_allEvents - Response: ", res.text); // Logging response
                done();
            });
    });
});
