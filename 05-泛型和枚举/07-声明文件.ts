// declare var $: (params: () => void) => void;
interface JquertInstance {
  html: (param: string) => {};
}
declare function $(param: () => void): void;
declare function $(param: string): JquertInstance;
$(function () {
  $('body').html('<div></div>');
});
