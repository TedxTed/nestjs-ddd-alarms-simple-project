import { Module } from "@nestjs/common";
import { OrmAlarmPersistenceModule } from "./persistence/orm/orm-persistence.module";
import { InMemoryAlarmPersistenceModule } from "./persistence/in-memory/in-memory-persistence.module";

@Module({})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceMoudule = 
        driver === 'orm'
          ? OrmAlarmPersistenceModule
          : InMemoryAlarmPersistenceModule

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceMoudule],
      exports: [persistenceMoudule]
    }
  }
}
