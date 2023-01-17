function setfleidvalue(newvalue,name){

    const valuefleid =document.getElementById(name)
     valuefleid.value = newvalue
 }
function setfleidtext(newvalue,name){

    const valuefleid =document.getElementById(name)
     valuefleid.innerText = newvalue
 }
function itemplus(fleid){
   const fleidname =document.getElementById(fleid)
   const fleidvalue = parseInt(fleidname.value)
    const newfleidvalue =fleidvalue +1
    if(newfleidvalue > 10 ){
        const newfleidvalue2 =10
        alert("You are sure!!! Tor Ato taka ase")
        return newfleidvalue2
    }
    return newfleidvalue
}
function itemminus(fleid){
    const fleidname =document.getElementById(fleid)
    const fleidvalue = parseInt(fleidname.value)
    const newfleidvalue =fleidvalue-1
    if(newfleidvalue<0 ){
        const newfleidvalue2 =0
        alert("Mara khao .")
        return newfleidvalue2
    }
    return newfleidvalue
}
function itempriceplus(fleid,itemname,mainprice){
    const fleidname =document.getElementById(fleid)
    const fleidvalue =parseInt(fleidname.innerText)
    const itemnam =document.getElementById(itemname)
    const itemvalue = parseInt(itemnam.value)
    if (itemvalue === 0){

        let price = mainprice
        return price

    }
    else{
        let price = fleidvalue + fleidvalue/itemvalue
        return price
    }

}
function itempriceminus(fleid,itemname){
    const fleidname =document.getElementById(fleid)
    const fleidvalue =parseInt(fleidname.innerText)
    const itemnam =document.getElementById(itemname)
    const itemvalue = parseInt(itemnam.value)
    if(itemvalue===0){

        const price = 0
        return price
    }
    else{

        const price = fleidvalue - fleidvalue/itemvalue
        return price
    }

}
function getitemvalue(name){

    const nam = document.getElementById(name)
    const namvalue =parseInt(nam.innerText)
    return namvalue
}

document.getElementById('btnphoneminus').addEventListener('click',function(){

    const phoneminus = itemminus('phonenum')
    const phoneprice = itempriceminus("phoneprice", "phonenum")
    setfleidtext(phoneprice,"phoneprice")
    setfleidvalue(phoneminus,"phonenum")

    const subtotal = getitemvalue("phoneprice") + getitemvalue("caseprice")
    const tax = (subtotal/100) * 5
    const tax2 =tax.toFixed(2)
    const total = tax + subtotal 
    setfleidtext(subtotal,'subtotal')
    setfleidtext(tax2,'tax')
    setfleidtext(total,'total')
})
document.getElementById('btnphoneplus').addEventListener('click',function(){

    const phoneplus = itemplus('phonenum')
    const phoneprice = itempriceplus("phoneprice",  "phonenum",1000)
    if(phoneprice>10000){
        setfleidtext(phoneprice,1000)
        setfleidvalue(phoneplus,"phonenum")

        const subtotal = getitemvalue("phoneprice") + getitemvalue("caseprice")
        const tax = (subtotal/100) * 5
        const tax2 =tax.toFixed(2)
        const total = tax + subtotal 
        setfleidtext(subtotal,'subtotal')
        setfleidtext(tax2,'tax')
        setfleidtext(total,'total')
    }
    else{

        setfleidtext(phoneprice,"phoneprice")
        setfleidvalue(phoneplus,"phonenum")

        const subtotal = getitemvalue("phoneprice") + getitemvalue("caseprice")
        const tax = (subtotal/100) * 5
        const tax2 =tax.toFixed(2)
        const total = tax + subtotal 
        setfleidtext(subtotal,'subtotal')
        setfleidtext(tax2,'tax')
        setfleidtext(total,'total')
    }
    
    
})
document.getElementById('btncaseminus').addEventListener('click',function(){

    const phoneminus = itemminus('casenum')
    const caseprice = itempriceminus("caseprice","casenum")
    setfleidvalue(phoneminus,"casenum")
    setfleidtext(caseprice,"caseprice")

    const subtotal = getitemvalue("phoneprice") + getitemvalue("caseprice")
    const tax = (subtotal/100) * 5
    const tax2 =tax.toFixed(2)
    const total = tax + subtotal 
    setfleidtext(subtotal,'subtotal')
    setfleidtext(tax2,'tax')
    setfleidtext(total,'total')
})
document.getElementById('btncaseplus').addEventListener('click',function(){

    const phoneplus = itemplus('casenum')
    const caseprice = itempriceplus("caseprice","casenum",100)
   if(caseprice>1000){
        setfleidtext(caseprice,100)
        setfleidvalue(phoneplus,"casenum")

        const subtotal = getitemvalue("phoneprice") + getitemvalue("caseprice")
        const tax = (subtotal/100) * 5
        const tax2 =tax.toFixed(2)
        const total = tax + subtotal 
        setfleidtext(subtotal,'subtotal')
        setfleidtext(tax2,'tax')
        setfleidtext(total,'total')
    }
    else{
        setfleidtext(caseprice,"caseprice")
        setfleidvalue(phoneplus,"casenum")

        const subtotal = getitemvalue("phoneprice") + getitemvalue("caseprice")
        const tax = (subtotal/100) * 5
        const tax2 =tax.toFixed(2)
        const total = tax + subtotal 
        setfleidtext(subtotal,'subtotal')
        setfleidtext(tax2,'tax')
        setfleidtext(total,'total')
    }
})
