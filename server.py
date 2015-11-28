import web;

urls = ("/", "home",
        "/hello", "hello" 
        );
app = web.application(urls, globals());

class home:
    def GET(self):
        raise web.redirect('/static/');

class hello:
    def GET(self):
        return 'Hello, world!';

if __name__ == "__main__":
    app.run();
