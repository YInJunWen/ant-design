import { TreeNode } from '../../vc-tree'
export default {
  name: 'TreeNode',
  props: {
    ...TreeNode.props,
    value: String,
  },
  render () {
    return this
  },
}
