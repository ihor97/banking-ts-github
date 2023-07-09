let p = new Promise((res, rej) => {
    console.log('start');
    setTimeout(() => {
        console.log('end end end');
    });
    // тут вже буде 1 в кінці
    setTimeout(() => {
        res(1);
    });
    console.log('end');
});
p.then(res => {
    console.log(res);
});
p.then(res => {
    console.log(res);
});
p.then(res => {
    console.log(res);
});
