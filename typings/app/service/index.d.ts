// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Home from '../../../app/service/home';
import Test from '../../../app/service/Test';
import User from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    home: Home;
    test: Test;
    user: User;
  }
}
