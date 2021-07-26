---
layout: default
title: Sponsors
order: 4
extra_css:
- sponsors.css

gold_sponsors:
silver_sponsors: 
  - 
    image: atlassian.png
    name: Atlassian
    url: "https://atlassian.com"
  - 
    image: fit.png
    name: "Faculty of Information Technology"
    url: "https://www.monash.edu/it"
bronze_sponsors:
  - 
    image: optiver.png
    name: Optiver
    url: "https://www.optiver.com"
bespoke_sponsors:
  -
    image: careerConnect.png
    name: Monash Career Connect
    url: "https://www.monash.edu/career-connect"
---
<!--{% include sponsor_level.html level='Gold' sponsors=page.gold_sponsors %}
<div markdown="1">
---
</div>
<br>-->
{% include sponsor_level.html level='Silver' sponsors=page.silver_sponsors %}
<div markdown="1">
---
</div>
<br>
{% include sponsor_level.html level='Bronze' sponsors=page.bronze_sponsors %}
<div markdown="1">
---
</div>
<br>
{% include sponsor_level.html level='Bespoke' sponsors=page.bespoke_sponsors %}
<div markdown="1">
---
</div>