import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListApp, ListAppDocument } from './schemas/list-app.schemas';

@Injectable()
export class DemoConnectService {
    constructor(@InjectModel("list_app") 
    private listModel: Model<ListAppDocument>){}

    async findAll(): Promise<ListApp[]> {
        console.log(this.listModel.find());
        
        return this.listModel.find().exec();
      }
}
