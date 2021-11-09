import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
    
    async getTasks() {
        return await this.taskModel.find();    
    }

    async getTask(id: string) {
        await this.taskModel.findById(id);
    }

    async createTask(task: CreateTaskDto){
        const  newTask = new this.taskModel(task);
        return await newTask.save();   
    }
    
}
