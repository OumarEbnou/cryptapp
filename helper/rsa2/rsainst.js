import RSA from "./rsa"

export default function rsaInstance(){
    var rsa = new RSA()
    const cle1=rsa.generatePrimeNumber(64)
    const cle2=rsa.generatePrimeNumber(64)
    const cles=rsa.findKey(cle1 ,cle2)
    const n=cles.privateKey.n
    const e=cles.publicKey.e
    const d=cles.privateKey.d
    rsa = new RSA({privateKey: d+','+n,publicKey: e+','+n})
    return rsa
  }