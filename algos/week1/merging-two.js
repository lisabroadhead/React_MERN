const combine = (leftArr, rightArr) => {
    var newArr = [];
    var lastItem;

    if(leftArr.length > rightArr.length){
        fullLength = leftArr
    }else{
        fullLength = rightArr
    }
    
    for(i=0;i < fullLength.length; i++){
        if(leftArr[i] < rightArr[i]){    
            newArr.push(leftArr[i])
            newArr.push(rightArr[i])
            lastItem = rightArr[i]
        }else if(leftArr[i] > rightArr[i]){
            newArr.push(rightArr[i])
            newArr.push(leftArr[i])
            lastItem = leftArr[i]
        }else{
            newArr.push(fullLength[i])
            lastItem = fullLength[i]
        }
    }
    return newArr;
}

console.log(combine([1,3,7,9,33],[0,2,4,6,11,14,21]))