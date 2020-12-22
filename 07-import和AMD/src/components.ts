export class Header {
  constructor() {
    let divObj = document.createElement('div');
    divObj.innerText = 'Header';
    document.body.appendChild(divObj);
  }
}

export class Main {
  constructor() {
    let divObj = document.createElement('div');
    divObj.innerText = 'Main';
    document.body.appendChild(divObj);
  }
}

export class Footer {
  constructor() {
    let divObj = document.createElement('div');
    divObj.innerText = 'Footer';
    document.body.appendChild(divObj);
  }
}
