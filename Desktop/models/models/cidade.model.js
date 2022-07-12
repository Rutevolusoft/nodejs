import UnidadeFederativa from './UF.model';
import Bairro from './bairro.model';

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
          codigo: Number,
          nome: String,
          uf: UnidadeFederativa,
          bairros: Bairro,
        },
        { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject(); 
      object.id = _id; 
      return object; 
    }); 
    const Cidade = mongoose.model("cidade", schema); 
    return Cidade;
};
