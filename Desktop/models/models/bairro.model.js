import Cidade from './cidade.model';

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
          cidade: Cidade,
          nome: String,
          cepPadrao: Number,
        },
        { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject(); 
      object.id = _id; 
      return object; 
    }); 
    const Bairro = mongoose.model("bairro", schema); 
    return Bairro;
};
