import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = Object.keys(TaskStatus);

  transform(value: any) {
    value = value.toUpperCase();

    if(!this.isValidStatus(value)) {
      throw new BadRequestException(`${value}  is not a valid status`);
    }

    return value;
  }

  private isValidStatus(status: any) {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  }
}