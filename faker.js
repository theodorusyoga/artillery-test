'use strict';

const Faker = require('faker');
const uuidv1 = require('uuid/v1');
// https://artillery.io/blog/using-fakerjs-with-artillery

module.exports = {
    fakeIt
};


function fakeIt(userContext, events, done) {

    const id = uuidv1()
    const sender = {
        id: uuidv1(),
        session_id: uuidv1(),
        appSource: null,
        role: null
    }
    const recipient = {
        id: 'ENDPOINT'
    }
    const postback = {
        event: "goto",
        data: "handover_livechat_start",
        text: "Proceed",
        isPreview: false
    }

    // generate data with Faker:
    // const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
    // const email = Faker.internet.exampleEmail();
    // const password = Faker.internet.password();
    // add variables to virtual user's context:
    userContext.vars.id = id;
    userContext.vars.sender = sender;
    userContext.vars.recipient = recipient;
    userContext.vars.postback = postback;
    return done();
}
