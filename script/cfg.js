document.getElementById("create").addEventListener("click", function () {
    //controlli
    let filename = document.getElementById("filename").value;
    let extension = document.getElementById("extension").value;
    if(filename == ""|| extension == ""){
        document.getElementById("errors").innerHTML = "Error: filename or extension are empty";
        return;
    }
    else{
        document.getElementById("errors").innerHTML = "";
    }

    //Creazione dell'array per il file 
    let size = parseInt(document.getElementById("size").value);
    size *= 1024;
    var data = new Uint8Array(size)
    if(size < 0) size*=-1;
    for (let i = 0; i < size; i++) {
        data[i] = Math.random() * 255;
    }
    let blob = new Blob([data], { type: "application/octet-stream" });

    //Download del file
    filename += '.' + extension;
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});