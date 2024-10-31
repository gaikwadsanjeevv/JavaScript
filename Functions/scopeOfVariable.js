var variableName; //global scope
let variableName; //global scope

function(parameter)  // parameter till end of function
{
    var variableName; //local variable  till end of function
    let variableName; //local variable  till end of function

    if(condition)  //or any other block like for block, while block etc
    {
        var variableName; //local variable (till end of function)
        let variableName;  //block variable till end of block

    }
}
