const arr = [1,4, ,7,9,6, ,3 , , , , , ]
const arr2=[]


function findSpace(arr){

    for(let i=0; i<arr.length; i++){
        if(arr[i]===undefined){
            arr2.push(i)
        }
        
    }

    return arr2
}

const arrs = findSpace(arr);
arrs;