function test1(cb)
{
 setTimeout(()=>{
    console.log("task1")
    cb();
 },100);
}

test1(()=>)