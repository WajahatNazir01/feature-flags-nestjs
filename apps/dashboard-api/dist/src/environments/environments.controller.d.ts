import { EnvironmentsService } from './environments.service';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDto } from './dto/update-environment.dto';
export declare class EnvironmentsController {
    private readonly environmentsService;
    constructor(environmentsService: EnvironmentsService);
    create(createEnvironmentDto: CreateEnvironmentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEnvironmentDto: UpdateEnvironmentDto): string;
    remove(id: string): string;
}
