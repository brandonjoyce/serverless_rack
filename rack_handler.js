'use strict';

const exec = require('child_process').exec;
module.exports.call = (event, context, callback) => {
  var result = "";
  const child = exec('./application.rb ' + "'" + JSON.stringify(event) + "'", (_result) => {
    // TODO: Resolve with result of process
    // context.done(result);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        from_ruby: result
      })
    }
    callback(null, response);
  });

  // Log process stdout and stderr
  child.stdout.on('data', function(data) {
    result += data;
    console.log(data);
  });
  child.stderr.on('data', console.error);
};
