this.onmessage=function(e)
{
    
    if(e.data.multi !== undefined)
        {
          this.postMessage({result:e.data.multi.number1*e.data.multi.number2});    
        }
    
}