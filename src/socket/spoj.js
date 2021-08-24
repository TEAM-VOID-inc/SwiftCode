const {gettopicbyid } = require('../socketcontroller/spoj');

var loop;

const getspojandemit = (socket, payload) => {
    loop = setInterval(async() =>{
        try {
            console.log("spojdata function is running", payload)
            const data = await gettopicbyid ({id : payload.id, pageid: payload.pageid});
            socket.emit("spojdata", data);
        } catch (error) {
            console.log("Error ; ", error);
        }
    }, 60000)
}


function stopemitting(){
    clearInterval(loop);
}


const getspojdata = (socket) => {
    socket.on("spojdata", payload => {
        console.log("What is payload spojdata", payload);
        getcodeforcesandemit(socket, payload);
        
        socket.on("disconnect", () => {
            console.log("Client spojdata disConnected");
            stopemitting();
        })
    })
}


module.exports = {
    getspojdata
}

