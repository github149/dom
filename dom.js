window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        }
        if (arguments.length === 2) {
            if (name instanceof Object) {
                //如果是对象,遍历对昂，设置属性和属性值
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
            if (typeof name === 'string') {
                return node.style[name]
            }
        }

    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn.call(null, nodes[i])
        }
    }

}