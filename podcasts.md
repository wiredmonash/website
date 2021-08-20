---
layout: default

platforms:
- 
  name: YouTube
  image: ./assets/images/icons/youtube.png
  url: https://www.youtube.com/channel/UCKl61MY-083KCOfqT9ctXsQ
- 
  name: Spotify
  image: ./assets/images/icons/spotify.png
  url: https://open.spotify.com/show/0UlSqEke0Fo3AmNfzNFbNl?si=nJJzqmnFTtmrM14DrTc6-w&dl_branch=1&fbclid=IwAR2IsML08wRBQvqvP_hRjvjAU_-Xw-1zZKJp-WNgFwCD3i56PRDJy2-EQQc&nd=1
- 
  name: SoundCloud
  image: ./assets/images/icons/soundcloud.png
  url: https://soundcloud.com/user-595902769?fbclid=IwAR3vEUM1ZiXLJa1fj7jOPKx3GuKvHa_UTviNHM6ZhyZjJQgGgarDUgYlii0
- 
  name: RSS
  image: ./assets/images/icons/rss-feed.png
  url: ./podcast.rss
---
<!-- Logo -->
<div align="left">
<img src="./assets/images/wired_in.png" alt="WIRED_in Logo" width="250"/>
</div>

## The Official WIRED Podcast  
Want to know the best Uni hacks? Uncover hidden conspiracies? And stay connected to the latest news around the Monash Campus?
Plug in your headphones and stay WIRED_in!
<p>
<i>Hosted by Edison Vong and Ruoqi Wang<br>
Affiliated with Radio Monash</i>
</p>

<div float="left" align="middle" margin="10px">
    {% for platform in page.platforms %}
      <a href="{{ platform.url }}" target="_blank" rel="noreferrer noopener">
      <img src="{{ platform.image }}" height="50" style="margin-right:20px"/>
      </a>
    {% endfor %}
</div>

<h3>Share your thoughts with us!</h3>
The WIRED Podcast team is looking for students to send in their thoughts and opinions of the past year, whether it's about the lockdown uni experience, advice to first years, mistakes to avoid, best units to take, or anything else you want to share :)
Record a 5-15 second audio snippet and send it over to us via
email (<podcast@wired.org.au>), include your name and faculty if you want a shoutout in the bio or you can stay anonymous.

<div markdown="1">

---

</div>
<br>
<div align="middle">
<img src="./assets/images/podcast.gif" width="200"/>
</div>