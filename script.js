//to findout pine apple is present in an array
let arrfruits = ['apple','banana','mango','pineapple'];
b=arrfruits.includes('pineapple')
console.log(b)

//to findout fibonacci series upto 100
let range=100;
let n1=0, n2=1;
nextnum=n1+n2;
while(nextnum<=range)
{
    console.log(nextnum);
    n1=n2;
    n2=nextnum;
    nextnum=n1+n2;
}


//to check two numbers sum=50 or any one number=50
let a=50,b=30;
//let a=20,b=30;
sum=a+b;
if(sum===50)
{
    console.log("sume is 50 true");
}else if(a=50)
{
    console.log("first number is 50");
}else
{
   console.log("second number is 50");
}


//temperature in F to C and C to Fs
let tempF=50;
let tempC = ((tempF-32)*(5/9));
console.log("temperature in celsisu:",tempC);
let tempCelsius=10;
let  tempFahrenheit=(tempCelsius*(9/5))+32
console.log("temperature in Fahrenheit:",tempFahrenheit);

//to check 'v' present in string
let string1="AchieversIt"
console.log(string1.includes('v'));

 



