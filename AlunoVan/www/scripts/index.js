var status = "F", DivAtiva;


function ApresentaOculta(DivAp, Div01, Div02, Div03, Div04) {
    if (document.getElementById(DivAp).style.display = "none") {
        Oculta(Div01, Div02, Div03, Div04);
        Apresenta1(DivAp);
        DivAtiva = DivAp;
    }
}

function Oculta(div1, div2, div3, div4) {
    document.getElementById(div1).style.display = "none";
    document.getElementById(div1).style.visibility = "hidden";
    document.getElementById(div2).style.display = "none";
    document.getElementById(div2).style.visibility = "hidden";
    document.getElementById(div3).style.display = "none";
    document.getElementById(div3).style.visibility = "hidden";
    document.getElementById(div4).style.display = "none";
    document.getElementById(div4).style.visibility = "hidden";
}

function Apresenta1(Div) {
    document.getElementById(Div).style.display = "block";
    document.getElementById(Div).style.visibility = "visible";
}

function Apresenta(Div, div2){
	Oculta(div2);
	altera = document.getElementById(Div);
	altera.style.display = "block";
	altera.style.visibility = "visible";
}

function ApresentaMenu(Div, idImg, EndImgNSelect, EndImgSelect) {
    if (status == "F") {
        if (document.getElementById(Div).style.display = "none") {
            document.getElementById(idImg).src = EndImgSelect;
            document.getElementById(DivAtiva).style.width = "80%";
            document.getElementById(Div).style.display = "block";
            document.getElementById(Div).style.visibility = "visible";
            status = "A";
        }
    }
    else if (status == "A") {
        if (document.getElementById(Div).style.display = "block") {
            document.getElementById(idImg).src = EndImgNSelect;
            document.getElementById(Div).style.display = "none";
            document.getElementById(Div).style.visibility = "hidden";
            document.getElementById(DivAtiva).style.width = "100%";
            status = "F";
        }
    }
}

function TrocaImagem(IdImagem, EndImagem, DivOcAp, DivOc01, DivOc02, DivOc03, DivOc04, img01, img02, img03, img04, EndImg01, EndImg02, EndImg03, EndImg04) {
    document.getElementById(IdImagem).src = EndImagem;
    ApresentaOculta(DivOcAp, DivOc01, DivOc02, DivOc03, DivOc04);
    document.getElementById(img01).src = EndImg01;
    document.getElementById(img02).src = EndImg02;
    document.getElementById(img03).src = EndImg03;
    document.getElementById(img04).src = EndImg04;
}

