// 1. Dados dos funcionários copiados diretamente do seu CSV
const dadosFuncionarios = [
    { nome: "ACIVALDO VASCONCELO SOARES", setor: "PRODUÇÃO", area: "C#2", aniversario: "1994-07-12", dayOff: "" },
    { nome: "ADRIANO DA SILVA FONSECA", setor: "PRODUÇÃO", area: "C#", aniversario: "1984-05-15", dayOff: "" },
    { nome: "AIRTON GOMES", setor: "PRODUÇÃO", area: "", aniversario: "2003-07-28", dayOff: "" },
    { nome: "ALDAIR DE CRUZ DANTAS", setor: "PRODUÇÃO", area: "C#2", aniversario: "1997-10-06", dayOff: "" },
    { nome: "ALESSANDRO DA SILVA DUTRA", setor: "PRODUÇÃO", area: "C#3", aniversario: "2002-08-13", dayOff: "" },
    { nome: "ALESSANDRO DA SILVA GOMES", setor: "PRODUÇÃO", area: "C#12", aniversario: "1999-03-03", dayOff: "2026-03-03" },
    { nome: "ALEXANDRE DA SILVA QUEIROZ", setor: "PRODUÇÃO", area: "C#4", aniversario: "2000-12-13", dayOff: "" },
    { nome: "ALYNE BRUNA BRAZ", setor: "PRODUÇÃO", area: "LABEL MACHIINE", aniversario: "2001-03-16", dayOff: "2026-03-16" },
    { nome: "ANALCIRA BARBOSA LALOR", setor: "PRODUÇÃO", area: "FALL", aniversario: "1979-09-28", dayOff: "" },
    { nome: "ANDRE MARTINS", setor: "PRODUÇÃO", area: "C#12", aniversario: "1978-04-28", dayOff: "" },
    { nome: "ANDRE RIBEIRO", setor: "PRODUÇÃO", area: "INJETORAS", aniversario: "1967-03-30", dayOff: "2026-03-30" },
    { nome: "ANDREZA CARDOSO MARINHO", setor: "PRODUÇÃO", area: "RESPIRADOR", aniversario: "1993-03-05", dayOff: "2026-03-05" },
    { nome: "ANDRIW OLIVEIRA SALVINO", setor: "PRODUÇÃO", area: "FALL", aniversario: "", dayOff: "" },
    { nome: "ARIMACKSON ROLIM DE VASCONCELOS", setor: "PRODUÇÃO", area: "INJETORAS", aniversario: "1981-02-16", dayOff: "" },
    { nome: "BARBABA VIEIRA DA COSTA", setor: "PRODUÇÃO", area: "FALL", aniversario: "2000-11-15", dayOff: "" },
    { nome: "BEATRIZ SOUZA DA COSTA", setor: "PRODUÇÃO", area: "CONSPICUITY", aniversario: "2001-06-24", dayOff: "" },
    { nome: "BRUNO BRITO FREITAS DA SILVA", setor: "PRODUÇÃO", area: "C#5", aniversario: "2002-01-19", dayOff: "2026-01-10" },
    { nome: "BRYAN GAMA PAIVA", setor: "PRODUÇÃO", area: "PVC'S", aniversario: "2000-10-26", dayOff: "" },
    { nome: "CARLA LARRISA", setor: "PRODUÇÃO", area: "SOLDAS", aniversario: "1996-01-28", dayOff: "2025-01-31" },
    { nome: "CARLOS ALEXANDRE GOMES PERREIRA", setor: "PRODUÇÃO", area: "C#4", aniversario: "1991-12-14", dayOff: "" },
    { nome: "CLEONICE MARINHO PINTO", setor: "PRODUÇÃO", area: "FALL", aniversario: "1979-08-17", dayOff: "" },
    { nome: "CRISTIANO FLORENCIO", setor: "PRODUÇÃO", area: "TUNEL SHIRINK", aniversario: "1977-09-30", dayOff: "" },
    { nome: "DANILO RANGEL C. BARBOSA", setor: "PRODUÇÃO", area: "GAWAN - C#6", aniversario: "1995-10-27", dayOff: "" },
    { nome: "DANRLEY DA SILVA COSTA SANTANA", setor: "PRODUÇÃO", area: "FERRAMENTAL", aniversario: "1995-08-08", dayOff: "" },
    { nome: "DAVI DE SOUZA RIBEIRO", setor: "PRODUÇÃO", area: "INJETORAS", aniversario: "2000-02-01", dayOff: "2026-02-16" },
    { nome: "ELIELMA CARVALHO MARTINS", setor: "PRODUÇÃO", area: "FALL", aniversario: "1983-12-05", dayOff: "" },
    { nome: "ELISON ROBERTO EURICO BANDEIRA", setor: "PRODUÇÃO", area: "ALIMENTADOR", aniversario: "2003-01-21", dayOff: "2026-01-24" },
    { nome: "EMANUEL COELHO", setor: "PRODUÇÃO", area: "FACILITADOR", aniversario: "1984-09-02", dayOff: "" },
    { nome: "EMANUEL SERRAO", setor: "PRODUÇÃO", area: "APRENDIZ", aniversario: "2006-01-11", dayOff: "2026-01-09" },
    { nome: "EMMELY BARAUNA", setor: "PRODUÇÃO", area: "LINT ROLLER", aniversario: "2002-03-21", dayOff: "2026-03-21" },
    { nome: "FRANCINETH DE SOUZA", setor: "PRODUÇÃO", area: "FALL", aniversario: "1963-10-18", dayOff: "" },
    { nome: "FRANCISCO HECTOR PANTOJA MESQUITA", setor: "PRODUÇÃO", area: "INJETORAS", aniversario: "2002-01-27", dayOff: "2026-02-24" },
    { nome: "GABRIELA DE MELO RIOS", setor: "PRODUÇÃO", area: "FRIPACK", aniversario: "1997-08-08", dayOff: "" },
    { nome: "GENY COLARES", setor: "PRODUÇÃO", area: "BANCADA MANUAL", aniversario: "1976-12-30", dayOff: "" },
    { nome: "GILVAN RODRIGO BATISTA FROTA", setor: "PRODUÇÃO", area: "FACILITADOR", aniversario: "1985-11-07", dayOff: "" },
    { nome: "GLORIA LOPES DE SOUZA", setor: "PRODUÇÃO", area: "LABEL MACHIINE", aniversario: "2003-05-31", dayOff: "" },
    { nome: "GUILHERME ROGERIO DA SILVA LIMA", setor: "PRODUÇÃO", area: "C#2", aniversario: "2000-11-15", dayOff: "" },
    { nome: "HELENA KELLY RAMOS DE OLIVEIRA", setor: "PRODUÇÃO", area: "RESPIRADOR", aniversario: "1976-12-18", dayOff: "" },
    { nome: "HENNY ALEFF SOUZA", setor: "PRODUÇÃO", area: "CENTRAL DE ETIQUETAS", aniversario: "2005-01-12", dayOff: "2026-01-12" },
    { nome: "HEVERTON ALMEIDA", setor: "PRODUÇÃO", area: "FERRAMENTAL", aniversario: "1984-08-23", dayOff: "" },
    { nome: "ICKSON RODRIGUES COLARES", setor: "PRODUÇÃO", area: "C#1", aniversario: "2004-01-16", dayOff: "2025-01-02" },
    { nome: "IRENE CALDEIRA DE SOUSA", setor: "", area: "FALL", aniversario: "2000-02-14", dayOff: "2026-02-16" },
    { nome: "IRACILDE DA CRUZ CAMPOS", setor: "PRODUÇÃO", area: "FALL", aniversario: "1972-08-19", dayOff: "" },
    { nome: "JOEL LALOR", setor: "PRODUÇÃO", area: "TUNEL SHIRINK", aniversario: "1980-05-19", dayOff: "" },
    { nome: "JOSE ISAIAS FEIJO DOS SANTOS", setor: "PRODUÇÃO", area: "COBRIDEIRA", aniversario: "1983-10-29", dayOff: "" },
    { nome: "JOSE IVAN PALHETA DA CUNHA", setor: "PRODUÇÃO", area: "C#3", aniversario: "1966-03-05", dayOff: "2026-03-05" },
    { nome: "JOSE LUCAS", setor: "PRODUÇÃO", area: "C#4", aniversario: "1999-03-09", dayOff: "" },
    { nome: "JUCLEIDE FAGUNDES SOARES", setor: "PRODUÇÃO", area: "FALL", aniversario: "1976-06-04", dayOff: "" },
    { nome: "JUSINETE VALENTE DA CRUZ", setor: "PRODUÇÃO", area: "FALL", aniversario: "1969-09-19", dayOff: "" },
    { nome: "KETHLEN NAJY DA S.B", setor: "PRODUÇÃO", area: "NEW C1 MAO", aniversario: "1989-01-12", dayOff: "2025-01-12" },
    { nome: "LEANDRO MONTIERO", setor: "PRODUÇÃO", area: "INJETORAS", aniversario: "2002-02-21", dayOff: "2026-02-23" },
    { nome: "LEITICIA MANUELE FREIRE", setor: "PRODUÇÃO", area: "PVC 7", aniversario: "2003-06-04", dayOff: "" },
    { nome: "LIONY OTTO BASTOS MACHADO", setor: "PRODUÇÃO", area: "FACILITADOR", aniversario: "1992-03-15", dayOff: "2026-03-15" },
    { nome: "LUANA GABRIELLE", setor: "PRODUÇÃO", area: "BANCADA MANUAL", aniversario: "2000-01-01", dayOff: "2025-01-03" },
    { nome: "LUCAS MENDES", setor: "PRODUÇÃO", area: "INJETORAS", aniversario: "1999-02-14", dayOff: "2026-02-14" },
    { nome: "LUCIANE MIRANDA", setor: "PRODUÇÃO", area: "FACILITADORA C#", aniversario: "1990-05-20", dayOff: "" },
    { nome: "LUCIANO APOLONIO DE SOUZA", setor: "PRODUÇÃO", area: "GAWAN - C#6", aniversario: "1986-05-15", dayOff: "" },
    { nome: "MALCOM WESLEY", setor: "PRODUÇÃO", area: "C#5", aniversario: "1997-06-29", dayOff: "" },
    { nome: "MARCELO MACHADO MENDONÇA", setor: "PRODUÇÃO", area: "LANGEN - PVC 5", aniversario: "1987-06-19", dayOff: "" },
    { nome: "MARCIA LIMA", setor: "PRODUÇÃO", area: "CONTROLE DE INVENTARIO", aniversario: "1982-08-02", dayOff: "" },
    { nome: "MARCOS EDUARDO PASSOS DINIZ", setor: "PRODUÇÃO", area: "POST IT SCANDIA", aniversario: "2003-01-20", dayOff: "2026-01-24" },
    { nome: "MARIA EDUARDA VIEIRA DE LIMA", setor: "PRODUÇÃO", area: "VACCUM CENTER", aniversario: "2000-11-14", dayOff: "" },
    { nome: "MARIA SONGELA", setor: "PRODUÇÃO", area: "BLISTER VACCUM CENTER", aniversario: "1974-09-07", dayOff: "" },
    { nome: "MARILES MORAES", setor: "PRODUÇÃO", area: "FACILITADORA PVC'S", aniversario: "1980-05-09", dayOff: "" },
    { nome: "MARINA PEREIRA COSTA", setor: "PRODUÇÃO", area: "TUNEL SHIRINK", aniversario: "2001-05-20", dayOff: "" },
    { nome: "MATHEUS FERNANDES BRAZ", setor: "PRODUÇÃO", area: "FERRAMENTAL", aniversario: "1997-11-01", dayOff: "" },
    { nome: "MATHEUS SOUZA DIAS", setor: "PRODUÇÃO", area: "PVC 3", aniversario: "2001-12-21", dayOff: "" },
    { nome: "MAYCON MIRANDA SENA", setor: "PRODUÇÃO", area: "C#2", aniversario: "1998-03-18", dayOff: "2026-03-18" },
    { nome: "MIGUEL ANGEL GARCIA YENDEZ", setor: "PRODUÇÃO", area: "POST IT SCANDIA", aniversario: "2002-12-11", dayOff: "" },
    { nome: "MOISES BRITO DOS SANTOS", setor: "PRODUÇÃO", area: "FABRIMA / C2", aniversario: "2000-09-28", dayOff: "" },
    { nome: "NICOLLE THIPHANY SOUZA MAZZONI", setor: "PRODUÇÃO", area: "FRIPACK", aniversario: "2003-04-30", dayOff: "" },
    { nome: "PATRICIA BRASIL DE SÁ", setor: "PRODUÇÃO", area: "RESPIRADOR", aniversario: "1982-12-17", dayOff: "" },
    { nome: "PATRICIA DOS SANTOS MARQUES", setor: "PRODUÇÃO", area: "FALL", aniversario: "1988-06-20", dayOff: "" },
    { nome: "PAULO MENEZES", setor: "PRODUÇÃO", area: "POST IT SCANDIA", aniversario: "2002-11-04", dayOff: "" },
    { nome: "PAULO SOARES LIMA", setor: "PRODUÇÃO", area: "LINT ROLLER", aniversario: "1969-04-30", dayOff: "" },
    { nome: "PETERSON DE SOUZA SILVA", setor: "PRODUÇÃO", area: "C#4", aniversario: "1986-11-21", dayOff: "" },
    { nome: "RAILSON BERÇA", setor: "PRODUÇÃO", area: "LANGEN - PVC 5", aniversario: "1989-05-10", dayOff: "" },
    { nome: "RALYSON DOS SANTOS", setor: "PRODUÇÃO", area: "PVC 1", aniversario: "2002-06-17", dayOff: "" },
    { nome: "RAQUEL DE MELO", setor: "PRODUÇÃO", area: "FRIPACK", aniversario: "2003-10-15", dayOff: "" },
    { nome: "RAYSSA MONIQUE BELIZARIO DE FREITAS", setor: "PRODUÇÃO", area: "APRENDIZ", aniversario: "2004-08-28", dayOff: "" },
    { nome: "REGIANE DA CUNHA NERY", setor: "PRODUÇÃO", area: "FALL", aniversario: "1981-12-15", dayOff: "" },
    { nome: "ROSANA DE SOUZA VIERA", setor: "PRODUÇÃO", area: "FALL", aniversario: "1970-06-19", dayOff: "" },
    { nome: "ROSIMEIRE NASCIMENTO", setor: "PRODUÇÃO", area: "LINT ROLLER", aniversario: "2000-11-12", dayOff: "" },
    { nome: "SAMEA DA TRINDADES VALENTE", setor: "PRODUÇÃO", area: "RESPIRADOR", aniversario: "1993-08-30", dayOff: "" },
    { nome: "SAMUEL CRUZ DE OLIVEIRA", setor: "PRODUÇÃO", area: "COBRIDEIRA", aniversario: "1992-05-15", dayOff: "" },
    { nome: "SIRLENE PEREIRA DA SILVA", setor: "PRODUÇÃO", area: "SOLDAS", aniversario: "1982-10-14", dayOff: "" },
    { nome: "SORAIA SOUZA DE OLIVEIRA", AREA: "FALL", aniversario: "1988-06-15", dayOff: "" },
    { nome: "STHEPHANIE OLIVEIRA DE SOUZA", setor: "PRODUÇÃO", area: "FALL", aniversario: "1993-03-23", dayOff: "2026-03-23" },
    { nome: "THENNY MAZZONI", setor: "PRODUÇÃO", area: "CONTROLE DE INVENTARIO", aniversario: "1980-04-27", dayOff: "" },
    { nome: "VALDERCLEY LIMA", setor: "PRODUÇÃO", area: "C#4", aniversario: "1979-03-19", dayOff: "2026-03-19" },
    { nome: "VALDIZA ALVES SOUZA", setor: "PRODUÇÃO", area: "FALL", aniversario: "1980-02-14", dayOff: "2026-02-19" },
    { nome: "VICTOR MATTHAUS PRAIA CAVALCANTE", setor: "PRODUÇÃO", area: "COBRIDEIRA", aniversario: "1999-04-07", dayOff: "" },
    { nome: "VIVIANE ALBUQUERQUE ALVARENGA", setor: "PRODUÇÃO", area: "LINT ROLLER", aniversario: "2003-07-05", dayOff: "" },
    { nome: "WALERIA BARBOSA DOS SANTOS PINTO", setor: "PRODUÇÃO", area: "INJETORAS", aniversario: "1985-01-20", dayOff: "2026-01-19" }
];

