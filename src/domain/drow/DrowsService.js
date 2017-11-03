export default class DrowsService{
    
        constructor(resource){
            this._resource = resource('drows{/id}');
        }
    
        lista(){
    
            return this._resource.query().then(res => res.json(), err =>{
                console.log(err);
                throw new Error('Não foi possível carregar as fotos.');
            });
    
        }
    
        cadastra(drow){

            if(drow.id){
                return this._resource.update({id: drow.id}, drow);
            }else{
                return this._resource.save(drow);
            }
    
        }
    
        apaga(id){
    
            return this._resource.delete({id}).then(null, err =>{
                console.log(err);
                throw new Error('Não foi possível remover a foto.');
            });
    
        }
    
        busca(id){
            return this._resource.get({id}).then(res => res.json());
        }
    
    }