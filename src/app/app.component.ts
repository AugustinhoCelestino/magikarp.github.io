import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  lang_en = false;
  bg_color: string = '#4b0754';
  tt_color: string = '#6d426d';
  ln_color: string = '#BBB';
  bk_color: string = '#333';
  ns_color: string = '#CCC';
  sc_color: string = '#edf1f2';
  wt_color: string = '#FFFFFF';
  og_color: string = '#fea500';

  ngOnInit(): void {
    this.generateResume();
  }

  generateResume(): void {
    const doc = new jsPDF();
    console.log(doc.getFontList());
    this.addTemplete(doc);
    let _doc_url = doc.output('bloburl');
    document
      .getElementById('resume-iframe')
      ?.setAttribute('src', _doc_url.toString());
  }

  addTemplete(doc: jsPDF): void {
    this.addBackground(doc);
    this.addAvatar(doc);
    this.addBasicInfo(doc);
    this.addPersonalInfo(doc);
    this.addSkills(doc);
    this.addProfile(doc);
    this.addEmploymentPageOne(doc);
    doc.addPage();
    this.addBackground(doc);
    this.addAvatar(doc);
    this.addBasicInfo(doc);
    this.addLanguage(doc);
    this.addEmploymentePageTwo(doc);
  }

  addAvatar(doc: jsPDF): void {
    //doc.addImage('../assets/AVATAR.png', 'png', 12.5, 38, 45.8, 45.8);
    doc.addImage('../assets/AVATAR.png', 'png', 12.5, 38, 45.8, 45.8);
  }

  addBackground(doc: jsPDF): void {
    doc.setFillColor(this.bg_color);
    doc.circle(35, 280, 50, 'F');
    doc.setFillColor(this.sc_color);
    doc.circle(35, 225, 70, 'F');
    doc.rect(0, 40, 70, 220, 'F');
    doc.setFillColor(this.bg_color);
    doc.circle(35, -10, 70, 'F');
    doc.setFillColor(this.wt_color);
    doc.circle(35, 60, 25, 'F');
    doc.setFillColor(this.og_color);
    doc.circle(35, 60, 23, 'F');
    doc.setFillColor(this.wt_color);
    doc.rect(70, 0, 140, 300, 'F');
  }

  addBasicInfo(doc: jsPDF): void {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor('#fff');
    doc.text('Augustinho Celestino', 6, 15);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Sr IT Develop | Full Stack', 15, 25);
    doc.text('Angular | JAVA | C# | .Net | AWS', 9, 30);
  }

  addPersonalInfo(doc: jsPDF): void {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(this.tt_color);
    if (this.lang_en) {
      doc.text('Personal Details', 6, 94);
    } else {
      doc.text('Dados Pessoais', 6, 94);
    }
    doc.setFillColor(this.ln_color);
    doc.line(6, 98, 64, 98, 'F');
    doc.setFontSize(10);
    doc.setTextColor(this.bk_color);
    doc.text('Augustinho Celestino', 15, 106);
    doc.text('de Freitas Junior', 15, 110);
    doc.text('augustinhocelestino@gmail.com', 15, 118);
    doc.text('+55 (12) 98858-3383', 15, 127);
    //doc.text('São José dos Campos - SP', 13, 136);
    doc.text('São Paulo - SP', 15, 136);
    doc.text('/augustinhocelestino', 15, 146);

    doc.setFillColor(this.tt_color);

    doc.addImage('../assets/mini_avatar.png', 'png', 5, 104, 5, 5);
    doc.addImage('../assets/e-mail.png', 'png', 5, 115, 5, 5);
    doc.addImage('../assets/phone.png', 'png', 5, 124, 4, 4);
    doc.addImage('../assets/endereco-residencial.png', 'png', 5, 132, 5.5, 5.5);
    doc.addImage('../assets/linkedin.png', 'png', 5, 142, 5, 5);
  }

  addSkills(doc: jsPDF): void {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(this.tt_color);
    if (this.lang_en) {
      doc.text('Skills', 6, 160);
    } else {
      doc.text('Competências', 6, 160);
    }
    doc.setFillColor(this.ln_color);
    doc.line(6, 162, 64, 162, 'F');

    doc.setFontSize(10);

    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Angular', 6, 170);
    doc.setTextColor(this.bg_color);
    doc.text('Avançado ', 47, 170);
    doc.circle(48, 175, 1.3, 'F');
    doc.circle(51.5, 175, 1.3, 'F');
    doc.circle(55, 175, 1.3, 'F');
    doc.circle(58.5, 175, 1.3, 'F');
    doc.setFillColor(this.ns_color);
    doc.circle(62, 175, 1.3, 'F');
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'normal');
    doc.text('6 anos', 6, 175);

    doc.setFont('helvetica', 'bold');
    doc.text('.Net', 6, 185);
    doc.setTextColor(this.bg_color);
    doc.text('Avançado ', 47, 185);
    doc.circle(48, 190, 1.3, 'F');
    doc.circle(51.5, 190, 1.3, 'F');
    doc.circle(55, 190, 1.3, 'F');
    doc.circle(58.5, 190, 1.3, 'F');
    doc.setFillColor(this.ns_color);
    doc.circle(62, 190, 1.3, 'F');
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'normal');
    doc.text('6 anos', 6, 190);

    doc.setFont('helvetica', 'bold');
    doc.text('SQL', 6, 200);
    doc.setTextColor(this.bg_color);
    doc.text('Especialista', 44, 200);
    doc.circle(48, 205, 1.3, 'F');
    doc.circle(51.5, 205, 1.3, 'F');
    doc.circle(55, 205, 1.3, 'F');
    doc.circle(58.5, 205, 1.3, 'F');
    doc.circle(62, 205, 1.3, 'F');
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'normal');
    doc.text('6 anos', 6, 205);

    doc.setFont('helvetica', 'bold');
    doc.text('AWS', 6, 215);
    doc.setTextColor(this.bg_color);
    doc.text('Intermediário', 44, 215);
    doc.circle(48, 220, 1.3, 'F');
    doc.circle(51.5, 220, 1.3, 'F');
    doc.circle(55, 220, 1.3, 'F');
    doc.setFillColor(this.ns_color);
    doc.circle(58.5, 220, 1.3, 'F');
    doc.circle(62, 220, 1.3, 'F');
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'normal');
    doc.text('3 anos', 6, 220);


    doc.setFont('helvetica', 'bold');
    doc.text('TypeScript', 6, 230);
    doc.setTextColor(this.bg_color);
    doc.text('Especialista', 44, 230);
    doc.circle(48, 235, 1.3, 'F');
    doc.circle(51.5, 235, 1.3, 'F');
    doc.circle(55, 235, 1.3, 'F');
    doc.circle(58.5, 235, 1.3, 'F');
    doc.circle(62, 235, 1.3, 'F');
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'normal');
    doc.text('6 anos', 6, 235);

    doc.setFont('helvetica', 'bold');
    doc.text('Java', 6, 245);
    doc.setTextColor(this.bg_color);
    doc.text('Intermediário', 44, 245);
    doc.circle(48, 250, 1.3, 'F');
    doc.circle(51.5, 250, 1.3, 'F');
    doc.circle(55, 250, 1.3, 'F');
    doc.setFillColor(this.ns_color);
    doc.circle(58.5, 250, 1.3, 'F');
    doc.circle(62, 250, 1.3, 'F');
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'normal');
    doc.text('2 anos', 6, 250);

    doc.setFont('helvetica', 'bold');
    doc.text('HTML', 6, 260);
    doc.setTextColor(this.bg_color);
    doc.text('Especialista', 44, 260);
    doc.circle(48, 265, 1.3, 'F');
    doc.circle(51.5, 265, 1.3, 'F');
    doc.circle(55, 265, 1.3, 'F');
    doc.circle(58.5, 265, 1.3, 'F');
    doc.circle(62, 265, 1.3, 'F');
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'normal');
    doc.text('6 anos', 6, 265);

    doc.setFont('helvetica', 'bold');
    doc.text('CSS', 6, 275);
    doc.setTextColor(this.bg_color);
    doc.text('Especialista', 44, 275);
    doc.circle(48, 280, 1.3, 'F');
    doc.circle(51.5, 280, 1.3, 'F');
    doc.circle(55, 280, 1.3, 'F');
    doc.circle(58.5, 280, 1.3, 'F');
    doc.circle(62, 280, 1.3, 'F');
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'normal');
    doc.text('6 anos', 6, 280);
  }

  addLanguage(doc: jsPDF): void {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(this.tt_color);
    doc.text('Languages', 6, 252);
    doc.setFillColor(this.ln_color);
    doc.line(6, 256, 64, 256, 'F');

    doc.setFontSize(10);
    doc.setTextColor(this.bk_color);
    doc.text('English', 6, 264);
    doc.setFillColor(this.bg_color);
    doc.circle(48, 264, 1.3, 'F');
    doc.circle(51.5, 264, 1.3, 'F');
    doc.circle(55, 264, 1.3, 'F');
    doc.setFillColor(this.ns_color);
    doc.circle(58.5, 264, 1.3, 'F');
    doc.circle(62, 264, 1.3, 'F');
  }

  addProfile(doc: jsPDF): void {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(this.tt_color);
    doc.text('Perfil', 76, 15);
    doc.setFillColor(this.ln_color);
    doc.line(76, 16, 204, 16, 'F');
    doc.setFontSize(10);
    doc.setTextColor(this.bk_color);

    doc.text(
      "Sou um Full Stack Developer com mais de 6 anos de experiência em ",
      76,
      25
    );
    doc.text(
      "desenvolvimento de soluções complexas para o setor financeiro e corporativo,",
      76,
      30
    );
    doc.text(
      "utilizando tecnologias como .NET Core, Angular, SQL Server, Oracle, entre outras.",
      76,
      35
    );
    doc.text(
      "Tenho sólida experiência em Design System, API Gateway, e Integração com SAP,",
      76,
      40
    );
    doc.text(
      " além de forte conhecimento em práticas de segurança e governança de TI.",
      76,
      45
    );
    doc.text(
      'Ao longo da minha carreira, atuei como Tech Lead e Scrum Master, liderando',
      76,
      50
    );
    doc.text(
      'equipes de desenvolvimento e promovendo a colaboração ágil, sempre com foco',
      76,
      55
    );
    doc.text(
      "em entregar soluções de alto desempenho e escaláveis.  Tenho grande interesse ",
      76,
      60
    );
    doc.text(
      "em desafios que envolvem a modernização de sistemas legados e a implementação ",
      76,
      65
    );
    doc.text(
      "de CI/CD, buscando constantemente melhorar a performance e qualidade das ",
      76,
      70
    );
    doc.text(
      "soluções. Estou sempre em busca de oportunidades para crescer e contribuir",
      76,
      75
    );
    doc.text(
      "em projetos desafiadores, com um compromisso contínuo com a inovação e",
      76,
      80
    );
    doc.text(
      "a evolução tecnológica.",
      76,
      85
    );

    // doc.setTextColor(this.bk_color);
    // doc.text('Estou nessa doideira de ser programador a cerca de uns 10 anos, já nem sei se', 76, 30);
    // doc.text('consigo listar minhas experiências com tantas linguagens que já sofri nesse tempo,', 76, 35);
    // doc.text('aqui vai algumas delas, talvez seja o tal do "Estocolmo", mas são as que eu mais', 76, 40);
    // doc.text('gosto de trabalhar,', 76, 45);
    // doc.setFont('helvetica', 'bold');
    // doc.text('C#, JavaScript, PHP e JAVA, ', 106, 45);
    // doc.setFont('helvetica', 'normal');
    // doc.text('e não adianta nada uma ', 155, 45);
    // doc.text('linguagem de programação sem um framework né? Deixa eu tentar me lembrar de ', 76, 50);
    // doc.text('alguns, ', 76, 55);
    // doc.setFont('helvetica', 'bold');
    // doc.text('.Net/.Net Core, VB, Angular, Vue e Flutter', 89, 55);
    // doc.setFont('helvetica', 'normal');
    // doc.text('honestamente tem uns ai que', 159, 55);
    // doc.text('eu preferiria nem ter conhecido, bom, banco de dados cada linguagem tem seus', 76, 60);
    // doc.text('preferidos né? Mas faz um bom tempo que não preciso fazer aquela Querys ', 76, 65);
    // doc.text('gigantes, mas é uma coisa que até hoje não sei se sinto saudades em otimizar ', 76, 70);
    // doc.text('Query, era bem satisfatório. Ah já ia me esquecendo acho que já mexi com', 76, 75);
    // doc.setFont('helvetica', 'bold');
    // doc.text('SQL Server, MySQl, Postgree e até Firebird,', 76, 80);
    // doc.setFont('helvetica', 'normal');
    // doc.text('ai hoje em dia, trabalho só com as ', 150, 80);
    // doc.text('coisas na nuvem mesmo, são bons! Mas dá uma trabalheira para configurar, ', 76, 85);
    // doc.text('saudades do bom e velho on premise, mas como dizem ', 76, 90);
    // doc.setFont('helvetica', 'bold');
    // doc.text('AWS e Azure', 165, 90);
    // doc.setFont('helvetica', 'normal');
    // doc.text('é o futuro', 188, 90);
    // doc.text('né?', 76, 95);
    // doc.setFont('helvetica', 'bold');
    // doc.text('API Gateway, EKS, S3', 83, 95);
    // doc.setFont('helvetica', 'normal');
    // doc.text('e todas aquelas ferramentas da AWS. Estava para ', 122, 95);
    // doc.text('tirar a certificação da AWS, mas não sei se valem todos aqueles dólares não.', 76, 100);
  }

  addEmploymentPageOne(doc: jsPDF): void {
    if (this.lang_en) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(this.tt_color);
      doc.text('Employment', 76, 96);
      doc.setFillColor(this.ln_color);
      doc.line(76, 98, 204, 98, 'F');
      doc.setFontSize(10);
      doc.setTextColor(this.bk_color);

      doc.setFont('helvetica', 'bold');
      doc.text('Full Stack Developer', 76, 107);
      doc.setTextColor(this.tt_color);
      doc.text('Jan 2025 - present', 172, 107);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('BNPP Paribas Personal Finance, São Paulo, Brasil', 76, 112);
      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Senior | Team Member', 76, 117);
      doc.setFont('helvetica', 'normal');
      doc.text('.NET Core, Angular, SQL Server, Oracle', 76, 122);

      doc.setFont('helvetica', 'bold');
      doc.text('Full Stack Developer', 76, 132);
      doc.setTextColor(this.tt_color);
      doc.text('Jul 2024 - Dec 2024', 170, 132);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('Itáu Unibanco, São Paulo, Brasil', 76, 137);
      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Senior | Team Member', 76, 142);
      doc.setFont('helvetica', 'normal');
      doc.text(
        'AWS, .NET Core, Angular, Javascript, JAVA, SQL Server',
        76,
        147
      );

      doc.setFont('helvetica', 'bold');
      doc.text('Full Stack Developer', 76, 157);
      doc.setTextColor(this.tt_color);
      doc.text('Oct 2023 - Jun 2024', 170, 157);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('BNPP Paribas Personal Finance, São Paulo, Brasil', 76, 162);
      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Senior | Team Member & Tech Lead', 76, 167);
      doc.setFont('helvetica', 'normal');
      doc.text('.NET Framework, Angular, SQL Server, Oracle', 76, 172);

      doc.setFont('helvetica', 'bold');
      doc.text('Full Stack Developer', 76, 182);
      doc.setTextColor(this.tt_color);
      doc.text('Jan 2020 - Oct 2023', 170, 182);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('Itau IBBA, São Paulo, Brasil', 76, 187);
      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Senior | Team Member', 76, 192);
      doc.setFont('helvetica', 'normal');
      doc.text('.NET Core, Angular, SQL Server, Angular JS', 76, 197);

      doc.setFont('helvetica', 'bold');
      doc.text('Full Stack Developer', 76, 207);
      doc.setTextColor(this.tt_color);
      doc.text('Feb 2019 - Jan 2020', 170, 207);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('SoftWillians IT Solutions, Jacarei, Brasil', 76, 212);
      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Middle | Team Member & Scrum Master', 76, 217);
      doc.setFont('helvetica', 'normal');
      doc.text('.NET Framework, SQL Server, Angular JS', 76, 222);
      doc.text(
        'Desenvolvimento de aplicações robustas e escaláveis, com foco na experiência do',
        76,
        227
      );
      doc.text(
        'Desenvolvimento de aplicações robustas e escaláveis, com foco na experiência do',
        76,
        227
      );
      doc.text(
        'Desenvolvimento de aplicações robustas e escaláveis, com foco na experiência do',
        76,
        227
      );
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(this.tt_color);
      doc.text('Experiencias Profissionais', 76, 96);
      doc.setFillColor(this.ln_color);
      doc.line(76, 98, 204, 98, 'F');
      doc.setFontSize(10);
      doc.setTextColor(this.bk_color);

      this.addExperienceBNPP2025(doc, 110);
      this.addExperienceITAU2024(doc, 205);
    }
  }

  addEmploymentePageTwo(doc: jsPDF): void{
    if (this.lang_en) {}
    else{
      this.addExperienceBNPP2024(doc, 15);
      this.addExperienceITAU2020(doc, 110);
      this.addExperienceSW(doc, 215);
    }
  }

  addEducation(doc: jsPDF): void {
    if (this.lang_en) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(this.tt_color);
      doc.text('Education', 76, 246);
      doc.setFillColor(this.ln_color);
      doc.line(76, 248, 204, 248, 'F');
      doc.setFontSize(10);

      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Master of Business Administration - MBA', 76, 256);
      doc.setTextColor(this.tt_color);
      doc.text('2018', 190, 256);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('Laureate Education, Inc.', 76, 262);
      doc.setTextColor(this.bk_color);
      doc.text('Information Systems Management', 76, 268);

      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Systems Analysis and Development', 76, 278);
      doc.setTextColor(this.tt_color);
      doc.text('2017', 190, 278);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('ETEP - University Center', 76, 284);
      doc.setTextColor(this.bk_color);
      doc.text('Computer Programming', 76, 290);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(this.tt_color);
      doc.text('Formação', 76, 251);
      doc.setFillColor(this.ln_color);
      doc.line(76, 253, 204, 253, 'F');
      doc.setFontSize(10);

      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Master of Business Administration - MBA', 76, 260);
      doc.setTextColor(this.tt_color);
      doc.text('2018', 190, 260);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('Laureate Education, Inc.', 76, 265);
      doc.setTextColor(this.bk_color);
      doc.text('Gestão de Sistemas de Informação', 76, 270);

      doc.setTextColor(this.bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Análise e Desenvolvimento de Sistemas', 76, 280);
      doc.setTextColor(this.tt_color);
      doc.text('2017', 190, 280);
      doc.setTextColor(this.bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('ETEP - University Center', 76, 285);
      doc.setTextColor(this.bk_color);
      doc.text('Computer Programming', 76, 290);
    }
  }

  addExperienceBNPP2025(doc: jsPDF, startline: number): void {
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, startline);

    doc.setFontSize(10);
    doc.setTextColor(this.tt_color);
    doc.text('Jan 2025 - Mar 2025', 172, startline);
    doc.setTextColor(this.bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text(
      'BNPP Paribas Personal Finance, São Paulo, Brasil',
      76,
      startline + 5
    );
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Senior | Team Member', 76, startline + 10);

    doc.setFont('helvetica', 'bold');
    doc.text(
      '.NET Core, Angular, SQL Server, Oracle e Vulnerabilidades',
      76,
      startline + 16
    );
    doc.line(76, startline + 17, 175, startline + 17, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFillColor(this.bg_color);
    doc.circle(78, startline + 25, 1, 'F');
    doc.text(
      'Desenvolvimento e manutenção de sistemas utilizando .NET Core e Angular,',
      82,
      startline + 24
    );
    doc.text(
      'criando soluções seguras e de alta performance para o setor financeiro.',
      82,
      startline + 29
    );
    doc.circle(78, startline + 37, 1, 'F');
    doc.text(
      'Integração de bancos de dados SQL Server e Oracle, garantindo a consistência',
      82,
      startline + 36
    );
    doc.text(
      'e eficiência no processamento de dados sensíveis.',
      82,
      startline + 41
    );
    doc.circle(78, startline + 49, 1, 'F');
    doc.text(
      'Identificação e mitigação de vulnerabilidades de segurança, implementando',
      82,
      startline + 48
    );
    doc.text(
      'práticas recomendadas para proteger os sistemas contra riscos e ataques.',
      82,
      startline + 53
    );
    doc.circle(78, startline + 65, 1, 'F');
    doc.text(
      'Colaboração com equipes de segurança para resolver não conformidades',
      82,
      startline + 60
    );
    doc.text(
      'e garantir que os sistemas estejam em conformidade com as políticas de',
      82,
      startline + 65
    );
    doc.text('segurança e regulamentações do setor.', 82, startline + 70);
    doc.circle(78, startline + 78, 1, 'F');
    doc.text(
      'Atuação em um ambiente ágil, colaborando em sprints para entrega de ',
      82,
      startline + 77
    );
    doc.text(
      'funcionalidades e melhorias, com foco em qualidade e satisfação do cliente.',
      82,
      startline + 82
    );
  }

  addExperienceITAU2024(doc: jsPDF, startline: number): void {
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, startline);
    doc.setFontSize(10);
    doc.setTextColor(this.tt_color);
    doc.text('Jul 2024 - Dez 2024', 172, startline);
    doc.setTextColor(this.bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text('Itáu Unibanco, São Paulo, Brasil', 76, startline + 5);
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Senior | Team Member', 76, startline + 10);

    doc.text(
      'AWS, .NET Core, DDD, Angular, JAVA, CI/CD e Sistemas Legados',
      76,
      startline + 16
    );
    doc.line(76, startline + 17, 187, startline + 17, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFillColor(this.bg_color);
    doc.circle(78, startline + 25, 1, 'F');
    doc.text(
      'Desenvolvimento de soluções inovadoras utilizando AWS, .NET Core, Angular,',
      82,
      startline + 24
    );
    doc.text(
      'Java e Kubernetes, criando aplicações escaláveis e de alto desempenho.',
      82,
      startline + 29
    );
    doc.circle(78, startline + 37, 1, 'F');
    doc.text(
      'Aplicação de Domain-Driven Design (DDD) para estruturar sistemas complexos,',
      82,
      startline + 36
    );
    doc.text(
      'melhorando a clareza e a flexibilidade do código.',
      82,
      startline + 41
    );
    doc.circle(78, startline + 49, 1, 'F');
    doc.text(
      'Implementação de pipelines de CI/CD, garantindo a automação de testes, ',
      82,
      startline + 48
    );
    doc.text(
      'builds e deploys, aumentando a eficiência no ciclo de vida do desenvolvimento.',
      82,
      startline + 53
    );
    doc.circle(78, startline + 62, 1, 'F');
    doc.text(
      'Integração de API Gateway para centralizar e gerenciar as requisições de ',
      82,
      startline + 60
    );
    doc.text(
      'serviços, melhorando a segurança e escalabilidade das aplicações.',
      82,
      startline + 65
    );
    doc.circle(78, startline + 73, 1, 'F');
    doc.text(
      'Modernização de sistemas legados, otimizando a performance e a segurança',
      82,
      startline + 72
    );
    doc.text(
      'de aplicações críticas, com foco em redução de custos operacionais.',
      82,
      startline + 77
    );
  }

  addExperienceBNPP2024(doc: jsPDF, startline: number): void {
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, startline);

    doc.setFontSize(10);
    doc.setTextColor(this.tt_color);
    doc.text('Out 2023 - Jun 2024', 172, startline);
    doc.setTextColor(this.bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text(
      'BNPP Paribas Personal Finance, São Paulo, Brasil',
      76,
      startline + 5
    );
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Senior | Team Member & Tech Lead', 76, startline + 10);

    doc.setFont('helvetica', 'bold');
    doc.text(
      '.NET Framework, .NET Core, Angular, SQL Server, Oracle e Design System',
      76,
      startline + 16
    );
    doc.line(76, startline + 17, 202, startline + 17, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFillColor(this.bg_color);
    doc.circle(78, startline + 25, 1, 'F');
    doc.text(
      'Liderança técnica e desenvolvimento de soluções utilizando .NET Framework, ',
      82,
      startline + 24
    );
    doc.text(
      '.NET Core, Angular, SQL Server e Oracle, criando sistemas robustos.',
      82,
      startline + 29
    );

    doc.circle(78, startline + 37, 1, 'F');
    doc.text(
      'Coordenação de uma equipe de desenvolvimento, orientando boas práticas',
      82,
      startline + 36
    );
    doc.text(
      'de programação, design de arquitetura e garantindo a entrega.',
      82,
      startline + 41
    );
    doc.circle(78, startline + 49, 1, 'F');
    doc.text(
      'Implementação e evolução de Design System, garantindo consistência visual',
      82,
      startline + 48
    );
    doc.text(
      'e funcionalidade nas interfaces de usuário em toda a plataforma.',
      82,
      startline + 53
    );
    doc.circle(78, startline + 65, 1, 'F');
    doc.text(
      'Atuação na modernização de sistemas legados em Silverlight, conduzindo',
      82,
      startline + 60
    );
    doc.text(
      'a migração para tecnologias mais recentes e garantindo a continuidade',
      82,
      startline + 65
    );
    doc.text('dos serviços com mínima interrupção.', 82, startline + 70);
    doc.circle(78, startline + 78, 1, 'F');
    doc.text(
      'Colaboração com diferentes equipes (produtos, QA, segurança) para garantir',
      82,
      startline + 77
    );
    doc.text(
      'alinhamento nas entregas e aderência aos requisitos de negócios.',
      82,
      startline + 82
    );
  }

  addExperienceITAU2020(doc: jsPDF, startline: number): void {
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, startline);

    doc.setFontSize(10);
    doc.setTextColor(this.tt_color);
    doc.text('Jan 2020 - Out 2023', 172, startline);
    doc.setTextColor(this.bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text(
      'Itaú IBBA, São Paulo, Brasil',
      76,
      startline + 5
    );
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Senior | Team Member', 76, startline + 10);

    doc.setFont('helvetica', 'bold');
    doc.text(
      '.NET Core, Gateway, .NET Framework, Angular, CI/CD e SonarQube',
      76,
      startline + 16
    );
    doc.line(76, startline + 17, 190, startline + 17, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFillColor(this.bg_color);
    doc.circle(78, startline + 25, 1, 'F');
    doc.text(
      'Desenvolvimento e manutenção de sistemas utilizando .NET Core, Angular,',
      82,
      startline + 24
    );
    doc.text(
      '.NET Framework, criando soluções de alto desempenho e escalabilidade.',
      82,
      startline + 29
    );

    doc.circle(78, startline + 37, 1, 'F');
    doc.text(
      'Implementação e integração de API Gateway para gerenciamento centralizado',
      82,
      startline + 36
    );
    doc.text(
      'de requisições e serviços, melhorando a segurança e escalabilidade.',
      82,
      startline + 41
    );
    doc.circle(78, startline + 53, 1, 'F');
    doc.text(
      'Gestão de pipelines de CI/CD, automatizando ciclos de vida de desenvolvimento,',
      82,
      startline + 48
    );
    doc.text(
      'desde a construção até o deploy, utilizando ferramentas como SonarQube para',
      82,
      startline + 53
    );
    doc.text(
      'garantir a qualidade do código.',
      82,
      startline + 58
    );
    doc.circle(78, startline + 69, 1, 'F');
    doc.text(
      'Segui rigorosamente o Design System da empresa para garantir consistência',
      82,
      startline + 65
    );
    doc.text(
      'visual e funcional em todas as interfaces de usuário, promovendo uma',
      82,
      startline + 70
    );
    doc.text(
      'experiência de usuário coesa em todas as plataformas e dispositivos.',
      82,
      startline + 75
    );
    doc.circle(78, startline + 86, 1, 'F');
    doc.text(
      'Colaboração com equipes multifuncionais (arquitetura, QA, segurança) para',
      82,
      startline + 82
    );
    doc.text(
      'garantir a entrega de soluções alinhadas aos requisitos de negócios e',
      82,
      startline + 87
    );
    doc.text(
      'com alto padrão de qualidade.',
      82,
      startline + 92
    );

  }

  addExperienceSW(doc: jsPDF, startline: number): void {
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, startline);

    doc.setFontSize(10);
    doc.setTextColor(this.tt_color);
    doc.text('Feb 2019 - Jan 2020', 172, startline);
    doc.setTextColor(this.bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text(
      'SoftWillians IT Solutions, Jacarei, Brasil',
      76,
      startline + 5
    );
    doc.setTextColor(this.bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Pleno | Team Member', 76, startline + 10);

    doc.setFont('helvetica', 'bold');
    doc.text(
      '.NET Framework, SQL Server, Angular e Integração com SAP',
      76,
      startline + 16
    );
    doc.line(76, startline + 17, 180, startline + 17, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFillColor(this.bg_color);
    doc.circle(78, startline + 25, 1, 'F');
    doc.text(
      'Desenvolvimento de aplicações utilizando .NET Framework, SQL Server',
      82,
      startline + 24
    );
    doc.text(
      'e Angular, criando soluções eficientes para clientes do setor de tecnologia.',
      82,
      startline + 29
    );

    doc.circle(78, startline + 37, 1, 'F');
    doc.text(
      'Integração com SAP, conectando sistemas internos com outras plataformas',
      82,
      startline + 36
    );
    doc.text(
      'para otimizar processos de negócios e melhorar a eficiência operacional.',
      82,
      startline + 41
    );
    doc.circle(78, startline + 53, 1, 'F');
    doc.text(
      'Atuação como Scrum Master, facilitando sprints, daily e retrospectivas,',
      82,
      startline + 48
    );
    doc.text(
      'promovendo uma comunicação eficaz e a colaboração dentro da equipe.',
      82,
      startline + 53
    );
    doc.text(
      'de desenvolvimento.',
      82,
      startline + 58
    );
    doc.circle(78, startline + 69, 1, 'F');
    doc.text(
      'Contato direto com os usuários finais, apresentando o sistema, coletando',
      82,
      startline + 65
    );
    doc.text(
      'feedback e solicitando alterações para garantir que as soluções atendam às',
      82,
      startline + 70
    );
    doc.text(
      'necessidades do cliente e os requisitos de negócios.',
      82,
      startline + 75
    );
  }
}
