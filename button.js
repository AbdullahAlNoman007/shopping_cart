document.getElementById('btnphoneminus').addEventListener('click',function(){

    const phoneminus = itemminus('phonenum')
    const phoneprice = itempriceminus("phoneprice", "phonenum")
    setfleidtext(phoneprice,"phoneprice")
    setfleidvalue(phoneminus,"phonenum")
})
document.getElementById('btnphoneplus').addEventListener('click',function(){

    const phoneplus = itemplus('phonenum')
    const phoneprice = itempriceplus("phoneprice",  "phonenum",1000)
    if(phoneprice>10000){
        setfleidtext(phoneprice,1000)
        setfleidvalue(phoneplus,"phonenum")
    }
    else{

        setfleidtext(phoneprice,"phoneprice")
        setfleidvalue(phoneplus,"phonenum")
    }
    
    
})
document.getElementById('btncaseminus').addEventListener('click',function(){

    const phoneminus = itemminus('casenum')
    const caseprice = itempriceminus("caseprice","casenum")
    setfleidvalue(phoneminus,"casenum")
    setfleidtext(caseprice,"caseprice")
})
document.getElementById('btncaseplus').addEventListener('click',function(){

    const phoneplus = itemplus('casenum')
    const caseprice = itempriceplus("caseprice","casenum",100)
   if(caseprice>1000){
        setfleidtext(caseprice,100)
        setfleidvalue(phoneplus,"casenum")
    }
    else{
        setfleidtext(caseprice,"caseprice")
        setfleidvalue(phoneplus,"casenum")
    }
})