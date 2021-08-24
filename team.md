---
layout: default
title: Team
order: 5
extra_css:
- team.css
---

{% for team in site.data.teams %}
  <h2>{{ team.team }}</h2>
  <div class="committee-grid">
    {% for member in team.members %}
      <div class="committee-card">
        <div class="image-cropper">
          <a href="mailto:{{ member.email }}">
            <img class="committee-image" src="assets/images/team/{{ member.image }}" alt="{{ member.name }}: {{ member.title }}">
          </a>
        </div>
        <div class="committee-text">
          <h4 class="committee-name">{{ member.name }}</h4>
          <span class="committee-title">{{ member.title }}</span>
        </div>
      </div>
    {% endfor %}
  </div>

  <br>
  
  <div align="center">
    {% if team.recruiting_form %}
      <div style="padding-bottom:12px">Currently recruiting » 
        <a href="{{ team.recruiting_form | relative_url }}" style="padding-bottom:10px">
          Click here to apply
        </a>
      </div>
    {% endif %}
  </div>
  
  <div align="center">
    <i>Governed by the 
      <a href="{{ team.constitution_url | relative_url }}">
        {{ team.constitution_title }}
      </a>
    </i>
    {% if team.email %}
     • <i>Email: <a href="mailto:{{ team.email }}">{{ team.email }}</a></i>
    {% endif %}
    {% if team.website %}
     • <i>Visit <a href="{{team.website}}">website</a></i>
    {% endif %}
  </div>
  <br>
  <div markdown="1">
  ---
  </div>
  <br>
  
  {% endfor %}