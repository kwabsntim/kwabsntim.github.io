---
layout: inner
title: Projects
subtitle: things i have built
permalink: /projects/
accent: "#eab308"
---

{% for project in site.data.projects %}<div class="project-card-wrapper">{% if project.url %}<a href="{{ project.url }}" class="project-card-link" target="_blank" rel="noopener noreferrer">{% endif %}<article class="project-card"><div class="card-header"><span class="title-primary">{{ project.name }}</span><span class="project-year">{{ project.year }}</span></div><p class="card-description">{{ project.description }}</p><div class="tags-container">{% for tag in project.tags %}<span class="tag">{{ tag }}</span>{% endfor %}</div></article>{% if project.url %}</a>{% endif %}</div>{% unless forloop.last %}<hr class="project-divider">{% endunless %}{% endfor %}
