---
title: "Research"
permalink: /research/
author_profile: true
---


## Selected Projects

{% include base_path %}

{% assign sorted_projects = site.projects | sort: "order" %}

<div class="grid__wrapper">
{% for p in sorted_projects %}
  <div class="grid__item">
    <article class="archive__item">

      {% if p.link %}
        <a href="{{ p.link }}">
          <img src="{{ p.image | relative_url }}" alt="{{ p.title }}">
        </a>
      {% else %}
        <img src="{{ p.image | relative_url }}" alt="{{ p.title }}">
      {% endif %}

      <h2 class="archive__item-title">
        {% if p.link %}
          <a href="{{ p.link }}">{{ p.title }}</a>
        {% else %}
          {{ p.title }}
        {% endif %}
      </h2>

      {% if p.excerpt %}
        <p class="archive__item-excerpt">{{ p.excerpt }}</p>
      {% endif %}

    </article>
  </div>
{% endfor %}
</div>
