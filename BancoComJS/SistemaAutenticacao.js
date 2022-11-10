export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.eAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static eAutenticavel(autenticavel){
       return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}