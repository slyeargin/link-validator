# link-validator
A link validation utility using Node.js in the command line.

## To install the application
* Clone the repository and `cd` into the directory.
* Run `npm install`.

## To use the application
* Enter `node index.js {{your urls}}`.

Example:

```
node index.js 'http://example.com' 'https://api.github.com/user/emails' 'example.org' 'foo://example.net' 'http://example.com/404' 'https://www.amazon.com/Active-Interest-Media-Yoga-Journal/dp/B002BFZ9MQ/' 'https://www.linkedin.com/in/samanthay/'
```

Should return:
```
Invalid syntax: example.org
Invalid syntax: foo://example.net
Unsuccessful response: http://example.com/404. Status: 404, Not Found
Unsuccessful response: https://api.github.com/user/emails. Status: 403, Forbidden
Unsuccessful response: https://www.linkedin.com/in/samanthay/. Status: 999, Request denied
```

## To run tests

* Enter `npm test`.
