import classes from "../classes";


describe('classes', () => {
  it('接受一个className',()=>{
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受两个className',()=>{
    const result = classes('a','b')
    expect(result).toEqual('a b')
  })
  it('接受 undefined',()=>{
    const result = classes('a',undefined)
    expect(result).toEqual('a')
  })
  it('接受奇怪的值',()=>{
    const result = classes('a',undefined,'中文',false,null)
    expect(result).toEqual('a 中文')
  })
  it('接受不传任何className',()=>{
    const result = classes()
    expect(result).toEqual('')
  })
});