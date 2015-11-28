import web;
import json;

urls = ("/", "home",
        "/hello", "hello",
        "/ACS/vas/getPayChannelList", "getPayChannelList",
        );
app = web.application(urls, globals());

class home:
    def GET(self):
        raise web.redirect('/static/');

class hello:
    def GET(self):
        return 'Hello, world!';

class getPayChannelList:
    def GET(self):
        channels = ['1','2'];
        resp = {'result':0,
                'channels':channels,
            };
        return json.dumps(resp);

if __name__ == "__main__":
    app.run();
