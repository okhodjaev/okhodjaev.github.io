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

*Oybek Khodjaev researches AI governance and advises on institutional readiness in the age of AI, with a particular focus on systemic risk. Drawing on more than 35 years of experience across banking, finance, public administration, and business in Uzbekistan and the CIS, he develops practical approaches to assessing the institutional limits of AI governance. He is the author of the "Beyond Control" essay series, which advances a structural theory of the limits of AI governance.*

**Published** Month DD, YYYY

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
*Oybek Khodjaev researches AI governance and advises on institutional readiness in the age of AI, with a particular focus on systemic risk. Drawing on more than 35 years of experience across banking, finance, public administration, and business in Uzbekistan and the CIS, he develops practical approaches to assessing the institutional limits of AI governance. He is the author of the "Beyond Control" essay series, which advances a structural theory of the limits of AI governance.*
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

---

## 10. СТАНДАРТ GOVERNANCE BRIEFS — HEADER И FOOTER

Применяется ко всем аналитическим запискам серии Governance Briefs. Обязателен для EN и RU версий каждой записки.

### Header (первые 3 строки после front matter)

**EN:**
```
*Analytical Note No. [N] · Series: Governance Briefs · [Month] [Year]*
*Operationalises: Essay [X] "[Title]"[, Essay Y "Title"] — Beyond Control: Theory of Limits of AI Governance*
*[Русская версия](/governance-briefs/[slug]-ru/)*
```

**RU:**
```
*Аналитическая записка №[N] · Серия: Governance Briefs · [Месяц] [Год]*
*Операционализирует: Эссе [X] «[Название]»[, Эссе Y «Название»] — серия «Beyond Control: Theory of Limits of AI Governance»*
*[English version](/governance-briefs/[slug]/)*
```

### Footer (после блока Sources, после горизонтальной линии `---`)

**EN:**
```
*Oybek Khodjaev researches AI governance and advises on institutional readiness in the age of AI, with a particular focus on systemic risk. Drawing on more than 35 years of experience across banking, finance, public administration, and business in Uzbekistan and the CIS, he develops practical approaches to assessing the institutional limits of AI governance. He is the author of the "Beyond Control" essay series, which advances a structural theory of the limits of AI governance.*

**Published** [Month DD, YYYY]

<a href="https://okhodjaev.substack.com" target="_blank">Substack</a> · <a href="https://x.com/O_Khodjaev" target="_blank">X.com</a> · <a href="https://www.linkedin.com/in/oybek-khodjaev/" target="_blank">LinkedIn</a>
```

**RU:**
```
*Ойбек Ходжаев исследует управление ИИ и консультирует по вопросам институциональной готовности к эпохе искусственного интеллекта, уделяя особое внимание системному риску. Опираясь на более чем 35-летний опыт в банковском секторе, финансах, государственном управлении и бизнесе в Узбекистане и СНГ, он разрабатывает практические подходы к оценке институциональных пределов управления ИИ. Автор серии эссе «Beyond Control», в которой развивает структурную теорию пределов управления ИИ.*

**Опубликовано** [Месяц ГГГГ]

```

### Запрещено

- `1 of 9` / `1 из 9` — никогда. Только `No. N` / `№N`
- Название серии в переводе на русский — только английское: `Beyond Control: Theory of Limits of AI Governance`
- Строка `Full brief and updated sources: okhodjaev.com/...` — удалена как артефакт Substack
- Строка `Полная версия и источники: okhodjaev.com/...` — аналогично
- Plain text URL вместо гиперссылки для языковой версии
- Висячие звёздочки вокруг строк header (баг italic-форматирования)
- Разные варианты консалтинговой строки — только формула выше

### Именование файлов

```
_posts/YYYY-MM-DD-governance-brief-[N]-[slug].md
_posts/YYYY-MM-DD-governance-brief-[N]-[slug]-ru.md
```

Примеры:
- `2026-05-18-the-manageability-question.md` (Brief 1, исключение — создан до введения стандарта)
- `2026-05-20-governance-brief-2-the-paper-architecture.md`
- `2026-05-25-governance-brief-3-the-conflict-of-functions.md`
- `2026-05-27-governance-brief-4-audit-without-access.md`
