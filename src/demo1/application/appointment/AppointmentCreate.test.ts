import { mock } from "jest-mock-extended";
import { Logger } from "@/demo1/core/ports/Logger";
import { AppointmentCreate } from "./AppointmentCreate";

test("example", () => {
  const logger = mock<Logger>();

  new AppointmentCreate(logger).execute();

  expect(logger.debug).toHaveBeenCalled();
});
