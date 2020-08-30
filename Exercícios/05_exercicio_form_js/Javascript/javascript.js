function limpar()
{
    var x = confirm("Deseja realmente limpar tudo?");

    if(x == true)
    {
        document.form.reset();
    }
    else
    {
        return 0;
    }
}

function validar()
{
    var nomeDigitado, estadoCivilDigitado, erro,  objetivoDigitado, telefoneDigitado, emailDigitado, 
    idiomaDigitado, linguagemDigitado, selecionou, a;

    nomeDigitado = document.form.nome.value;

    if(nomeDigitado.length < 3)
    {
        document.form.nome.value="";
        alert("O nome precisa ter mais de 3 caracteres");
    }
    else
    {
        document.form.nome.value = nomeDigitado.toUpperCase();
    }

    estadoCivilDigitado = document.form.estadoCivil.value;

    if(estadoCivilDigitado === "selecione")
    {
        erro = document.getElementById("idErro");
        erro.innerHTML = "Selecione um estado civil valido";
    }

    objetivoDigitado = document.form.objetivo.value;
    document.form.objetivo.value = objetivoDigitado.toLowerCase();

    telefoneDigitado = document.form.tel.value;
    emailDigitado = document.form.email.value;

    if(telefoneDigitado === "" && emailDigitado === "")
    {
        alert("Digite pelo menos um email ou telefone válidos.");
        return 0;
    }

    idiomaDigitado = document.form.ingles.value;

    if(idiomaDigitado === "selecione")
    {
        alert("Selecione um nivel de inglês válido;");
        return 0;
    }

    idiomaDigitado = document.form.espanhol.value;

    if(idiomaDigitado === "selecione")
    {
        alert("Selecione um nivel de espanho válido.");
        return 0;
    }

    linguagemDigitado = document.form.linguagemProgramacao;

    for(var i = 0; i < linguagemDigitado.length; i++)
    {
        if(linguagemDigitado[i].checked === true)
        {
            selecionou = true;
        }
    }

    if(selecionou !== true)
    {
        a = confirm("Você não selecionou nenhuma lingugam de programação, deseja realmente enviar o formulário?");
        if(a === true)
        {
            document.form.submit();
        }
        else
        {
            return 0;
        }
    }

    document.form.submit();
}
