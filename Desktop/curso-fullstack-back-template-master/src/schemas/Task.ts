import { model, Schema, Document } from 'mongoose';
import { userInterface } from './user';

export enum StatusEnum {
  OPEN = 'OPEN',
  FINISHED = 'FINISHED',
}
export interface TaskInterface extends Document {
  description: string;
  estatus: StatusEnum;
  conclused: Date;
  responsible: userInterface;
  creation: Date;
}
//
const TaskSchema = new Schema({
  description: {
    type: String,
    unique: true,
    required: [true, 'nome obrigatório'],
  },
  status: {
    type: String,
    validade: {
      validator: (value) => {
        if (value === StatusEnum.OPEN || value === StatusEnum.FINISHED) {
          return true;
        // eslint-disable-next-line no-else-return
        } else {
          return false;
        }
      },
      message: (props) => "S{props.value}' nao e um status valido' ",
    },
    required: [true, 'status obrigatório'],
    uppercase: true,
  },
  concluded: {
    type: Date,
  },
  responsible: {
    type: Schema,
    ref: 'User',
    required: [true, 'Responsável obrigatório'],
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});
export default model<TaskInterface>('Task', TaskSchema);
