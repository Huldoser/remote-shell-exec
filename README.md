# remote-shell-api-server
Run shell commands on your *nix machine from a remote source using this API.


## Getting started:
```
npm install
node app.js [port_number]
```
*If the port number is not passed as an argument the server will run on port 3000.


## Usage
Open your browser and execute the command the following way:
```
http://localhost:[port_number]/api/[the_command_to_execute]
```
Whenever you have spaces in your command use %20 instead.

Example:
```
http://localhost:3000/api/echo%20"its%20working!"
```

Now you will get the response in your browsers' window.

!!! BE AWARE !!!
The way it executes the command is exactly the same way as you will execute from your terminal.
Deleting, modifying or creating files will actually save these changes to your machine.


## Project Purpose:
This project is made for my educational purposes to get a better understanding of the Node.js runtime, including some frameworks like Express.

While the latest stable Node.js version is still not fully supporting the ES6 standard (As you can check [here](http://node.green/)), I encouraged myself to use it whenever possiable.



## License
This project have no license and everyone can do whatever is on their mind including but not limited to marging, selling, changing, copying it and so on.


Check more sources by me on [https://github.com/andreirichkov](https://github.com/andreirichkov).
