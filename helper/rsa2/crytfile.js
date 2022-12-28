import str16 from "./str16"

export default function crytfile(buffer,rsa){
    const enc=new TextDecoder("utf-16")
    var mot=""
    var mot2=""
    var txt =""
    const l =buffer.length

    for (let i = 0; i < l; i++) {
        mot2=mot
        mot+=buffer[i]+','

        if (mot.length>10 || i==l-1) {
            if (mot.length==10 || i==l-1) {

                mot=rsa.encrypt(mot)
                txt+=mot+','
                mot=""
                mot2=""
            }else{

                mot2=rsa.encrypt(mot2)

                txt+=mot2+','
                mot=""
                mot2=""

                i--
            }
        }
    }

    return txt
}

