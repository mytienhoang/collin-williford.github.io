function Solve(val) {
    let v = document.getElementById('res');
    v.value += val;
}
function Result() {
    let num1 = document.getElementById('res').value;
    let num2 = eval(num1);
    document.getElementById('res').value = num2;

}
function Clear() {
    let clearNum = document.getElementById('res');
    clearNum.value = '';
}
function Back() {
    let back = document.getElementById('res');
    back.value = back.value.slice(0,-1);
}