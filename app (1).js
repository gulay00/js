// sual 1 ve 2
// let Student = {
//     name: 'Gulay',
//     age:20,
//     couse: 4,
//     faculty: 'cs'
// }

// let otherStudent  = Student
// console.log(otherStudent)



// sual 3
// let Qarsiliglar = {
//     1: 'bir',
//     2: 'iki',
//     3: 'uc',
//     4: 'dord',
//     5: 'bes',
//     6: 'alti',
//     7: 'yeddi',
//     8: 'sekkiz',
//     9: 'doqquz',
//     10: 'on'
// }
// console.log(Qarsiliglar[5])



// sual4
// let person={
//     name:"gulay",
//     surname:"muradli",
//     fullname: function (){
//         return this.name + this.surname 
    
//     }
// }
// console.log(person.fullname())



// sual5
// let student ={
//     name: 'gulay',
//     surname: 'muradli'
// }

// for (var i in student){
//     console.log(i, student[i])
// }



// sual 6
// let student ={
//     name: 'gulay',
//     surname: 'muradli',
//     // faculty: 'cs'
// }
// console.log(student.hasOwnProperty('faculty'))



// sual7
// let eded={
//     a:1,
//     b:2,
//     c:3,
//     d:4

// }

// let cavab = 0
// for(var i in eded){
//     cavab += eded[i]
// }
// console.log(cavab)


// sual8
// let massiv = [13,52,33,14,45,66,56,46]
// console.log(massiv.length)

// for(i in massiv){
//     if(i %2 ==0 || i == 1){
//         massiv.pop(massiv[i])
//     } 
// }
// console.log(massiv.length)


// sual9
// let massiv = [13,52,33,14,45,66]

// let cavab = 0
// for(i in massiv){
//     cavab += massiv[i]
// }
// console.log(cavab)

// sual10
// let n=[2,4,7,9]
// let max=n[0]

// for(i=0;i<n.length;i++){
//     if(n[i]>max){
//         max = n[i]
//     }
// }
// console.log(max)


// sual11
// const numbers = [7,10,15,8,13,18,6]
// const evens = []
// const odds = []

// for(let i = 0; i< numbers.length; i++){
//     const num = numbers[i]

//     if(num % 2 == 0 ){
//         evens.push(num)
//     }else{
//         odds.push(num)
//     }
// }

// console.log(evens)
// console.log(odds)



// sual12
// let numbers = [9,6,4,3]
// numbers = numbers.sort(function(a,b){return a-b})

// console.log(numbers)


// sual13 YANLIS

// let arr = [3,12,NaN,false,'gulay',false,null,23]

// for(i in arr){
//     if(arr[i] == NaN ||  arr[i] == false 
//         || arr[i] == null ||arr[i] == undefined){
//             arr.pop(arr[i])
//         }
// }
// console.log(arr)



// sual14
// let arr = [3,'gulay',16]

// for (i in arr){
//     arr.reverse(i)    
// }

// console.log(arr)

