function Validar()
{
    var email;
    var senha;

    email = document.getElementById("typeEmailX").value;
    senha = document.getElementById("typePasswordX").value;

    if(email == "admin@admin.adm" && senha == "admin")
    {
        location.href = "index.html";
        alert("Sucesso");

        document.getElementById("LOGADO").textContent = "SAIR";
    }
    else
    {
        alert("ERROU A SENHA");
    }
}
