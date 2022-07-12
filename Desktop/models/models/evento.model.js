import Bovino from './Bovino.model';

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
          nome: String,
          data: Date,
          concluido: Boolean,
          descricao: String,
          notificacao: Date,
          Bovinos: Bovino,
        },
        { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject(); 
      object.id = _id; 
      return object; 
    }); 
    const Evento = mongoose.model("evento", schema); 
    return Evento;
};
