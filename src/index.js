const Serve = require('./server.js');

function main(){
    const srv = new Serve(3000);
    srv.initServer();
}

main();