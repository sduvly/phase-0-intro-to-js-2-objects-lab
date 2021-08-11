// Write your solution in this file!
/* const employee = {name: '', 
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
 } */
 
 const employee = {
    name: 'Duvly',
    streetAddress: 'Bronx, NY'
 }
function updateEmployeeWithKeyAndValue(employee, name, newName){
   const newKeys = {...employee}
   newKeys[name] = newName
   return newKeys
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, newName){
    employee[name] = newName
    return employee
}
function deleteFromEmployeeByKey(employee, name){
    const delKeys = {...employee}
    delete delKeys.name
    return delKeys
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
   delete employee.name
   return employee
}