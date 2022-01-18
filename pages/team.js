import * as React from 'react';
import Stack from '@mui/material/Stack';




function Imagess(){
    return(
        <div style={{paddingLeft: 325, paddingTop: 0}}>
            <div >
                <h1 style={{hight:250, width:250, paddingTop:10, paddingLeft:475 ,  textAlignVertical: "center"}}> 
                    Unser Team
                    </h1>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <item style={{hight:150, width:300, paddingTop:20, paddingLeft:50}}>
                            <img src="./images/sofie.jpg" alt="" 
                            Sofie Pischl
                            style={{hight:150, width:300, paddingTop:20}}/>
                            <h2>Sofie Pischl</h2>
                            <p>Developer</p>
                        </item>
                        <item style={{hight:150, width:300, paddingTop:20, paddingLeft:100}}>
                            <img src="./images/duc.jpg" alt="" 
                            style={{ hight:150, width:300, paddingTop:20}}/>
                            <h2>Viet Duc Kieu</h2>
                            <p>Developer</p>
                        </item>
                        <item style={{hight:150, width:300, paddingTop:20, paddingLeft:100}}>
                            <img src="./images/HannahL.jpg" alt="" name="Hannah" 
                            style={{hight:150, width:300, paddingTop:20}}/>
                            <h2>Hannah Leier</h2>
                            <p>Developer</p>
                        </item>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <item style={{hight:150, width:300, paddingTop:20, paddingLeft:50}}>
                            <img src="./images/sofie.jpg" alt="" 
                            style={{hight:150, width:300, paddingTop:20}}/>
                            <h2>Alisa Rogner</h2>
                            <p>Scrum Master</p>
                        </item>
                        <item style={{hight:150, width:300, paddingTop:20, paddingLeft:100}}>
                            <img src="./images/Patrick.jpg" alt="" 
                            style={{ hight:150, width:300, paddingTop:20}}/>
                            <h2>Patrick Niesen</h2>
                            <p>Projekt Owner</p>
                        </item>
                        <item style={{hight:150, width:300, paddingTop:20, paddingLeft:100}}>
                            <img src="./images/HannahE.jpg" alt="" 
                            style={{hight:150, width:300, paddingTop:20}}/>
                            <h2>Hannah Schult</h2>
                            <p>Developer</p>
                        </item>
                    </Stack>
            </div>

        </div>
    )
}


export default Imagess;
