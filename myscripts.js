function Project_Show_Field(element) {
    let Project_html_data = ""
    if(element.getAttribute("name") == 'Website') {
        console.log("Website");
        Project_html_data += `<h1 class="button-textcenter">${element.getAttribute("name")}</h1> <div class="button-grid-layout">
        <div class="button-box-1"><img src="./IMAGES/website.jpeg"></div>
        <div class="button-box-2"><img src="./IMAGES/website.jpeg"></div>
        <div class="button-box-3"><img src="./IMAGES/website.jpeg"></div>
        <div class="button-box-4"><img src="./IMAGES/website.jpeg"></div>
        <div class="button-box-5"><img src="./IMAGES/website.jpeg"></div>
        <div class="button-box-6"><img src="./IMAGES/website.jpeg"></div>
        </div>`;
        document.getElementById('Project_Section').innerHTML = Project_html_data
    } else if(element.getAttribute("name") == 'React') {
        console.log("React");
        Project_html_data +=  `<h1 class="button-textcenter">${element.getAttribute("name")}</h1> <div class="button-grid-layout">
        <div class="button-box-1"><img src="./IMAGES/React.jpg"></div>
        <div class="button-box-2"><img src="./IMAGES/React.jpg"></div>
        <div class="button-box-3"><img src="./IMAGES/React.jpg"></div>
        <div class="button-box-4"><img src="./IMAGES/React.jpg"></div>
        <div class="button-box-5"><img src="./IMAGES/React.jpg"></div>
        <div class="button-box-6"><img src="./IMAGES/React.jpg"></div>
        </div>`;
        document.getElementById('Project_Section').innerHTML = Project_html_data
    } else if(element.getAttribute("name") == 'Node.js') {
        console.log("Node.js");
        Project_html_data += `<h1 class="button-textcenter">${element.getAttribute("name")}</h1> <div class="button-grid-layout">
        <div class="button-box-1"><img src="./IMAGES/node_js.jpg"></div>
        <div class="button-box-2"><img src="./IMAGES/node_js.jpg"></div>
        <div class="button-box-3"><img src="./IMAGES/node_js.jpg"></div>
        <div class="button-box-4"><img src="./IMAGES/node_js.jpg"></div>
        <div class="button-box-5"><img src="./IMAGES/node_js.jpg"></div>
        <div class="button-box-6"><img src="./IMAGES/node_js.jpg"></div>
        </div>`;
        document.getElementById('Project_Section').innerHTML = Project_html_data
    }
}
document.getElementsByName('Website')[0].click();