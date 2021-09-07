---
layout: default
---

<style>
  /* hide scrollbar but allow scrolling */
  .container {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: auto; 
    background: #6e297e;
    border-radius: 12px;
    max-height: 456px; /* 3 episodes displayed without scrolling */
  }

  .container::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  .panel {
    background: #870099;
    width: 100%;
  }

  .banner {
    background: #66107B;
    width: 100%;
    padding: 4px;
  }
</style>

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


<div class="container">
  {% assign sorted_episodes = site.data.podcast | sort:"number" | reverse %}
  {% for item in sorted_episodes %}
    {{ item.iframe }}
  {% endfor %}
</div>

<br>

<div markdown="1">

---

</div>
<br>
<div align="middle" class="panel">
<img src="./assets/images/podcast.gif" width="200"/>
</div>