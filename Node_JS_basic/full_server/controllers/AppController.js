class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.end('Hello Holberton School');
  }
}

module.exports = AppController;
