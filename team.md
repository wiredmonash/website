---
layout: default
title: Team
order: 5
extra_css:
- team.css

committee:
- 
  name: Gavin Douch
  title: President & ACSA President
  image: gavinDouch.jpg
  email: president@wired.org.au
- 
  name: Vibhas Kamal
  title: Vice President
  image: vibhasKamal.jpg
  email: vicepresident@wired.org.au
- 
  name: Kanako Bouyer
  title: Secretary
  image: kanakoBouyer.jpg
  email: secretary@wired.org.au
- 
  name: Aaron Chao
  title: Treasurer
  image: aaronChao.jpg
  email: treasurer@wired.org.au
- 
  name: Keaton Tang
  title: General Representative
  image: keatonTang.jpg
  email: genreps@wired.org.au
- 
  name: Ryhan Joshi
  title: General Representative
  image: ryhanJoshi.jpg
  email: genreps@wired.org.au

industry:
-
  name: Scott Yip
  title: Industry Director
  image: scottYip.png
  email: ind.director@wired.org.au
-
  name: Jonathan Lopez
  title: Industry Secretary
  image: jonathanLopez.jpg
  email: ind.secretary@wired.org.au
-
  name: Maureen Priscilla Rusli
  title: Sponsorship Officer
  image: maureenPriscillaRusli.png
  email: sponsorship@wired.org.au
-
  name: Darcy Myring
  title: Careers Officer
  image: darcyMyring.png
  email: careers.officer@wired.org.au

publications:
-
  name: Devshi Janakantha
  title: Publications Director
  image: devshiJanakantha.png
  email: pub.director@wired.org.au
-
  name: Michelle Oeum
  title: Publications Secretary
  image: michelleOeum.jpg
  email: pub.secretary@wired.org.au
-
  name: Tina Jiang
  title: Newsletter Editor
  image: tinaJiang.jpg
  email: newsletter.editor@wired.org.au
-
  name: Ruoqi Wang
  title: Podcast Team Member
  image: ruoqiWang.jpg
  email: podcast@wired.org.au
-
  name: Edison Vong
  title: Podcast Team Member
  image: edisonVong.jpg
  email: podcast@wired.org.au
-
  name: Zhou Kong
  title: Social Media Officer
  image: zhouKong.jpg
  email: socialmedia.officers@wired.org.au
-
  name: Sao Jun Hew
  title: Social Media Officer
  image: saoJunHew.jpg
  email: socialmedia.officers@wired.org.au
-
  name: Yashdeep S Dahiya
  title: Technical Officer
  image: yashdeepDahiya.png
  email: technical.officer@wired.org.au
-
  name: Nguyen Manh Hai Vo
  title: Design Officer
  image: haiVo.jpg
  email: design@wired.org.au

malaysia:
-
  name: Tze Yuan Koay
  title: Cochair (External)
  image: tzeYuanKoay.jpg
  email: mal.head@wired.org.au
-
  name: Yi Chuan Tey
  title: Cochair (Internal)
  image: chuanTeyYi.jpg
  email: mal.head@wired.org.au
-
  name: Avantika Mishra
  title: Marketing Lead
  image: avantikaMishra.jpg
  email: mal.marketing@wired.org.au
-
  name: Zolyn Lang
  title: Marketing Associate
  image: zolynLang.jpg
  email: mal.marketing@wired.org.au
-
  name: Ho Suu Yin
  title: Marketing Associate
  image: suuYinHo.png
  email: mal.marketing@wired.org.au
-
  name: Shamrethan Balendran
  title: Marketing Associate
  image: shamrethanBalendran.png
  email: mal.marketing@wired.org.au
-
  name: Yoong Kiat Tan
  title: Operations Lead
  image: yoongKiatTan.jpg
  email: mal.operations@wired.org.au
-
  name: Jian Hui Lee
  title: Operations Associate
  image: jianHuiLee.jpg
  email: mal.operations@wired.org.au

mcpc:
- 
  name: Jackson Goerner
  title: President & Secretary
  image: jacksonGoerner.jpg
- 
  name: Ali Toosi
  title: Vice President & Academic Representative
  image: aliToosi.jpg
- 
  name: Amin Sakzad
  title: Treasurer
  image: aminSakzad.png
---
<h2>Committee</h2>
<div class="committee-grid">
  {% for member in page.committee %}
    <div class="committee-card">
      <img class="committee-image" src="assets/images/team/{{ member.image }}" alt="{{ member.name }}: {{ member.title }}">
      <div class="committee-text">
        <a href="mailto:{{ member.email }}">
          <h4 class="committee-name">{{ member.name }}</h4>
        </a>
        <span class="committee-title">{{ member.title }}</span>
      </div>
    </div>
  {% endfor %}
</div>
<br>
<!-- <p>Governed by the <a href="{{ '/assets/docs/constitution.pdf' | relative_url }}" target="_blank">Constitution</a>. <a href="mailto:committee@wired.org.au">Email the Committee</a>.</p> -->
<div markdown="1" align="center">
*Governed by the [Constitution](assets/docs/constitution.pdf)* • *Email the Committee: [committee@wired.org.au](mailto:committee@wired.org.au)*

---

