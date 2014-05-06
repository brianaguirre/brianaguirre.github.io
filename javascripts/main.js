OAuth.initialize('your_app_public_key');

function getREADME(response) {
  var meta = response.meta;
  var data = response.data;
  var emails = response.data.emails_url;
  // console.log(meta);
  console.log(emails);
}
