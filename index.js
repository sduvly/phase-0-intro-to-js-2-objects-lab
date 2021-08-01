// Write your solution in this file!
const employee = {name: '', 
streetAddress: ''}


function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value})
}
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]: value})
 }
 function deleteFromEmployeeByKey(employee, key){
   const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
 }
 function destructivelyDeleteFromEmployeeByKey(employee, key){
    const value = Object.assign({}, employee, {[key]: value})   
    return value;
 }
 