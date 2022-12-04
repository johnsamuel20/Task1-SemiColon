nums = [1,2,3,4]

// for each msh btreurn 7aga , map returns
// overwite nums 
nums = nums.map(x => {
    x*=x
    return x
})
const bigNums = nums.filter((el)=>(el > 2))
console.log (bigNums)
//or brackets without return
// nums = nums.map(x => (
//     x*=x
// ))
// console.log (nums)



// for (i=1 ; i<nums.length ; i++) {
//     nums[i]*=nums[i];
// }
// console.log(nums)

console.log(nums.length >0 ? 1 : 2)


