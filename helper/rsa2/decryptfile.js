import str16 from "./str16";

export  default function decrytfile(buffer,rsa){

    const enc=new TextDecoder("utf-8")
    var mot=""
    var txt =[],txt1=[],txt2
    const origin= enc.decode(buffer)

    console.log('====================================');
    console.log(origin);
    console.log('====================================');
    txt2=origin.split(',')

    const l= txt2.length
    let index =0
    for (let i = 0; i <l ; i++) {

            txt=(rsa.decrypt(txt2[i])).split(',')

            txt.splice(txt.length-1, 1);

            for ( index = 0; index < txt.length; index++) {

                txt1.push(parseInt(txt[index]))
            }
    }


    return txt1
}