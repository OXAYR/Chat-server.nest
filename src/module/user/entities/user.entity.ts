import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type EndUserDocument = HydratedDocument<EndUser>;

@Schema()
export class EndUser {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Chat' }] })
  chatIds: MongooseSchema.Types.ObjectId[];
}

export const EndUserSchema = SchemaFactory.createForClass(EndUser);
