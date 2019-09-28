var domains = {
  "google.com":  1,
  "pornhub.com": 1,
  };

var proxy = "PROXY 192.168.0.101:3340";
var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}
