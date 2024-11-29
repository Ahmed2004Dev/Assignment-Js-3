var NameBook = document.getElementById("namebook");
var Website = document.getElementById("websitein");
var updateButtn = document.getElementById("updBut");
var addButtn = document.getElementById("addBut");

var allbook = [];

function validName(){
    var regexName = /[a-z]{3,}/ ;
    if(regexName.test(NameBook.value) == true){
        document.getElementById("message_leart_name").classList.replace("d-block" , "d-none")
        return true;
    }
    else{
        document.getElementById("message_leart_name").classList.replace("d-none" , "d-block");
        return false;
    }
}

function validUrl(){
    var regexUrl = /^https/ ;
    if(regexUrl.test(Website.value) == true){
        document.getElementById("messge_alert_url").classList.replace("d-block" , "d-none");
        return true;
    }
    else{
        document.getElementById("messge_alert_url").classList.replace("d-none" , "d-block");
        return false;
    }
}

function getvalue() {
    if(validName() == true && validUrl() == true){
        var DataBook = {
            Name: NameBook.value,
            W_site: Website.value,
        };
        localStorage.setItem("all" , JSON.stringify(allbook));
        allbook.push(DataBook);
        clear_input();
        display_data();
    }
};

function clear_input() {
    NameBook.value = "";
    Website.value = "";
};

function display_data(){
    cont_input="";
    for(var i=0 ; i<allbook.length ; i++){
        cont_input += 
        `
        <tr>
            <td id="namebook">${i+1}</td>
            <td id="websitein">${allbook[i].Name}</td>
            <td id="butn_visit">
                <button type="button" class="btn btn-secondary">
                    <a class="button-visit" href="${allbook[i].W_site}" target="_blank">Visit</a>
                </button>
            </td>
            <td id="butn_delet">
                <button onclick="DeleteData(${i})" type="button" class="btn btn-warning">Delet</button>
            </td>
            <td id="butn_update">
                <button onclick="update_data(${i})" type="button" class="btn btn-info">Upadate</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = cont_input;
    localStorage.setItem("all" , JSON.stringify(allbook))
};

if(localStorage.getItem("all")!=null){
    allbook = JSON.parse(localStorage.getItem("all"));
    display_data()
};

function DeleteData(index){
    allbook.splice(index , 1);
    localStorage.setItem("all" , JSON.stringify(allbook))
    display_data()
};

function searchBook(leater){
    cont_input= "" ;
    cont_input="";
    for(var i=0 ; i<allbook.length ; i++){
        if(allbook[i].Name.toLowerCase().includes(leater.toLowerCase().trim())){
            cont_input += 
            `
            <tr>
            <td id="namebook">${i+1}</td>
            <td id="websitein">${allbook[i].Name}</td>
            <td id="butn_visit">
                <button type="button" class="btn btn-secondary">
                    <a class="button-visit" href="${allbook[i].W_site}" target="_blank">Visit</a>
                </button>
            </td>
                <td id="butn_delet">
                    <button onclick="DeleteData(${i})" type="button" class="btn btn-warning">Delet</button>
                </td>
                <td id="butn_update">
                    <button onclick="update_data(${i})" type="button" class="btn btn-info">Upadate</button>
                </td>
            </tr>
            `
        }
    }
    document.getElementById("tbody").innerHTML = cont_input;
};
var data_upadated
function update_data(index_update){
    NameBook.value = allbook[index_update].Name;
    Website.value = allbook[index_update].W_site;
    addButtn.classList.replace("d-block" , "d-none") ;
    updateButtn.classList.replace("d-none" , "d-block") ;
    data_upadated = index_update;
};

function update_data_finish(){
    if(validName() == true && validUrl() == true){
    var DataBook = {
        Name: NameBook.value,
        W_site: Website.value,
    };
    allbook.splice(data_upadated , 1 , DataBook); 
    document.getElementById("tbody").innerHTML = cont_input;
    display_data();
    clear_input();
    addButtn.classList.replace("d-none" , "d-block") ;
    updateButtn.classList.replace("d-block" , "d-none") ;
 }
};





