</div>
<br>
<h2>Industry Subcommittee</h2>
<div class="committee-grid">
  {% for member in page.industry %}
    <div class="committee-card">
      <img class="committee-image" src="assets/images/team/{{ member.image }}" alt="{{ member.name }}: {{ member.title }}">
      <div class="committee-text">
        <a href="mailto:{{ member.email }}">
          <h4 class="committee-name">{{ member.name }}</h4>
        </a>
        <span class="committee-title">{{ member.title }}</span>
      </div>
    </div>
  {% endfor %}
</div>
<br>
<!-- <p>Governed by the <a href="{{ '/assets/docs/indSubToR.pdf' | relative_url }}" target="_blank">IndSub ToR</a>. <a href="mailto:industry@wired.org.au">Email IndSub</a>.</p> -->
<div markdown="1" align="center">
*Governed by the [Industry Subcommittee Terms of Reference](assets/docs/indSubToR.pdf)* • *Email: [industry@wired.org.au](mailto:industry@wired.org.au)*


---
</div>
<br>
<h2>Publications Subcommittee</h2>
<div class="committee-grid">
  {% for member in page.publications %}
  <div class="committee-card">
    <img class="committee-image" src="assets/images/team/{{ member.image }}" alt="{{ member.name }}: {{ member.title }}">
    <div class="committee-text">
      <a href="mailto:{{ member.email }}">
        <h4 class="committee-name">{{ member.name }}</h4>
      </a>
      <span class="committee-title">{{ member.title }}</span>
    </div>
  </div>
  {% endfor %}
</div>
<br>
<div markdown="1">
**Currently recruiting » [Click here to apply!](https://docs.google.com/forms/d/e/1FAIpQLSdINeypsblr8Zk0dUgld43SPJLu0qLiLut5_E26bOzKgMDrBQ/viewform?usp=sf_link)**
</div>
<br>
<div markdown="1" align="center">
*Governed by the [Publications Subcommittee Terms of Reference](assets/docs/pubSubToR.pdf)* • *Email: [publications@wired.org.au](mailto:publications@wired.org.au)*

---
</div>
<br>
<h2>Malaysia Chapter Board</h2>
<div class="committee-grid">
  {% for member in page.malaysia %}
  <div class="committee-card">
    <img class="committee-image" src="assets/images/team/{{ member.image }}" alt="{{ member.name }}: {{ member.title }}">
    <div class="committee-text">
      <a href="mailto:{{ member.email }}">
        <h4 class="committee-name">{{ member.name }}</h4>
      </a>
      <span class="committee-title">{{ member.title }}</span>
    </div>
  </div>
  {% endfor %}
</div>
<br>
<div markdown="1" align="center">
*Governed by the [Malaysia Charter](assets/docs/malaysiaCharter.pdf)* • *Email: [malaysia.board@wired.org.au](mailto:malaysia.board@wired.org.au)*

---
</div>
<br>
<h2>MCPC Executive Team</h2>
<div class="committee-grid">
  {% for member in page.mcpc %}
    <div class="committee-card">
      <img class="committee-image" src="assets/images/team/{{ member.image }}" alt="{{ member.name }}: {{ member.title }}">
      <div class="committee-text">
        <h4 class="committee-name">{{ member.name }}</h4>
        <span class="committee-title">{{ member.title }}</span>
      </div>
    </div>
  {% endfor %}
</div>
<br>
<div markdown="1" align="center">
*Governed by the [MCPC Constitution](https://blog.monashicpc.com/constitution/)* • *Visit [website](https://blog.monashicpc.com)*

---
</div>
<br>
<h2>Education Subcommittee</h2>
<!-- <div>Currently recruiting. <a href="https://docs.google.com/forms/d/e/1FAIpQLSdINeypsblr8Zk0dUgld43SPJLu0qLiLut5_E26bOzKgMDrBQ/viewform?usp=sf_link">Click here to apply</a>.</div>
<p>Governed by the <a href="{{ '/assets/docs/eduSubToR.pdf' | relative_url }}" target="_blank">EduSub ToR</a>.</p> -->
<div markdown="1">
**Currently recruiting » [Click here to apply!](https://docs.google.com/forms/d/e/1FAIpQLSdINeypsblr8Zk0dUgld43SPJLu0qLiLut5_E26bOzKgMDrBQ/viewform?usp=sf_link)**
</div>
<br>
<div markdown="1" align="center">
*Governed by the [Education Subcommittee Terms of Reference](assets/docs/eduSubToR.pdf)* 

---
</div>
<br>
<h2>Events Subcommittee</h2>
<!-- <div>Currently recruiting. <a href="https://docs.google.com/forms/d/e/1FAIpQLSdINeypsblr8Zk0dUgld43SPJLu0qLiLut5_E26bOzKgMDrBQ/viewform?usp=sf_link">Click here to apply</a>.</div>
<p>Governed by the <a href="{{ '/assets/docs/eveSubToR.pdf' | relative_url }}" target="_blank">EveSub ToR</a>.</p> -->
<div markdown="1">
**Currently recruiting » [Click here to apply!](https://docs.google.com/forms/d/e/1FAIpQLSdINeypsblr8Zk0dUgld43SPJLu0qLiLut5_E26bOzKgMDrBQ/viewform?usp=sf_link)**
</div>
<br>
<div markdown="1" align="center">
*Governed by the [Events Subcommittee Terms of Reference](assets/docs/eveSubToR.pdf)* 

---
</div>