import { model, Schema, Document } from 'mongoose';

export interface userInterface extends Document {
    name: string,
    email: string,
    password: string,
    creation: Date,
}

const UserSchema = new Schema({

  name: {
    type: String,
    unique: true,
    required: [true, 'nome obrigatório'],
  },
  email: {
    type: String,
    required: [true, 'e-mail obrigatório'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'senha obrigatória'],
    select: false,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});
export default model<userInterface>('User', UserSchema);
