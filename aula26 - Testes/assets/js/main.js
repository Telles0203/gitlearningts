document.getElementById('form-imc').addEventListener('submit', function (evento) {
    evento.preventDefault();
  
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
  
    // Validação do peso
    let peso = parseFloat(pesoInput.value.replace(',', '.'));
    if (isNaN(peso) || peso <= 0) {
      alert('Por favor, digite um peso válido maior que zero e válida');
      pesoInput.value = '';
      pesoInput.focus();
      return;
    }
  
    // Validação da altura
    let altura = parseFloat(alturaInput.value.replace(',', '.'));
    if (isNaN(altura) || altura <= 0) {
      alert('Por favor, digite uma altura válida maior que zero e válida');
      alturaInput.value = '';
      alturaInput.focus();
      return;
    }
  
    const imc = peso / (altura * altura);
  
    let resultadoIMC;
    if (imc < 18.5) {
      resultadoIMC = 'Abaixo do peso';
    } else if (imc < 25) {
      resultadoIMC = 'Peso normal';
    } else if (imc < 30) {
      resultadoIMC = 'Sobrepeso';
    } else if (imc < 35) {
      resultadoIMC = 'Obesidade grau I';
    } else if (imc < 40) {
      resultadoIMC = 'Obesidade grau II';
    } else {
      resultadoIMC = 'Obesidade grau III';
    }
    const p = document.createElement('p');
    
    p.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}</p><p>Resultado: ${resultadoIMC}</p>`;
    const resultado = document.querySelector('#resultado');
    p.classList.add('paragrafo-result')
    resultado.innerHTML =  '';
    resultado.appendChild(p);
  });