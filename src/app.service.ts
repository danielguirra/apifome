import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
let teste

fs.readFile('./src/util/teste.json','utf-8',(err,data)=>{
  if(err)throw err;
  console.log(data)
  teste = data
})
@Injectable()
export class AppService {
  getComida(): string {
    return teste;
  }
}
