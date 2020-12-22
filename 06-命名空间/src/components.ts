namespace Components {
  export interface User {
    name: string;
  }
  export namespace ChildComponent {
    export class ChildTest {
      constructor() {
        const inputObj = document.createElement('input');
        inputObj.value = 'kaiwin';
        document.body.appendChild(inputObj);
      }
    }
  }
  export class Header {
    constructor() {
      const divObj = document.createElement('div');
      divObj.innerText = 'Header';
      document.body.appendChild(divObj);
    }
  }
  export class Main {
    constructor() {
      const divObj = document.createElement('div');
      divObj.innerText = 'Main';
      document.body.appendChild(divObj);
    }
  }
  export class Footer {
    constructor() {
      const divObj = document.createElement('div');
      divObj.innerText = 'Footer';
      document.body.appendChild(divObj);
    }
  }
}
