import { Logger } from "@/demo1/core/ports/Logger";

export class LoggerAdapter implements Logger {
  debug(...args: any[]) {
    console.log(...args, "from LoggerAdapter");
  }
}
