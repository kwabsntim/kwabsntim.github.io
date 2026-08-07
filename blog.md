---
layout: default
title: Blog
permalink: /blog/
---

#### Blog

{% if site.posts.size > 0 %}
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <p class="post-date">{{ post.date | date: "%b %d, %Y" }}</p>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% if post.description %}<p>{{ post.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>No posts yet.</p>
{% endif %}
