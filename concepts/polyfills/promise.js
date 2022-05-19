function MyPromise(executor){
    let onResolve;
    let onReject;

    this.then(thenHandler=>{
        onResolve = thenHandler;
    });

    this.resolve = (val)=>{
        onResolve(val);
    }

    this.reject = (err)=>{
        onReject(err); 
    }
    executor(this.resolve, this.reject);
}


const myPromise = new Promise((resolve, reject) => {
    resolve("ABC");
})

myPromise.then(data=> console.log(data), err=> console.log(err));