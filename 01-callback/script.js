// Asynchronous Callback
// 1. Ajax Vanilla Javascript
function getData(url, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if(xhr.status === 404) {
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}
console.log('mulai');
getData('mahasiswa.json', results => {
    const mhs = JSON.parse(results);
    mhs.forEach(m => console.log(m.nama));
}, () => {

});
console.log('selesai');

// Ajax jQuery
console.log('mulai')
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');;