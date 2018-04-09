var Orang1 = "John";
console.log('Nama Orang 1: '+Orang1);

var Orang2 = "Uchok";
console.log('Nama Orang 2: '+Orang2);

var Orang3 = "Kohcu";
console.log('Nama Orang 3: '+Orang3);

var tinggiOrang1 = 170;
console.log('Tinggi Orang 1 '+tinggiOrang1);
var usiaOrang1 = 30;
console.log('Usia Orang 1 '+usiaOrang1);

var tinggiOrang2 = 155;
console.log('Tinggi Orang 2 '+tinggiOrang2);  
var usiaOrang2 = 40;
console.log('Usia Orang 2 '+usiaOrang2);

var tinggiOrang3 = 180;
console.log('Tinggi Orang 3 '+tinggiOrang3); 
var usiaOrang3 = 22;
console.log('Usia Orang 3 '+usiaOrang3);
    
    
var hasilOrang1=tinggiOrang1+(5*usiaOrang1);
var hasilOrang2=tinggiOrang2+(5*usiaOrang2);
var hasilOrang3=tinggiOrang3+(5*usiaOrang3);
    

console.log('skor 1='+hasilOrang1+' skor 2='+hasilOrang2 +' skor 3='+hasilOrang3);
    
    if((hasilOrang1>hasilOrang2)&&(hasilOrang1>hasilOrang3))
    {
        console.log('Pemenangnya adalah John dengan skor ='+hasilOrang1);
    }
else if((hasilOrang2>hasilOrang1)&&(hasilOrang2>hasilOrang3))
{
            console.log('Pemenangnya adalah Uchok dengan skor = '+hasilOrang2);
             }
else if((hasilOrang3>hasilOrang1)&&(hasilOrang3>hasilOrang2))
{
            console.log('Pemenangnya adalah Kohcu dengan skor = '+hasilOrang3);
             }
    else if((hasilOrang3==hasilOrang1)&&(hasilOrang3==hasilOrang2))
    {
            console.log('draw atau seri');
             }
