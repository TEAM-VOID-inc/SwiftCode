import React, { useState } from "react";
import styled from "tachyons-components";
import Dante from "Dante2";

const Container = styled("div")`
  mw6 mw7-ns center bg-dark pa6 ph9-ns
`;


function Blog() {
  const [state, setstate] = useState();

  console.log("state->",state);

  return (
    <div style={{height: '90vh', width: '100%'}}>

      <Dante
        style={{minHeight: '90vh', width: '70%', backgroundColor: 'white', margin: '10px auto', padding: '20px'}}
        content={state}
        body_placeholder={"hello"}
        data_storage={{
          interval: 1000,
          save_handler: (context, content) => {
            console.log("context ",context);
            setstate((state) => context);
          }
        }}

        key_commands={{ 'alt-shift': [{ key: 65, cmd: 'add-new-block' }], 'alt-cmd': [ { key: 49, cmd: 'toggle_block:header-one' }, { key: 50, cmd: 'toggle_block:header-two' }, { key: 53, cmd: 'toggle_block:blockquote' }, ], cmd: [ { key: 66, cmd: 'toggle_inline:BOLD' }, { key: 73, cmd: 'toggle_inline:ITALIC' }, { key: 75, cmd: 'insert:link' }, ], }}

        
        read_only={false}
      />

    </div>
  );
}

export default Blog;