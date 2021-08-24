const {gettopicbyid } = require('../socketcontroller/codeforces');

var loop;

const getcodeforcesandemit = (socket, payload) => {
    loop = setInterval(async() =>{
        try {
            console.log("Codeforcesdata function is running", payload)
            const data = await gettopicbyid ({id : payload.id, pageid: payload.pageid});
            socket.emit("Codeforcesdata", data);
        } catch (error) {
            console.log("Error ; ", error);
        }
    }, 30000)
}


function stopemitting(){
    clearInterval(loop);
}


const getcodeforcesdata = (socket) => {
    socket.on("Codeforcesdata", payload => {
        console.log("What is payload Codeforcesdata", payload);
        getcodeforcesandemit(socket, payload);
        
        socket.on("disconnect", () => {
            console.log("Client Codeforcesdata disConnected");
            stopemitting();
        })
    })
}


module.exports = {
    getcodeforcesdata
}

