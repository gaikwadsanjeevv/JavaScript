let getSimplInterest = function(principle, rateOfInterest, NoOfYears)
{
    let si = (principle * rateOfInterest * NoOfYears)/100;
    return si;
};
console.log(getSimplInterest(1000,6.7,3));
