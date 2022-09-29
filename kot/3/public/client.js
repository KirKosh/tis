let div    = document.querySelector('div');
let button = document.querySelector('button');
let i = 0;
let Array = ['http://localhost:8080/ajax.html','http://localhost:8080/ajax1.html','http://localhost:8080/ajax2.html','http://localhost:8080/ajax3.html','http://localhost:8080/ajax4.html'];
q.addEventListener('click', function() {
    let alo = Array[i];
    fetch(alo).then(
        response => {
            return response.text();
        }
    ).then(
        text => {
            div.innerHTML = text;
        }
    );
    i++;
    if(i>4){i = 0};
});
