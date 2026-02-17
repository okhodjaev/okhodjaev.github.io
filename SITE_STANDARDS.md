# СТАНДАРТЫ САЙТА okhodjaev.com
*Единый стандарт для всех страниц и эссе*

---

## 1. FRONT MATTER — ОБЯЗАТЕЛЬНЫЙ СТАНДАРТ ДЛЯ КАЖДОГО ЭССЕ

Каждый файл эссе в `_posts/` должен содержать ВЕСЬ этот front matter:

```yaml
---
title: "Полное название эссе"
date: YYYY-MM-DD
permalink: /essays/slug-name/
description: "Краткое описание 1-2 предложения для SEO и превью."
tags: [AI governance, тег2, тег3]
layout: single
author_profile: false
classes: wide
toc_icon: "file-text"
excerpt: "Цитата или ключевой тезис эссе."
---
```

**Обязательные поля:** все восемь. Не упускать ни одного.

---

## 2. СТРУКТУРА ФАЙЛА ЭССЕ

```
[front matter]
---

#### Contents

- [I. Название раздела](#i-название-раздела)
- [II. Название раздела](#ii-название-раздела)
- [III. Название раздела](#iii-название-раздела)
- [IV. Название раздела](#iv-название-раздела)
- [Implications](#implications)
- [Signals to Watch](#signals-to-watch)
- [The Questions That Remain Open](#the-questions-that-remain-open)
- [Sources & Notes](#sources--notes)

*Первая строка текста (hook).*

[тело эссе]

---

## Sources & Notes

[1] ...
[2] ...

---

*Oybek Khodjaev: systems transformation analyst, Founder & CEO of INVEXI LLC.
Former Deputy Governor (Deputy Khokim) of Samarkand Region. Previously, Treasury Director
and Deputy Chairman of the Management Board at JSC UzAgroIndustrialBank.
More than thirty years' experience in economics, banking, finance, and business
across Uzbekistan and the CIS.*

**Published** Month DD, YYYY

<a href="https://okhodjaev.substack.com" target="_blank">Substack</a> · <a href="https://x.com/O_Khodjaev" target="_blank">X.com</a> · <a href="https://www.linkedin.com/in/oybek-khodjaev/" target="_blank">LinkedIn</a>
```

**Важно:** Contents пишется ВРУЧНУЮ в тексте — НЕ через `toc: true` в front matter.

---

## 3. ИМЕНОВАНИЕ ФАЙЛОВ

```
_posts/YYYY-MM-DD-slug-name.md
```

Дата в имени файла = дата в front matter (`date: YYYY-MM-DD`). Всегда синхронны.

**Slug (название файла):** строчные буквы, дефисы вместо пробелов, без спецсимволов.

Примеры:
- `2026-02-12-the-illusion-of-control.md`
- `2026-02-17-the-transparency-trap.md`

---

## 4. _config.yml — КРИТИЧЕСКИЕ НАСТРОЙКИ

```yaml
# Date / Time
timezone: UTC
future: true

# Build settings
markdown: kramdown
future: true
```

**timezone: UTC** — чтобы дата публикации не зависела от серверного timezone GitHub (California UTC-8 или NY UTC-5).

**future: true** — чтобы посты с сегодняшней датой публиковались сразу, не ожидая полночи по UTC.

---

## 5. СТАНДАРТ ШИО (ширина страницы)

Все эссе используют `classes: wide` — единая широкая верстка по всему сайту.

---

## 6. СТАНДАРТ BIO (подпись автора)

Единая формула в конце каждого эссе — всегда курсивом:

```markdown
*Oybek Khodjaev: systems transformation analyst, Founder & CEO of INVEXI LLC.
Former Deputy Governor (Deputy Khokim) of Samarkand Region. Previously, Treasury Director
and Deputy Chairman of the Management Board at JSC UzAgroIndustrialBank.
More than thirty years' experience in economics, banking, finance, and business
across Uzbekistan and the CIS.*
```

---

## 7. СТАНДАРТ ИСТОЧНИКОВ

- Минимум 8 источников на эссе
- Формат: `[N] Автор. *Название.* Издание, год. [domain.com](https://url)`
- Каждый источник — кликабельная ссылка
- В конце блока: `Full essay and updated sources: [okhodjaev.com/essays/slug](https://okhodjaev.com/essays/slug/)`

---

## 8. ПОСЛЕДОВАТЕЛЬНОСТЬ ПУБЛИКАЦИИ

| Время GMT | Время Ташкент | Платформа |
|-----------|--------------|-----------|
| 13:00 | 18:00 | okhodjaev.com |
| 13:30 | 18:30 | Substack |
| 14:00–16:00 | 19:00–21:00 | LinkedIn |
| 15:00 | 20:00 | X.com |
| 15:30 | 20:30 | Telegram (RU + UZ) |

Оптимальные дни: **вторник и пятница**.

---

## 9. CHECKLIST ПЕРЕД ПУБЛИКАЦИЕЙ

- [ ] Front matter содержит все 8 полей
- [ ] Имя файла = дата в front matter
- [ ] Contents написан вручную
- [ ] classes: wide присутствует
- [ ] Bio в конце — стандартная формула
- [ ] Минимум 8 источников, все кликабельны
- [ ] Проверить на мобильном и десктопе после публикации
- [ ] essays.md обновлён (эссе перенесено из Coming Soon в Published)
- [ ] index.md обновлён (новое эссе добавлено в Latest Essays)

---

*Документ создан: февраль 2026*
*Применяется ко всем эссе начиная с Essay 1*
