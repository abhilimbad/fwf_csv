const readline = require('readline')
const fs =require('fs')

function fwf_txt(inputfilepath,outputfilepath,RANGES){


    OUT_FILE = outputfilepath;

const instream  = fs.createReadStream(inputfilepath),
    outstream = fs.createWriteStream(OUT_FILE),
    rl        = readline.createInterface({input: instream});
    let buffer = '';
    instream.on('error', (e)=>{console.error(e.message);});
    outstream.on('error', (e)=>{console.error(e.message);});
    const line_counter = ((i = 0) => () => ++i)();
rl.on('line', (line,index= line_counter()) => {
  parts = [];
 
  for (let range of RANGES)
      parts.push(line.substr(range[0], range[1]).trim());
      parts.forEach((part,index)=>{
        parts[index] = '"'+part+'"'
        
    })
   buffer += parts.join(",")+"\n";
  
});
rl.on('close', ()=>{
outstream.write(buffer);
outstream.close();
});

}
module.exports=fwf_txt