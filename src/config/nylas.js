const Nylas = require('nylas');

Nylas.config({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
});   

Nylas.accounts.list().then(accounts => {
    for (let account of accounts) {
      console.log(
        `Email: ${account.emailAddress} | `,
        `Billing State: ${account.billingState} | `,
        `Sync State: ${account.syncState}`,
        `ID: ${account.id}  | `
      );
    }
  }); 

const nylas = Nylas.with(cec9ZWimVtERiutYTnRtlBJms0KIDW);

const draft = nylas.drafts.build({
    subject: 'With Love, from Nylas',
    to: [{ name: 'My Nylas Friend', email: 'swag@nylas.com' }],
    body: 'This email was sent using the Nylas email API. Visit https://nylas.com for details.'
});

// Send the draft
draft.send().then(message => {
    console.log(`${message.id} was sent`);
});   


const event = nylas.events.build({
    title: 'New Years Party!',
    // calendarID must be the ID for a calendar the user has write access to.
    calendarId: CALENDAR_ID,
    // Event times are set via UTC timestamps
    // This example creates an event on December 31, 2018
    when: { start_time: 1546290000, end_time: 1546300800 },

    // Participants are stored as an array of participant subobjects
    participants: [{ email: 'swag@nylas.com', name: 'My Nylas Friend' }],
    location: 'My House!'
  });