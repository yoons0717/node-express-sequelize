import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface TutorialAttributes {
  id?: number;
  title: string;
  description: string;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface TutorialInterface extends Model<TutorialAttributes>, TutorialAttributes {}
export class User extends Model<TutorialInterface, TutorialAttributes> {}

export type tutorialStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TutorialInterface;
};

export function tutorialFactory(sequelize: Sequelize): tutorialStatic {
  return <tutorialStatic>sequelize.define('tutorial', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
}
