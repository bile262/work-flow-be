import { mongo, Mongoose } from "mongoose";

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ListAppDocument = ListApp & Document;

@Schema()
export class ListApp {
  @Prop()
  _id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const ListAppSchema = SchemaFactory.createForClass(ListApp);