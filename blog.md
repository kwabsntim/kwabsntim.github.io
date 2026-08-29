---
layout: inner
title: Blog
subtitle: "stories about the journey so far"
permalink: /blog/
accent: "#22c55e"
---

{% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

<div class="archive-container">
  {% for yearGroup in postsByYear %}
    <section class="year-group">
      <h2 class="year-heading">{{ yearGroup.name }}</h2>

      <div class="posts-list">
        {% for post in yearGroup.items %}
          <article class="post-card">
            <header class="post-card-header">
              <h3 class="post-card-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </h3>
              <time class="post-card-date">{{ post.date | date: "%b %-d, %Y" }}</time>
            </header>

            {% if post.description %}
              <p class="post-excerpt">{{ post.description }}</p>
            {% elsif post.excerpt %}
              <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
            {% endif %}

            {% if post.tags.size > 0 %}
              <div class="post-tags">
                {% for tag in post.tags %}
                  <span class="post-tag">#{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}

  {% if site.posts.size == 0 %}
    <p class="no-posts">No posts yet.</p>
  {% endif %}
</div>
