function carregar(pagina){

  var corpo = $('#corpo');

  corpo.empty();
  corpo.load(pagina);
};

function delProva(){
    //função para deletar um campo de prova
    var qte_provas = $("#qte_provas");

    if(qte_provas.val() > 1){
        var body_prova = $("#b_prova"+qte_provas.val());
        var qte_atual_provas = parseInt(qte_provas.val()) - 1; //se entrou nessa função, então vc está add uma prova. qte_provas += qte_provas+1
        //
        body_prova.remove();
        //
        qte_provas.val(qte_atual_provas); //tira 1 da quantidade total de provas
    }
    else{
        alert("Não é possível excluir mais provas!");
    }
}

function addProva(){
    //função para add uma prova
    var corpo_provas = $("#provas");
    var qte_provas = $("#qte_provas");
    var qte_atual_provas = parseInt(qte_provas.val()) + 1; //se entrou nessa função, então vc está add uma prova. qte_provas += qte_provas+1
    var texto = '';
    //
    qte_provas.val(qte_atual_provas); //add 1 a quantidade total de provas
    //
    texto += '<div id="b_prova'+qte_atual_provas+'">';
    texto += '<div class="row">';
    texto +=    '<div class="col-md-12">';
    texto +=        '<div class="input-group">';
    texto +=            '<span class="input-group-addon" id="basic-addon1">P'+qte_atual_provas+':</span>';
    texto +=            '<input id="n_p'+qte_atual_provas+'" type="text" class="form-control" placeholder="P'+qte_atual_provas+'" aria-describedby="basic-addon1">';
    texto +=        '</div>';
    texto +=    '</div>';
    texto += '</div>';
    //
    texto += '<div class="row"><p></p></div>';
    texto += '</div>';
    //
    corpo_provas.append(texto);
}

function delTrab(){
    //função para deletar um campo de prova
    var qte_trabs = $("#qte_trabs");

    if(qte_trabs.val() > 1){
        var body_trab = $("#b_trabs"+qte_trabs.val());
        var qte_atual_trabs = parseInt(qte_trabs.val()) - 1; //se entrou nessa função, então vc está add uma prova. qte_provas += qte_provas+1
        //
        body_trab.remove();
        //
        qte_trabs.val(qte_atual_trabs); //tira 1 da quantidade total de provas
    }
    else{
        alert("Não é possível excluir mais Trabalhos!");
    }
}

function addTrab(){
    //
    //função para add um trab
    //
    var corpo_trab = $("#trabalhos");
    var qte_trabs = $("#qte_trabs");
    var qte_atual_trabs = parseInt(qte_trabs.val()) + 1; //se entrou nessa função, então vc está add um trab. qte_trab += qte_trab+1
    var texto = '';
    //
    qte_trabs.val(qte_atual_trabs); //add 1 a quantidade total de provas
    //
    texto += '<div id="b_trabs'+qte_atual_trabs+'">';
    texto += '<div class="row">';
    texto +=    '<div class="col-md-12">';
    texto +=        '<div class="input-group">';
    texto +=            '<span class="input-group-addon" id="basic-addon1">T'+qte_atual_trabs+':</span>';
    texto +=            '<input id="n_t'+qte_atual_trabs+'" type="text" class="form-control" placeholder="T'+qte_atual_trabs+'" aria-describedby="basic-addon1">';
    texto +=        '</div>';
    texto +=    '</div>';
    texto += '</div>';
    //
    texto += '<div class="row"><p></p></div>';
    texto += '</div>';
    //
    corpo_trab.append(texto);
}


function envia(ordem){

    if(ordem == 1){ //case 1

        var hd = $("#hd").val();
        var cred = $("#cred").val();
        var hf = $("#hf").val();
        var retorno = $("#retorno");
        retorno.empty();

        case_1(hd,cred,hf,retorno);
    }
    //
    else if(ordem == 2){ //case 2
        //alert($("#qte_trabs").val());

        case_2();

    }
	else if(ordem == 3){
		var a11, a12, a13;
		
		//alert(a11);
		
		case_3();
	}
}
//
function case_2(){
    //
    var retorno = $("#retorno");
    retorno.empty();
    //
    var texto = "";
    var qte_trabs = parseInt($("#qte_trabs").val());
    var qte_provas = parseInt($("#qte_provas").val());
    var peso_p = parseFloat($("#peso_p").val());
    var peso_t = parseFloat($("#peso_t").val());
    var notas_p = 0;
    var notas_t = 0;
    //
    var nota_final = 0;
    //
    //vou adicionar as notas das provas e dos trabs às variaveis notas_p e notas_t
    //
    for(var i = 1;i<=qte_provas;i++){
        notas_p += parseFloat($("#n_p"+i).val());
    }
    for(var i = 1;i<=qte_trabs;i++){
        notas_t += parseFloat($("#n_t"+i).val());
    }
    //
    nota_final = ((notas_p/qte_provas)*peso_p) + ((notas_t/qte_trabs)*peso_t);
    //
    texto += "A média final é: " + (nota_final).toFixed(4);
    //
    retorno.append(texto);
}
//
function case_1(hd,cred,hf){

        var texto = '';
        var total = cred * 15; //total de horas aula por semestre
        var total_faltas_permitidas = parseInt(total - (total*0.7));
        var faltas_disp = total_faltas_permitidas - hf;

        if(faltas_disp < 0)
            texto = "Você já reprovou por falta.";
        else
            texto = "Você ainda pode ter " + faltas_disp + " faltas";

        retorno.append(texto);

}

function case_3(){
	
	var m = [];
	var retorno = $("#retorno");
    retorno.empty();
	var montantet = 0, menor, maior;
	
	for(var i = 0; i < 3; i++){
		m[i] = []; 
		for(var j = 0; j < 3; j++){
			m[i][j] = parseFloat($("#a"+(i+1)+(j+1)).val());
			//retorno.append(m[i][j]+"<br>");
		}
	}
	
	menor = m[0][0];
	for(i = 1; i < 3; i++){
		if(menor > m[i][0])
			menor = m[i][0];
	}
	montantet -= menor;
	//retorno.append(menor);
	
	menor = m[0][1];
	maior = m[0][1];
	for(i = 1; i < 3; i++){
		if(maior < m[i][1])
			maior = m[i][1];
		if(menor > m[i][1])
			menor = m[i][1];
	}
	montantet += maior;
	montantet -= menor;
	//retorno.append(maior+"<br>");
	//retorno.append(menor);
	
	maior = m[0][2];
	for(i = 1; i < 3; i++){
		if(maior < m[i][2])
			maior = m[i][2];
	}
	
	montantet += maior;
	
	if(montantet < 0)
		retorno.append("O seu déficit é de "+montantet);
	else
		retorno.append("O seu lucro é de "+montantet);
}
