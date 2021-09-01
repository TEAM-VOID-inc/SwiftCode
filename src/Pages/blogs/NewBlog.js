import React from "react";
import styled from "tachyons-components";
import Dante from "Dante2";

const Container = styled("div")`
  mw6 mw7-ns center bg-dark pa6 ph9-ns
`;
console.log("wtf");

var content = null;
var test = window.localStorage.getItem(content);
content = test;

function Blog() {
  return (
    <div style={{height: '90vh', width: '100%'}}>

      <Dante
        style={{height: '90vh', width: '70%', backgroundColor: 'white', margin: '10px auto', padding: '20px'}}
        content={test}
        body_placeholder={"hello"}
        data_storage={{
          interval: 1000,
          save_handler: (context, content) => {
            console.log(context);
            window.localStorage.setItem("context", context);
          }
        }}
        read_only={false}
      />

    </div>
  );
}

export default Blog;