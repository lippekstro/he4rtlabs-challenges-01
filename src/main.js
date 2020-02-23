function calcular() {
	var horas = parseInt(document.getElementById("horas").value);
	var dias = parseInt(document.getElementById("dias").value);
	var ferias = parseInt(document.getElementById("ferias").value);
	var valor = parseFloat(document.getElementById("valor").value);

	if (isNaN(horas) || isNaN(dias) || isNaN(ferias) || isNaN(valor)) {
		alert("PREENCHE TUDO AI CHAMPS");
		return false;
	} else {
		var valorHora = (valor / (dias * 4 * horas)) + ((ferias * dias * horas));
		if (valorHora < 0) {
			alert("VALORES NEGATIVOS NAO NÉ MEU PATRÃO");
			return false;
		} else if (horas < 1) {
			alert("TRABALHA PELO MENOS 1 HORA AÍ PARÇA");
			return false;
		} else if (dias < 1) {
			alert("VAMO TRABALHAR PELO MENOS 1 DIA BIXO");
			return false;
		} else if (valor < 1) {
			alert("NAO TRABALHE DE GRAÇA, VALORIZE-SE");
			return false;
		} else {
			document.getElementById("resultado").innerHTML = "R$ " + valorHora.toFixed(2);
		}
	}
}

