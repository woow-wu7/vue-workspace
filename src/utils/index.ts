export const getRoutesModule = function() {
  let modules: any[] = []
  const requireContext = require.context('../router', false, /\.ts$/)

  requireContext.keys().forEach(module => {
    if (module === './index.ts') {
      return
    }
    modules = modules.concat(requireContext(module).default)
  })
  return modules
}

export const getSelectOptions = () => {
  return getRoutesModule().map(obj => {
    return {
      value: obj.path.slice(1),
      label: obj.selectName
    }
  })
}