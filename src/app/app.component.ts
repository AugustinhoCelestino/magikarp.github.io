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
    this.addLanguage(doc);
    //this.addProfile(doc);
    this.addEmployment(doc);
    this.addEducation(doc);
  }

  addAvatar(doc: jsPDF): void {
    //doc.addImage('../assets/AVATAR.png', 'png', 12.5, 38, 45.8, 45.8);
    doc.addImage('../assets/AVATAR.png', 'png', 12.5, 38, 45.8, 45.8);
  }

  addBackground(doc: jsPDF): void {

    let bg_color: string = '#4b0754';
    let sc_color: string = '#edf1f2';
    let wt_color: string = '#FFFFFF';
    let og_color: string = '#fea500';

    doc.setFillColor(bg_color);
    doc.circle(35, 280, 50, 'F');
    doc.setFillColor(sc_color);
    doc.circle(35, 225, 70, 'F');
    doc.rect(0, 40, 70, 220, 'F');
    doc.setFillColor(bg_color);
    doc.circle(35, -10, 70, 'F');
    doc.setFillColor(wt_color);
    doc.circle(35, 60, 25, 'F');
    doc.setFillColor(og_color);
    doc.circle(35, 60, 23, 'F');
    doc.setFillColor(wt_color);
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
    let tt_color: string = '#6d426d';
    let ln_color: string = '#BBB';
    let bk_color: string = '#333';

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(tt_color);
    if(this.lang_en){
      doc.text('Personal details', 6, 94);
    }
    else{
      doc.text('Dados pessoais', 6, 94);
    }
    doc.setFillColor(ln_color);
    doc.line(6, 98, 64, 98, 'F');
    doc.setFontSize(10);
    doc.setTextColor(bk_color);
    doc.text('Augustinho Celestino', 15, 106);
    doc.text('de Freitas Junior', 15, 110);
    doc.text('augustinhocelestino@gmail.com', 15, 118);
    doc.text('+55 (12) 98858-3383', 15, 127);
    //doc.text('São José dos Campos - SP', 13, 136);
    doc.text('São Paulo - SP', 15, 136);
    doc.text('/augustinhocelestino', 15, 146);

    doc.setFillColor(tt_color);

    doc.addImage('../assets/mini_avatar.png', 'png', 5, 104, 5, 5);
    doc.addImage('../assets/e-mail.png', 'png', 5, 115, 5, 5);
    doc.addImage('../assets/phone.png', 'png', 5, 124, 4, 4);
    doc.addImage('../assets/endereco-residencial.png', 'png', 5, 132, 5.5, 5.5);
    doc.addImage('../assets/linkedin.png', 'png', 5, 142, 5, 5);

  }

  addSkills(doc: jsPDF):void {
    let tt_color: string = '#6d426d';
    let bg_color: string = '#4b0754';
    let ns_color: string = '#CCC';

    let ln_color: string = '#BBB';
    let bk_color: string = '#333';

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(tt_color);
    if(this.lang_en){
      doc.text('Skills', 6, 160);
    }
    else{
      doc.text('Competências', 6, 160);
    }
    doc.setFillColor(ln_color);
    doc.line(6, 164, 64, 164, 'F');

    doc.setFontSize(10);
    doc.setTextColor(bk_color);

    doc.text('Angular', 6, 172);
    doc.setFillColor(bg_color);
    doc.circle(48, 172, 1.3, 'F');
    doc.circle(51.5, 172, 1.3, 'F');
    doc.circle(55, 172, 1.3, 'F');
    doc.circle(58.5, 172, 1.3, 'F');
    doc.setFillColor(ns_color);
    doc.circle(62, 172, 1.3, 'F');

    doc.text('.Net', 6, 180);
    doc.setFillColor(bg_color);
    doc.circle(48, 180, 1.3, 'F');
    doc.circle(51.5, 180, 1.3, 'F');
    doc.circle(55, 180, 1.3, 'F');
    doc.setFillColor(ns_color);
    doc.circle(58.5, 180, 1.3, 'F');
    doc.circle(62, 180, 1.3, 'F');

    doc.text('SQL', 6, 188);
    doc.setFillColor(bg_color);
    doc.circle(48, 188, 1.3, 'F');
    doc.circle(51.5, 188, 1.3, 'F');
    doc.circle(55, 188, 1.3, 'F');
    doc.circle(58.5, 188, 1.3, 'F');
    doc.circle(62, 188, 1.3, 'F');

    doc.text('C#', 6, 196);
    doc.setFillColor(bg_color);
    doc.circle(48, 196, 1.3, 'F');
    doc.circle(51.5, 196, 1.3, 'F');
    doc.circle(55, 196, 1.3, 'F');
    doc.circle(58.5, 196, 1.3, 'F');
    doc.setFillColor(ns_color);
    doc.circle(62, 196, 1.3, 'F');

    doc.text('AWS', 6, 204);
    doc.setFillColor(bg_color);
    doc.circle(48, 204, 1.3, 'F');
    doc.circle(51.5, 204, 1.3, 'F');
    doc.circle(55, 204, 1.3, 'F');
    doc.setFillColor(ns_color);
    doc.circle(58.5, 204, 1.3, 'F');
    doc.circle(62, 204, 1.3, 'F');

    doc.text('TypeScript', 6, 212);
    doc.setFillColor(bg_color);
    doc.circle(48, 212, 1.3, 'F');
    doc.circle(51.5, 212, 1.3, 'F');
    doc.circle(55, 212, 1.3, 'F');
    doc.circle(58.5, 212, 1.3, 'F');
    doc.circle(62, 212, 1.3, 'F');

    doc.text('Java', 6, 220);
    doc.setFillColor(bg_color);
    doc.circle(48, 220, 1.3, 'F');
    doc.circle(51.5, 220, 1.3, 'F');
    doc.circle(55, 220, 1.3, 'F');
    doc.setFillColor(ns_color);
    doc.circle(58.5, 220, 1.3, 'F');
    doc.circle(62, 220, 1.3, 'F');

    doc.text('CSS', 6, 228);
    doc.setFillColor(bg_color);
    doc.circle(48, 228, 1.3, 'F');
    doc.circle(51.5, 228, 1.3, 'F');
    doc.circle(55, 228, 1.3, 'F');
    doc.circle(58.5, 228, 1.3, 'F');
    doc.circle(62, 228, 1.3, 'F');

    doc.text('Javascript', 6, 236);
    doc.setFillColor(bg_color);
    doc.circle(48, 236, 1.3, 'F');
    doc.circle(51.5, 236, 1.3, 'F');
    doc.circle(55, 236, 1.3, 'F');
    doc.circle(58.5, 236, 1.3, 'F');
    doc.circle(62, 236, 1.3, 'F');

  }

  addLanguage(doc: jsPDF):void{
    let tt_color: string = '#6d426d';
    let bg_color: string = '#4b0754';
    let ns_color: string = '#CCC';

    let ln_color: string = '#BBB';
    let bk_color: string = '#333';

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(tt_color);
    doc.text('Languages', 6, 252);
    doc.setFillColor(ln_color);
    doc.line(6, 256, 64, 256, 'F');

    doc.setFontSize(10);
    doc.setTextColor(bk_color);
    doc.text('English', 6, 264);
    doc.setFillColor(bg_color);
    doc.circle(48, 264, 1.3, 'F');
    doc.circle(51.5, 264, 1.3, 'F');
    doc.circle(55, 264, 1.3, 'F');
    doc.setFillColor(ns_color);
    doc.circle(58.5, 264, 1.3, 'F');
    doc.circle(62, 264, 1.3, 'F');
  }

  addProfile(doc: jsPDF): void {

    let tt_color: string = '#6d426d';
    let ln_color: string = '#BBB';
    let bk_color: string = '#333';

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(tt_color);
    doc.text('Profile', 76, 18);
    doc.setFillColor(ln_color);
    doc.line(76, 22, 204, 22, 'F');
    doc.setFontSize(10);
    doc.setTextColor(bk_color);
            "to get the AWS certification, but I don't know if it's worth all those dollars."
    doc.text("I've been on this crazy journey of being a programmer for about 10 years,", 76, 30);
    doc.text("I don't even know if I can list my experiences with so many languages that I've", 76, 35);
    doc.text("experienced in this time, here are some of them, maybe it's the 'Stockholm' one,", 76, 40);
    doc.text("but they're the ones that I most care about. I like C#, JavaScript, PHP and JAVA,", 76, 45);
    doc.text("and there's no point in a programming language without a framework, right?", 76, 50);
    doc.text("Let me try to remember some, .Net/.Net Core, VB, Angular, Vue and Flutter, ", 76, 55);
    doc.text("honestly there are some that I would rather not have known about, well,", 76, 60);
    doc.text("databases, each language has their favorites, right? It's been a while since", 76, 65);
    doc.text("I needed to do that giant Query, but it's something that to this day", 76, 70);
    doc.text("I don't know if I miss optimizing Query, it was very satisfying. Ah, I almost forgot,", 76, 75);
    doc.text("I think I've already worked with SQL Server, MySQl, Postgree and even Firebird,", 76, 80);
    doc.text("and nowadays, I only work with things in the cloud, they're good! But it's a ", 76, 85);
    doc.text("hassle to set up, I miss the good old on premise, but as they say AWS and Azure ", 76, 90);
    doc.text("is the future, right? API Gateway, EKS, S3, and all those AWS tools. I was about", 76, 95);
    doc.text("to get the AWS certification, but I don't know if it's worth all those dollars.", 76, 100);


    // doc.setTextColor(bk_color);
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

  addEmployment(doc: jsPDF): void {
    let bg_color: string = '#4b0754';
    let tt_color: string = '#6d426d';
    let ln_color: string = '#BBB';
    let bk_color: string = '#333';

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(tt_color);
    doc.text('Employment', 76, 96);
    doc.setFillColor(ln_color);
    doc.line(76, 98, 204, 98, 'F');
    doc.setFontSize(10);
    doc.setTextColor(bk_color);

    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, 107);
    doc.setTextColor(tt_color);
    doc.text('Jan 2025 - present', 172, 107);
    doc.setTextColor(bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text('BNPP Paribas Personal Finance, São Paulo, Brasil', 76, 112);
    doc.setTextColor(bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Senior | Team Member', 76, 117);
    doc.setFont('helvetica', 'normal');
    doc.text('.NET Core, Angular, SQL Server, Oracle', 76, 122);

    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, 132);
    doc.setTextColor(tt_color);
    doc.text('Jul 2024 - Dec 2024', 170, 132);
    doc.setTextColor(bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text('Itáu Unibanco, São Paulo, Brasil', 76, 137);
    doc.setTextColor(bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Senior | Team Member', 76, 142);
    doc.setFont('helvetica', 'normal');
    doc.text('AWS, .NET Core, Angular, Javascript, JAVA, SQL Server', 76, 147);

    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, 157);
    doc.setTextColor(tt_color);
    doc.text('Oct 2023 - Jun 2024', 170, 157);
    doc.setTextColor(bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text('BNPP Paribas Personal Finance, São Paulo, Brasil', 76, 162);
    doc.setTextColor(bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Senior | Team Member & Tech Lead', 76, 167);
    doc.setFont('helvetica', 'normal');
    doc.text('.NET Framework, Angular, SQL Server, Oracle', 76, 172);

    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, 182);
    doc.setTextColor(tt_color);
    doc.text('Jan 2020 - Oct 2023', 170, 182);
    doc.setTextColor(bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text('Itau IBBA, São Paulo, Brasil', 76, 187);
    doc.setTextColor(bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Senior | Team Member', 76, 192);
    doc.setFont('helvetica', 'normal');
    doc.text('.NET Core, Angular, SQL Server, Angular JS', 76, 197);

    doc.setFont('helvetica', 'bold');
    doc.text('Full Stack Developer', 76, 207);
    doc.setTextColor(tt_color);
    doc.text('Feb 2019 - Jan 2020', 170, 207);
    doc.setTextColor(bg_color);
    doc.setFont('helvetica', 'normal');
    doc.text('SoftWillians IT Solutions, Jacarei, Brasil', 76, 212);
    doc.setTextColor(bk_color);
    doc.setFont('helvetica', 'bold');
    doc.text('Middle | Team Member & Scrum Master', 76, 217);
    doc.setFont('helvetica', 'normal');
    doc.text('.NET Framework, SQL Server, Angular JS', 76, 222);
    doc.text('Desenvolvimento de aplicações robustas e escaláveis, com foco na experiência do', 76, 227);
    doc.text('Desenvolvimento de aplicações robustas e escaláveis, com foco na experiência do', 76, 227);
    doc.text('Desenvolvimento de aplicações robustas e escaláveis, com foco na experiência do', 76, 227);
  }

  addEducation(doc: jsPDF): void {
    let bg_color: string = '#4b0754';
    let tt_color: string = '#6d426d';
    let ln_color: string = '#BBB';
    let bk_color: string = '#333';

    if(this.lang_en){
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(tt_color);
      doc.text('Education', 76, 246);
      doc.setFillColor(ln_color);
      doc.line(76, 248, 204, 248, 'F');
      doc.setFontSize(10);

      doc.setTextColor(bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Master of Business Administration - MBA', 76, 256);
      doc.setTextColor(tt_color);
      doc.text('2018', 190, 256);
      doc.setTextColor(bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('Laureate Education, Inc.', 76, 262);
      doc.setTextColor(bk_color);
      doc.text('Information Systems Management', 76, 268);

      doc.setTextColor(bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Systems Analysis and Development', 76, 278);
      doc.setTextColor(tt_color);
      doc.text('2017', 190, 278);
      doc.setTextColor(bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('ETEP - University Center', 76, 284);
      doc.setTextColor(bk_color);
      doc.text('Computer Programming', 76, 290);
    }
    else {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(tt_color);
      doc.text('Formação', 76, 251);
      doc.setFillColor(ln_color);
      doc.line(76, 253, 204, 253, 'F');
      doc.setFontSize(10);

      doc.setTextColor(bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Master of Business Administration - MBA', 76, 260);
      doc.setTextColor(tt_color);
      doc.text('2018', 190, 260);
      doc.setTextColor(bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('Laureate Education, Inc.', 76, 265);
      doc.setTextColor(bk_color);
      doc.text('Gestão de Sistemas de Informação', 76, 270);

      doc.setTextColor(bk_color);
      doc.setFont('helvetica', 'bold');
      doc.text('Análise e Desenvolvimento de Sistemas', 76, 280);
      doc.setTextColor(tt_color);
      doc.text('2017', 190, 280);
      doc.setTextColor(bg_color);
      doc.setFont('helvetica', 'normal');
      doc.text('ETEP - University Center', 76, 285);
      doc.setTextColor(bk_color);
      doc.text('Computer Programming', 76, 290);
    }

  }
}
