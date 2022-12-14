import React, {Component} from 'react';
/**import jsPDF from "jspdf";

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


export default class Export extends Component {
    constructor(props:any) {
        super(props);
    }

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas:any) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
        ;
    }

    render() {
        return (<div>
            <div className="mb5">
                <button onClick={this.printDocument}>Print</button>
            </div>
            <div id="divToPrint" className="mt4 download" >
                <div>Note: Here the dimensions of div are same as A4</div>
                <div>You Can add any component here</div>
            </div>
        </div>);
    }
}**/