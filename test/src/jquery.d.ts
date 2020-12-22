// Es6 模块化

declare module 'jquery' {
  interface JquertInstance {
    html: (html: string) => JquertInstance;
  }
  // 混合类型
  function $(readyFunc: () => void): void;
  function $(selector: string): JquertInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
