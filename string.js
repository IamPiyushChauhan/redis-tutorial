const client = require('./client')

async function  init(){
    const result = await client.get('user:3');
    console.log(result);
}

async function  init2(){
    const r = await client.set("msg:6","Hey from Node.js");
    console.log(r);
    if(r === "OK"){
        console.log("Saved");
    }else{
        console.log('not saved');
    }
    const result = await client.get('msg:6');
    console.log(result);
}

async function  init3(){
    await client.set("msg:7","Message wii expire after 20seconds");
    await client.expire("msg:7",20)
    let  result = await client.get('msg:7');
    console.log(result);
    console.log("Wait for 20 secons");
     setTimeout(async() => {
        console.log(await client.get('msg:7'));
    }, 20000);
    
}

init3()