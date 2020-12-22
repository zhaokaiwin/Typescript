import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import cheerio from 'cheerio';
interface Data {
  title: string;
}
interface ResultData {
  time: number;
  arr: Data[];
}
interface Content {
  [propName: number]: Data[];
}
class Crowller {
  private url = 'http://zhaokaige.com/';
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  getItem(item: string) {
    const $ = cheerio.load(item);
    const arr: Data[] = [];
    const btns = $('.btn');
    btns.map((index, ele) => {
      const title = $(ele).text();
      arr.push({
        title,
      });
    });
    return {
      time: new Date().getTime(),
      arr,
    };
  }

  generateJsonContent(resultData: ResultData) {
    const filePath = path.resolve(__dirname, '../data/crowller.json');
    let everyDataJson: Content = {};
    if (fs.existsSync(filePath)) {
      everyDataJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    everyDataJson[resultData.time] = resultData.arr;
    fs.writeFileSync(filePath, JSON.stringify(everyDataJson));
  }
  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const resultDesc = this.getItem(html);
    this.generateJsonContent(resultDesc);
  }
  constructor() {
    this.initSpiderProcess();
  }
}
const crow = new Crowller();
console.log('kaiwin');
console.log(123);
