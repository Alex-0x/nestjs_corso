import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Corsi } from './corsi/entities/corsi.entity';
import { Docenti } from './docenti/entities/docenti.entity';

let instance: DataSource | null = null;

const getInstance = () => {
  if (!!instance === false) {
    instance = new DataSource({
      type: 'mysql',
      host: process.env.database_host,
      port: 3306,
      username: process.env.database_username,
      password: process.env.database_password,
      database: process.env.database_database,
      logging: false,
      synchronize: true,
      // entities: ["src/entities/*.js"],
      entities: [Corsi, User, Docenti],
    });
  }
  return instance;
};

const initAppDataSource = async (): Promise<DataSource | null> => {
  return new Promise((resolve, reject) => {
    const dataSource = getInstance();

    // establish database connection
    dataSource
      .initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
        return resolve(dataSource);
      })
      .catch((err) => {
        console.error('Error during Data Source initialization:', err);
        return reject(null);
      });
  });
};

export { initAppDataSource, getInstance };
export default initAppDataSource;
