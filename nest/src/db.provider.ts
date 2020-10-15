import { createConnection, Connection } from "typeorm";


export const databaseProviders = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'dailis',
        password: 'dailissdb',
        database: 'dailis',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }),
    },
  ];