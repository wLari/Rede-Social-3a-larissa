const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json' 

async function visualizarinformacoesGlobais() {
    const res = await fetch(url) 
    const dados = res.json()
    console.log(dados);
    const paragrafo = document.createElement('p') 
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Vocẽ sabia o mundo que tem ${dados.total_pessoas_mundo} de pessoas e
    que aoroximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e
    passam em media ${dados.tempo_medio} horas conectadas.'
    console.log(paragrafo)

vizualizarinformacoesGlobais()