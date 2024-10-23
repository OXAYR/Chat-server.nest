import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EndUserDocument = HydratedDocument<EndUser>;

@Schema()
export class EndUser {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;
}

export const EndUserSchema = SchemaFactory.createForClass(EndUser);
