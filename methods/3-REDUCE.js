// nosensical rducer
const users1 = ['user1',  'user2', 'user3'];
const redeedValue = users1.reduce((acc, cur) => 'you have been reduced');
const cl = (x)=>{
    console.log(x)
}
cl(redeedValue)

const numbers = [3, 5, 4, 10];
const reduceNums = numbers.reduce((acc, cur)=>  acc + cur);
cl(reduceNums)

const reduceStartAt50Nums = numbers.reduce((acc, cur)=>  acc + cur,50);
cl(reduceStartAt50Nums)


const users = [
    {
        username: 'edie',
        location: 'seattle'
    },
    {
        username: 'tomah',
        location: 'portland'
    },
    {
        username: 'jerome',
        location: 'oakland'
    },
    {
        username: 'solace',
        location: 'oakland'
    }
];
const usersByCity = users.reduce((acc, user)=>(
    {
        ...acc,
        [user.location]: (acc[user.location]|| 0)+1
    }
),{oakland: 100, byzantium: 1000 })
cl(usersByCity)