function cadastrase(event){

    
    event.preventDefault();

        if(document.getElementById("nome").value == ""){
            alert("Digite seu nome")
        }
    
        else if(document.getElementById("email").value == ""){
          alert("digite seu email")
        }
    
        else if(document.getElementById("senha").value == ""){
            alert("digite sua senha")
        }
    
        else if(document.getElementById("confisenha").value ==""){
            alert("confirme sua senha")
        }
    
        else if(document.getElementById("confisenha").value != document.getElementById("senha").value){
            alert("digite senhas iguais")
        }
    
        else{
            alert("Usuário cadastrado com sucesso")

            document.getElementById("meuFormulario").submit();
        }
    
    
    }