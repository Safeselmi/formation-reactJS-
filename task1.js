//EXERCICE 1
function entierEnChaine(x)
{
    const res= x.toString()
    console.log(typeof(res))
    console.log(res)
}
entierEnChaine(5) // résultat : “5”
entierEnChaine(56) // résultat : “56”
entierEnChaine(500) // résultat : “500”
entierEnChaine({x:'15'})//Invalid or unexpected token

//EXERCICE 2

function sommeTableau(T)
{ 
    s=0;
    T.map(element => {
        s+=element });
        console.log("resultat="+s)
}
sommeTableau([1,2,3,4,8])//résultat : 18
sommeTableau([1,2,3,4]) // résultat : 10
sommeTableau([0,6,11,-8]) // résultat : 9

//exercice 3
function moyenneTableau(T)
{
   let tab =T.reduce((a,b)=>a+b);
   console.log(tab/T.length)
}
moyenneTableau([1,2,3,4]) // résultat : 2.5
moyenneTableau([0,6,11,-8]) // résultat : 2.25

//EXERCICE 4
function getUserById(users,id)
{
    users.map((e)=>{if(e.id==id)
        let {id,...rest}=user
         console.log(id,rest)})
    
}
let T = [
    {
    id : 1,
    first:'ahmed',
    last:'ben ali',
    age : 23,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    {
    id : 2,
    first:'aziz',
    last:'ameri',
    age : 44,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    {
    id : 3,
    first:'khalil',
    last: 'ben lamine',
    age : 18,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    }
    ]
   
getUserById(T,1)


//Exercice 5
function sortUsers(users)
{
    
    users.sort((a,b)=>(a.id<b.id))
    
   
}

T = [
    {
    id : 1,
    first:'ahmed',
    last:'ben ali',
    age : 23,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    {
    id : 2,
    
    first:'aziz',
    email : 'ahmed.benali@gmail.com',
    last:'ameri',
    age : 44,
    address :'Tunis'
    },
    {
    id : 3,
    first:'khalil',
    last: 'ben lamine',
    age : 18,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    ]
    sortUsers(T)