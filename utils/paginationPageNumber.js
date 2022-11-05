const PaginationPageNumber = (top_value)=>{
    let returnData = []
    for(let i = 1; i<=top_value; i++){
        returnData.push(i)
    }
    console.log(returnData)
    return returnData
}

export default PaginationPageNumber