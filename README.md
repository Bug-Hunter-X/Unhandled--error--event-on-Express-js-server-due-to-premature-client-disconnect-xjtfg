# Unhandled 'error' event on Express.js server due to premature client disconnect

This repository demonstrates a common error in Node.js Express.js applications where an unhandled 'error' event occurs when a client closes the connection before the server has sent a response, particularly when there's a delay in processing.

## Bug Description
The provided `bug.js` file contains an Express.js server that simulates a 5-second delay before sending a response. If a client disconnects before the 5 seconds elapse, the server will throw an error because it attempts to write to a closed connection.

## Solution
The `bugSolution.js` file demonstrates a solution using the 'close' event listener on the request object.  This allows for graceful handling of client disconnections.