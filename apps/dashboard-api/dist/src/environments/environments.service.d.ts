import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDto } from './dto/update-environment.dto';
export declare class EnvironmentsService {
    create(createEnvironmentDto: CreateEnvironmentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEnvironmentDto: UpdateEnvironmentDto): string;
    remove(id: number): string;
}
