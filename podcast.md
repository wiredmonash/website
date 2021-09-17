---
layout: default
extra_css:
- podcast.css
---

<!-- Logo -->
<div align="center" class="banner">
<img src="./assets/images/wired_in.png" alt="WIRED_in Logo" width="250"/>
</div>

<h2 align="middle">The Official WIRED Podcast!</h2>  
Want to know the best Uni hacks? :computer: Uncover hidden conspiracies? :alien: And stay connected to the latest news around the Monash Campus?  
Plug in your headphones and stay WIRED_in!
<p>
<i>Hosted by Edison Vong and Ruoqi Wang<br>
Affiliated with <a href="https://www.radiomonash.net/" target="_blank">Radio Monash</a></i>
</p>

<div float="left" align="middle" margin="10px">
    {% for platform in site.data.subscribe %}
      <a href="{{ platform.url }}" target="_blank" rel="noreferrer noopener">
      <img src="{{ platform.image }}" height="50" style="margin-top:10px; margin-right:10px; margin-left:10px"/>
      </a>
    {% endfor %}<br>
    <div style="color:#6e297e; margin:10px; margin-bottom:20px"><b>Subscribe to our podcast!</b></div>
</div>

<h3>Share your thoughts with us!</h3>
The WIRED Podcast team is looking for students to send in their thoughts and opinions of the past year, whether it's about the lockdown uni experience, advice to first years, mistakes to avoid, best units to take, or anything else you want to share :smile:
Record a 5-15 second audio snippet and send it over to us via
email (<podcast@wired.org.au>), include your name and faculty if you want a shoutout in the bio or you can stay anonymous.

<div markdown="1">

### Episodes
</div>


<!-- <div class="container">
  {% assign sorted_episodes = site.data.podcast | sort:"number" | reverse %}
  {% for item in sorted_episodes %}
    {{ item.iframe }}
  {% endfor %}
</div> -->

<div class="container" style="padding:10px 32px 10px 32px">
{% assign sorted_episodes = site.data.podcast | sort:"number" | reverse %}
{% for episode in sorted_episodes %}
  <h3 style="color:white">{{ episode.number }}. {{ episode.title }}</h3>
  <p style="font-family:'Courier New';color:white">{{ episode.description }}</p>
  <audio controls style="width: 100%;">
    {% assign base = './assets/podcastEpisodes/' %}
    {% assign ext = 'mp3' %}
    {% assign path = base | append: episode.number | append: '.' | append: ext %}
    <source align="center" src='{{ path }}' type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <hr>
{% endfor %}
</div>

<br>

<div markdown="1">

---

</div>
<br>
<div align="middle" class="panel">
<img src="./assets/images/WIRED_in.gif" width="200"/>
</div>