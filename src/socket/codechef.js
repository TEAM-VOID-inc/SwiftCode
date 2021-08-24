const {gettopicbyid } = require('../socketcontroller/codechef');

var loop;

const getcodechefandemit = (socket, payload) => {
    loop = setInterval(async() =>{
        try {
            console.log("codechefdata function is running", payload)
            const data = await gettopicbyid ({id : payload.id, pageid: payload.pageid});
            socket.emit("codechefdata", data);
        } catch (error) {
            console.log("Error ; ", error);
        }
    }, 60000)
}


function stopemitting(){
    clearInterval(loop);
}


const getcodechefdata = (socket) => {
    socket.on("codechefdata", payload => {
        console.log("What is payload codechefdata", payload);
        getcodechefandemit(socket, payload);
        
        socket.on("disconnect", () => {
            console.log("Client codechefdata disConnected");
            stopemitting();
        })
    })
}


module.exports = {
    getcodechefdata
}

