import Pessoa from './Pessoa.model';

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
          Proprietario: Pessoa,
          numero_do_brinco: Number,
          nome: String,
          nasc: Date,
        },
        { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject(); 
      object.id = _id; 
      return object; 
    }); 
    const Bovino = mongoose.model("bovino", schema); 
    return Bovino;
};
