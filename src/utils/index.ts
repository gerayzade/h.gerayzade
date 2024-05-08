import _template from 'lodash/template'

export const template = (string: string, params: Record<string, string>) => _template(string, {
  interpolate: /\{\{([\s\S]+?)\}\}/g,
})(params)
