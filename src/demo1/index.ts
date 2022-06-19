import { AppointmentCreate } from "@/demo1/application/appointment/AppointmentCreate";
import { container } from "@/demo1/infrastructure/container";

const create = container.resolve<AppointmentCreate>("appointmentCreate");
create.execute();
