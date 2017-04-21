import { Injectable } from '@angular/core';

interface IUser{
  id:string;
  name:string;
  email:string;
}
class User implements IUser{
  id:string;
  name:string;
  email:string;
  user:Array<IUser>;
  constructor(id:string,name:string,email:string,user?:Array<IUser>){
    this.id=id;
    this.name=name;
    this.email=email;
    this.user=user || [];
  } 

  addUser(user:IUser){
    this.user.push(user);
  }
}

@Injectable()
export class DbService {
user:Array<IUser>=[
    new User('1','AAA','aaa@gmail.com'),
    new User('2','BBB','bbb@gmail.com'),
    new User('3','CCC','ccc@gmail.com'),
    new User('4','DDD','ddd@gmail.com'),
    new User('5','EEE','eee@gmail.com')
  ];
  constructor() {}
  getData(){
    return this.user;
  }

}
