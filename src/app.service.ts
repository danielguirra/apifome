import { Injectable } from '@nestjs/common';
import * as fs from 'fs'

let food = []


const foodFiles = fs.readdirSync('./src/food')


fs.readFile(`./src/food/food.json`, 'utf-8', (err, data) => {
  if (err) throw err;
  food.push(JSON.parse(data))
})

@Injectable()
export class AppService {
  getComida(name?): any {
    return food[0][name];
  }
}
