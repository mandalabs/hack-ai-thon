import * as migration_20260224_051202 from './20260224_051202';

export const migrations = [
  {
    up: migration_20260224_051202.up,
    down: migration_20260224_051202.down,
    name: '20260224_051202'
  },
];
