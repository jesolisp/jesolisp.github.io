---
layout: page
permalink: /repositories/
title: Repositorios
description: Repositorios para las clases de docencia y proyectos de investigación.
nav: true
nav_order: 4
---

## GitHub Repositorios

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
