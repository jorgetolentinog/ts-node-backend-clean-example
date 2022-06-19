import { createContainer, asClass, InjectionMode } from "awilix";
import { AppointmentCreate } from "@/demo1/application/appointment/AppointmentCreate";
import { LoggerAdapter } from "@/demo1/infrastructure/adapter/logger/LoggerAdapter";

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

container.register({
  logger: asClass(LoggerAdapter),
  appointmentCreate: asClass(AppointmentCreate),
});
