const {getGFG} = require('../socketcontroller/gfg');

var loop;

const getGFGandemit = (socket, payload) => {
    loop = setInterval(async() =>{
        try {
            console.log("GFG function is running")
            const data = await getGFG({id : payload.id});
            socket.emit("GFGdata", data);
        } catch (error) {
            console.log("Error ; ", error.code);
        }
    }, 60000)
}


function stopemitting(){
    clearInterval(loop);
}


const getgfgdata = (socket) => {
    socket.on("GFGdata", payload => {
        console.log("What is payload GFG", payload);
        getGFGandemit(socket, payload);
        
        socket.on("disconnect", () => {
            console.log("Client Gfg Data Connected");
            stopemitting();
        })
    })
}


module.exports = {
    getgfgdata
}

