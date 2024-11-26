const a = 1

function fun() {
  const b = 2
  const c = 3
  function fun1() {
    const d = 4
    const e = 5
    function fun2() {
      console.log(a, b, c, d)
    }
    fun2()
  }
  fun1()
}
fun()
console.log(a)

