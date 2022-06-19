import { Logger } from "@/demo1/core/ports/Logger";

export class AppointmentCreate {
  constructor(private logger: Logger) {}

  execute() {
    this.logger.debug("AppointmentCreate say's hello");
  }
}
