let textarea= document.getElementById("textarea");
textarea.addEventListener("input", function(){
    let text=this.value;
    document.getElementById("char").innerHTML=text.length;
    text=text.trim();
    let words= text.split(" ");
    let cleanlist= words.filter(function(e){
        return e != "";
    });
    document.getElementById("word").innerHTML=cleanlist.length;

})