// 2. Preenche o <select> com os nomes do arquivo local
function carregarFuncionarios() {
    const select = document.getElementById('nomeFuncionario');
    if (!select) return;
    
    select.innerHTML = '<option value="">Selecione seu nome...</option>';
    
    // Ordena de forma alfabética para ficar bonito
    const ordenados = [...dadosFuncionarios].sort((a, b) => a.nome.localeCompare(b.nome));

    ordenados.forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario.nome;
        option.textContent = `${usuario.nome} - ${usuario.area || 'PRODUÇÃO'}`;
        select.appendChild(option);
    });
}

// 3. Salva um agendamento extra feito manualmente no site
function salvarAgendamento() {
    const nome = document.getElementById('nomeFuncionario').value;
    const data = document.getElementById('dataFolga').value;

    if (!nome || !data) {
        alert("Preencha todos os campos!");
        return;
    }

    const novoAgendamento = { nome: nome, data: data };

    const salvos = JSON.parse(localStorage.getItem('dayOffList')) || [];
    salvos.push(novoAgendamento);
    localStorage.setItem('dayOffList', JSON.stringify(salvos));

    document.getElementById('dataFolga').value = '';
    document.getElementById('nomeFuncionario').value = '';

    renderizarPainelChefe();
}

// 4. Monta as listas separando por Hoje, Amanhã e Próximos Dias
function renderizarPainelChefe() {
    const listaItens = document.getElementById('listaItens');
    if (!listaItens) return;

    listaItens.innerHTML = `
        <div style="margin-top: 20px; font-family: sans-serif;">
            <h3 style="color: #d9534f; border-bottom: 2px solid #d9534f; padding-bottom: 5px;">☀️ Quem folga HOJE</h3>
            <ul id="folgaHoje" style="list-style: none; padding-left: 5px; margin-bottom: 20px;"></ul>

            <h3 style="color: #f0ad4e; border-bottom: 2px solid #f0ad4e; padding-bottom: 5px;">🌅 Quem folga AMANHÃ</h3>
            <ul id="folgaAmanha" style="list-style: none; padding-left: 5px; margin-bottom: 20px;"></ul>

            <h3 style="color: #0275d8; border-bottom: 2px solid #0275d8; padding-bottom: 5px;">📅 Próximos Day Offs (Esta semana / Próxima)</h3>
            <ul id="folgaFutura" style="list-style: none; padding-left: 5px;"></ul>
        </div>
    `;

    const ulHoje = document.getElementById('folgaHoje');
    const ulAmanha = document.getElementById('folgaAmanha');
    const ulFutura = document.getElementById('folgaFutura');

    // Pegar a data atual do sistema (zerando horas)
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);

    // Junta os dados fixos do arquivo + o que for adicionado via tela (localStorage)
    const agendamentosManuais = JSON.parse(localStorage.getItem('dayOffList')) || [];
    
    // Lista para centralizar todos os processos
    let todasAsFolgas = [];

    // Processa a lista do arquivo CSV
    dadosFuncionarios.forEach(f => {
        let dataAlvo = null;

        // Se tiver uma data de Day Off específica no ano atual (2026)
        if (f.dayOff && f.dayOff.startsWith("2026")) {
            dataAlvo = new Date(f.dayOff + 'T00:00:00');
        } 
        // Caso contrário, tenta estimar pelo aniversário usando o ano corrente
        else if (f.aniversario) {
            const mesDia = f.aniversario.substring(5); // Pega o MM-DD
            if (mesDia) {
                dataAlvo = new Date(`${hoje.getFullYear()}-${mesDia}T00:00:00`);
            }
        }

        if (dataAlvo) {
            todasAsFolgas.push({
                nome: f.nome,
                area: f.area || 'PRODUÇÃO',
                data: dataAlvo
            });
        }
    });

    // Processa os agendamentos feitos direto no formulário da tela
    agendamentosManuais.forEach(f => {
        todasAsFolgas.push({
            nome: f.nome,
            area: "Agendado p/ Site",
            data: new Date(f.data + 'T00:00:00')
        });
    });

    // Distribui nas colunas corretas olhando o calendário atual
    todasAsFolgas.forEach(item => {
        const dataTime = item.data.getTime();
        const dataFormatada = item.data.toLocaleDateString('pt-BR');

        const li = document.createElement('li');
        li.style.padding = '8px 0';
        li.style.borderBottom = '1px dashed #eee';
        li.innerHTML = `<strong>${item.nome}</strong> (${item.area}) — ${dataFormatada}`;

        if (dataTime === hoje.getTime()) {
            ulHoje.appendChild(li);
        } else if (dataTime === amanha.getTime()) {
            ulAmanha.appendChild(li);
        } else if (dataTime > amanha.getTime()) {
            // Mostra folgas futuras dentro de uma janela de 15 dias para não entupir a tela
            const limiteFuturo = new Date(hoje);
            limiteFuturo.setDate(limiteFuturo.getDate() + 15);

            if (dataTime <= limiteFuturo.getTime()) {
                ulFutura.appendChild(li);
            }
        }
    });

    // Caso alguma seção fique vazia, coloca um aviso sutil
    if (ulHoje.children.length === 0) ulHoje.innerHTML = '<li style="color: #999; font-style: italic">Nenhuma folga para hoje.</li>';
    if (ulAmanha.children.length === 0) ulAmanha.innerHTML = '<li style="color: #999; font-style: italic">Nenhuma folga para amanhã.</li>';
    if (ulFutura.children.length === 0) ulFutura.innerHTML = '<li style="color: #999; font-style: italic">Sem folgas programadas para os próximos dias.</li>';
}

// 5. Inicialização do sistema ao abrir a página
window.onload = () => {
    carregarFuncionarios();
    renderizarPainelChefe();
};

const addBtn = document.getElementById('addBtn');
if (addBtn) {
    addBtn.addEventListener('click', salvarAgendamento);
}