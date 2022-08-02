function ImageChange(e) {
    if (e.type == "click") {
        const MAX_NUMBER = 4;
        const MIN_NUMBER = 1;
        let imageNumber;   
        let cpuNum;
        do {
        cpuNum = Math.floor (Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);
        imageNumber = `public/image${cpuNum}.png`;
        }
        while (imageNumber == e.target.getAttribute("src"));

        e.target.setAttribute("src",imageNumber);
    }    
}

document.getElementById("socialImage").addEventListener("click",ImageChange);


function addNewRowInTable() {
    const rowSample = document.createElement("tr");
    let columnSample;
    const tableta = document.getElementById("primaryTable");
    for (let i= 1; i<=4; i++) {
        columnSample = document.createElement("td");
        rowSample.appendChild(columnSample);
    }
    tableta.appendChild(rowSample);
}

document.getElementById("addRow").addEventListener("click",addNewRowInTable);


