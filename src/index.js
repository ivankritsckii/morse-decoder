const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result=''
    let CheckZero=(string)=>{
        for(let i=0; i<1;i){
            if(string[i]=='0'){
                string=string.slice(i+1,string.length-i)
            }
            else{
                i=2
            }
        }
        return string
    }
    let decoderInDots=(code)=>{
        let res=''
        for(let i=0;i<code.length;i=i+2){
            if(code[i]+code[i+1]=='10'){
                res=res+'.'
            }
            if(code[i]+code[i+1]=='11'){
                res=res+'-'
            }
        }
        return res
    }
    let decoderInText=(dotsAndDash)=>{
        if(dotsAndDash==''){
            result=result+' '
        }
        else{
            result=result+MORSE_TABLE[dotsAndDash]
        }
        return result
    }
    for (let i=0; i<expr.length; i=i+10){
        let a=expr.slice(i,i+10);
        a=CheckZero(a)
        a=decoderInDots(a)
        decoderInText(a)
    }
    return result
    // write your solution here
}

module.exports = {
    decode
}