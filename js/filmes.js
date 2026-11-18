
const formulario = document.getElementById('formOpiniao');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome-opiniao').value;
        const email = document.getElementById('email-opiniao').value;
        const expectativa = document.getElementById('expectativa').value;
        const comentario = document.getElementById('comentario-trailer').value;

        const opiniao = {
            nome: nome,
            email: email,
            expectativa: expectativa,
            comentario: comentario,
            data: new Date().toLocaleString()
        };

        let historico = JSON.parse(localStorage.getItem('opiniaoStark')) || [];

        historico.push(opiniao);

        localStorage.setItem('opiniaoStark', JSON.stringify(historico));

        alert('Opinião publicada com sucesso!');

        formulario.reset();
    });
}
