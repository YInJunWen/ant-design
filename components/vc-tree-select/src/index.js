// export this package's api
import TreeSelect from './Select'
import TreeNode from './TreeNode'
import omit from 'omit.js'
TreeSelect.TreeNode = TreeNode

export default {
  functional: true,
  render (h, context) {
    const { props, listeners, children, data } = context
    const treeSelectProps = {
      ...omit(data, ['attrs']),
      props: {
        ...props,
        children,
        __propsSymbol__: Symbol(),
      },
      on: listeners,
    }
    return <TreeSelect {...treeSelectProps}/>
  },
}
export { TreeNode }
export { SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from './strategies'
