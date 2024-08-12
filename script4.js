var form = document.getElementById('frm');
form.onsubmit = function()
{
    var u_num = document.getElementById("u_tab").value;
    var r = document.getElementById("result");
    var i;
    for(i = 1; i <= 10; i++)
    {
        r.innerHTML  += u_num*i+"<br>";
    }
    return false;
}