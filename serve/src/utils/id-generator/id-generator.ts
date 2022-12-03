import { randomUUID } from 'crypto';

export class IdGenerator {
  static idGenerator(): string {
    return randomUUID();
  }
}
