---
layout: page
title: Blog
permalink: /blog/
---

<h1>writings</h1>

{% if site.posts.size > 0 %}
  <ul class="post-list">
    {% for post in site.posts %}
      <li class="post-list-item">
        <a href="{{ post.url | relative_url }}" class="post-list-link">
          <span class="post-list-title">{{ post.title }}</span>
          <span class="post-list-date">{{ post.date | date: "%b %d, %Y" }}</span>
        </a>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p class="no-posts">No posts yet.</p>
{% endif %}
