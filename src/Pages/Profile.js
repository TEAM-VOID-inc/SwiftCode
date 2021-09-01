import React, { useState }  from 'react';
import Typography from '../components/Typography';
import Card from '../components/Card';
import Button from '../components/Button';
import font from '../utilities/font';
import '../assets/css/codeforces.css';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '../components/TextField';

function Profile() {
    
    const [profiledata, setProfiledata] = useState([
        {cptype: 'GFGid',cpid: 'Yashrdr'  ,edit: false},
        {cptype: 'Codeforcesid',cpid: 'Yashrdr'  ,edit: false},
        {cptype: 'Spojid',cpid: 'Yashrdr'  ,edit: false},
        {cptype: 'CodeChefid',cpid: 'Yashrdr'  ,edit: false}
    ])


    const setedit = (index) => {
        const list = profiledata;

        if(list[index].edit === false)
            list[index].cpid = 'Yashrdr11'
        list[index].edit = !list[index].edit;
        setProfiledata(prev => [...list]);
    }


    return (
        <div className="codeforcesContent">
        <Card m="30px 0px 0px 0px" minw="1100px" maxw="1300px" h="70vh" p="20px" bg="rgba(109, 181, 181, 0.33)" display="flex">
                <div>
                        <Typography m="20px 0px 20px 50px"  fs="35px" color="white" ff={font.ubuntu} fw={500}>Yashrdr11@gmail.com</Typography>
                        
                    {
                        profiledata.map((p,i) => (

                        <div  key={i}>
                            {p.edit ? (
                                <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-between', width: '90%'}}>
                                    <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-between'}}>
                                    <div style={{width: '250px'}}>
                                        <Typography m="15px 0px 0px 50px"  fs="22px" color="white" ff={font.encode} fw={600} w="200px">{p.cptype}</Typography>
                                    </div>

                                    <div style={{width: '600px'}}>
                                        <TextField placeholder={`Enter ${p.cptype}`} color="white" bg="#394d6d" m="15px 0px 0px 50px"/>
                                    </div>
                                    <Button  m="25px 0px 0px 50px" fs="12px" color="white" ff={font.encode} bg="transparent" bd="1px solid white"  h="40px" fw={600} onClick = {() => setedit(i)}><ClearIcon /></Button>
                                    </div>
                                </div>

                            ) : (

                            <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-between', width: '90%'}}>
                                <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-between'}}>
                                <div style={{width: '250px'}}>
                                <Typography m="15px 0px 0px 50px"  fs="22px" color="white" ff={font.encode} fw={600} w="200px">{p.cptype}</Typography>
                                </div>

                                <div style={{width: '600px'}}>
                                <Typography m="15px 0px 0px 50px"  fs="22px" color="white" ff={font.encode} fw={600}>{p.cpid}</Typography>
                                </div>

                                </div >
                                <Button  m="25px 0px 0px 50px" fs="12px" color="white" ff={font.encode} bg="transparent" bd="1px solid white"  h="40px" fw={600} onClick = {() => setedit(i)}><EditIcon/></Button>

                            </div>
                            )}
                        </div>))
                    }
                <Button m="25px 0px 0px 50px" fs="18px" color="white" ff={font.encode} bg="green" h="55px" fw={600} >Update User</Button>
                </div>

        </Card>
        </div>
    )
}

export default Profile;
