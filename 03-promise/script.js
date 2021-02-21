// contoh 1
let ditepati1 = false;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati1) {
        resolve('Janji telah ditepati');
    } else {
        reject('Ingkar janji');
    }
});
janji1
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));


// contoh 2
let ditepati2 = false;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati2) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu!');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Tidak ditepati setelah beberapa waktu');
        }, 2000);
    }
});
// console.log(janji2.then(() => console.log(janji2)));
janji2
    .finally(() => console.log('selesai menunggu'))
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log("NOT OK! :" + response));

// contoh 3
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara:'Saiman',
            pemeran: 'Thiago, Jota'
        }]);
    }, 1000);
});
const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Tangerang',
            temp:26,
            kondisi: 'Carah'
        }])
    }, 500);
});
Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });