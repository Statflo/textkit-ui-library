// eslint-disable-next-line functional/functional-parameters
export function classNames(...classes: Array<string | boolean>) {
  return classes.filter(Boolean).join(' ');
}
