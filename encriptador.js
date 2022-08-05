const encrip = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
  };

  const desencrip = {
ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
  };

  let arr=[];


  function encriptar(arg){
    let arr = [];
    for (let i=0; i < arg.length; i++) {
        for(prop in abc){
            if(prop == arg[i]){
                arr.push(abc[prop]);
            }
        }

    }
    return arr.join('');
}
