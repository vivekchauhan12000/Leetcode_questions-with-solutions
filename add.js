var num=[3,3];
var surpass=4;
const so=num.sort(function(a, b){return a - b});
  

function twoSum(nums,target){

 

  for(let i=0;i<nums.length-1;i++){

      for(let j=i+1;j<nums.length+1;j++){

          if(nums[i]+nums[j] === target){
               const a=nums[i]
               const b=nums[j]
               inde1=nums.indexOf(a);
               inde2=nums.indexOf(b);
              return([inde1,inde2]);
               
          }
      }
   }
}
var x = twoSum(num,6);  
console.log(x);

