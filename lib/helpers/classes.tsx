function classes(...names:(string | undefined)[]) {
    //return names.filter(v=>v).join(' ') // 两种写法都可以
    return names.filter(Boolean).join(' ')
}

export default classes;