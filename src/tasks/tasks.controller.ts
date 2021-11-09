import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from '../../dist/tasks/interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') id: string) {
        return this.tasksService.getTask(id);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<Task>{
        return this.tasksService.createTask(task);
    }

}
