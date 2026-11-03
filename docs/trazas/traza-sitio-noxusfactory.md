# Traza de objetivo — Sitio corporativo Noxus Factory

**Fecha:** 2026-11-02 · **Autor:** sesión de ingeniería (agente build) · **Alcance:** `C:\xampp\htdocs\NoxusFactory`
**Estado:** completo y verificado en navegador real (Chromium vía Playwright) a 320, 390, 834, 1440 y 2560 px.

---

## Resumen ejecutivo (5 líneas)

1. Se construyó un sitio estático de una sola página (HTML5 + Bootstrap 5 por CDN + CSS propio + JS vanilla) para Noxus Factory, sin frameworks ni build step.
2. Todo el CSS vive en `styles.css` (0 bloques `<style>` y 0 atributos `style=` en el HTML) y toda la interactividad en `main.js`.
3. El bilingüe EN/ES es por atributos `data-i18n*` con diccionario de 213 claves por idioma, persistido en `localStorage`.
4. El cotizador calcula rango, plazo y equipo con un modelo explícito; el formulario valida en cliente y abre `mailto:` (no hay backend).
5. Cinco defectos reales se detectaron y corrigieron en la verificación: desborde de 6 px en mobile, etiquetas recortadas, objetivos táctiles < 24 px, y contenido invisible si `main.js` no cargaba.

---

## 1. Objetivo y criterios de aceptación

| Criterio pedido | Estado | Evidencia |
|---|---|---|
| HTML5 semántico, CSS3 con variables, JS ES6+ vanilla, Bootstrap 5 por CDN | Cumplido | `index.html`, `styles.css:13` (`:root`), `main.js:1` |
| Prohibido React/Vue/TS/JSX/Tailwind/Sass/Vite | Cumplido | `git status` sólo 3 archivos; ninguna dependencia |
| Responsive mobile-first (mobile, tablet, laptop, 4K) | Cumplido | verificación a 320/390/834/1440/2560 con desborde 0 |
| Esquinas estrictamente cuadradas | Cumplido | `styles.css:33` `border-radius: 0 !important` en `*`; medido `0px` en 9 componentes |
| Paleta y tipografías indicadas | Cumplido | tokens en `styles.css:14-24`; Inter/Space Grotesk desde Google Fonts |
| Header fijo + nav + branding + selector EN/ES + CTA | Cumplido | `index.html:38` |
| Hero con panel geométrico tipo consola | Cumplido | `index.html:106`, `styles.css:487` |
| 4 tarjetas de software + 3 de infraestructura | Cumplido | `index.html:193`, `index.html:286` |
| Cotizador interactivo | Cumplido | `index.html:441`, `main.js:666` |
| 4 pilares + contacto validado + footer | Cumplido | `index.html:401`, `index.html:540`, `index.html:658` |
| **CSS 100 % separado del HTML** | Cumplido | verificación: 0 `<style>`, 0 `style="..."` |

---

## 2. Fases cronológicas reales

### Fase 1 — Estructura y contenido (`index.html`)

- Header fijo con barra de progreso, marca, nav de 6 anclas, selector de idioma y CTA; offcanvas de Bootstrap para mobile.
- Hero de dos columnas: titular con `<span class="accent">` traducible vía `data-i18n-html`, franja de 4 indicadores y panel consola (`aria-hidden="true"`, decorativo).
- Secciones `#solutions` (4 tarjetas), `#infrastructure` (3), `#cases` (3), `#about`, `#estimator`, `#contact`, footer.
- **Decisión:** se añadieron `#cases` y `#about` porque el menú las enlazaba; sin ellas habría anclas muertas.
- **Si se altera:** cada `<section id>` es observada por `initActiveNav` (`main.js:613`) y usada por los enlaces del header y footer. Cambiar un `id` rompe el resaltado de navegación y deja enlaces muertos (verificado hoy: 0 anclas rotas).

### Fase 2 — Extracción total del CSS (`styles.css`)

- 347 reglas balanceadas, 36.126 bytes, 16 bloques temáticos numerados.
- Tokens → reset → tipografía → botones → header → hero/consola → secciones → tarjetas → casos → nosotros → cotizador → contacto → footer → animaciones → responsive → movimiento reducido.
- **Decisión:** `border-radius: 0 !important` con selector universal, no en cada componente: una sola fuente de verdad para la regla "esquinas cuadradas".
- **Si se altera:** los breakpoints viven al final (`styles.css:1366-1440`). Cambiar el orden de los media queries `991 / 900 / 767 / 575` invierte la cascada y rompe tablet/mobile.

### Fase 3 — i18n (`main.js:17` MESSAGES, `main.js:548` applyLanguage)

- Diccionario plano `clave → texto` con 213 claves por idioma; el español replica exactamente el conjunto del inglés.
- Atributos soportados: `data-i18n` (textContent), `data-i18n-html` (innerHTML controlado), `data-i18n-placeholder`, `data-i18n-aria`.
- El idioma inicial se decide en un script inline en `<head>` (`index.html:19-31`) leyendo `localStorage` **antes del primer pintado**, para evitar el flash de idioma; `main.js` completa la traducción al final del body.
- **Si se altera:** agregar una clave en un solo idioma hace que esa cadena quede en inglés por el fallback de `t()` (`main.js:512`). El verificador de cobertura detecta faltantes.

### Fase 4 — Cotizador (`main.js:666` buildEstimate, `main.js:694` renderEstimate)

- Modelo: costo base por tipo de servicio × factor de urgencia; plazo en semanas × factor; equipo sugerido por rango de especialistas.
- `MODELS` (`main.js:480`): software 45k–95k, infraestructura 28k–70k, ambos 72k–165k.
- `URGENCY` (`main.js:485`): 1–3 meses +25 % costo / 0,6× plazo; 3–6 +10 % / 0,8×; 6–12 ×1; 12+ −8 % / 1,15×.
- Redondeo comercial a USD 500; cobertura = presupuesto ÷ máximo, acotada 4–100 %.
- Salida: rango, plazo, equipo, barra de cobertura y badge de viabilidad (`range` / `tight` / `below`).
- **Decisión:** devolver un rango y no un número, y declarar explícitamente que no es oferta vinculante (`footer.disclaimer` y `quote.note`).

### Fase 5 — Formulario (`main.js:823` validateContactForm, `main.js:852` initContact)

- Reglas declarativas en `CONTACT_RULES` (`main.js:491`): obligatorios `name`, `email`, `service`, `message`; opcionales `company`; `phone` validado por patrón si se completa.
- Errores por campo con `aria-invalid` + `aria-describedby`; foco automático al primer inválido.
- Sin backend: se compone `mailto:` con asunto y cuerpo y se avisa al usuario con un mensaje honesto.
- **Si se altera:** si se agrega un campo al HTML hay que añadir su regla y su `<p data-error-for="...">`; si falta, el campo nunca se valida ni muestra error.

### Fase 6 — Verificación en navegador y correcciones

Se detectaron y corrigieron cuatro defectos reales:

1. **Desborde horizontal de 6 px en mobile:** `.row.g-5` (gutter 48 px) excede el padding del contenedor (18 px). Corregido acotando `--bs-gutter-x` en `≤767px` (`styles.css:1393`). Ahora `scrollWidth − clientWidth = 0` en 320/390/834/1440/2560.
2. **Etiquetas `specs` recortadas** ("Deliverables" 84 px en columna de 80 px). Corregido apilando etiqueta y valor en `≤575px`. Cero texto cortado en todos los anchos.
3. **Objetivos táctiles pequeños** (enlaces de tarjeta de 18 px de alto). Corregido con `padding-block` y botones sociales/cierre de 40 px en `≤991px` (cubre tablets). Ningún objetivo menor a 24 px en vistas táctiles.
4. **Contenido invisible si `main.js` falla:** `.js .reveal` dejaba `opacity: 0` y sólo el script revelaba. Se invirtió a mejora progresiva: el estado oculto es la clase `.reveal.is-hidden`, que aplica el propio JS; sin JS el contenido queda visible.

---

## 3. Archivos afectados y qué se rompe si se tocan

| Archivo | Rol | Punto central | Impacto de una modificación |
|---|---|---|---|
| `index.html` (47.847 B) | Estructura, claves i18n, anclas | `<head>` con script de idioma (`:19`), secciones (`:106`…`:540`), footer (`:658`) | Renombrar un `data-i18n` sin tocar `main.js` deja la cadena en inglés; cambiar un `id` rompe navegación activa, `aria-controls` o `label[for]` |
| `styles.css` (36.582 B) | Todo el diseño | Tokens (`:13`), header (`:186`), hero (`:423`), consola (`:487`), tarjetas (`:690`), cotizador (`:860`), responsive (`:1366-1440`) | Tocar tokens afecta contraste global (hoy todo AA); desordenar media queries rompe tablet/mobile |
| `main.js` (44.859 B) | Idiomas, cotizador, validación, header | `MESSAGES` (`:17`), `applyLanguage` (`:548`), `buildEstimate` (`:666`), `initContact` (`:852`), `init` (`:946`) | Cambiar nombres de clases/atributos usados por los selectores desactiva funciones en silencio; `init` aísla fallos, no los oculta (los registra en consola) |

**Vínculos cruzados:** `styles.css` depende de clases y estados que produce `main.js` (`is-scrolled`, `is-active`, `is-hidden`, `is-invalid`, `is-success`). Si se renombra un estado en JS hay que renombrarlo en CSS y viceversa, o el efecto desaparece sin error visible.

---

## 4. Contratos

### 4.1 Contrato de traducción

```html
<span data-i18n="nav.home">Home</span>
<h1 data-i18n-html="hero.title">…</h1>
<input data-i18n-placeholder="contact.namePh">
<nav data-i18n-aria="a11y.mainNav">
```

- Clave inexistente → se conserva el texto original del HTML (no se borra contenido).
- El idioma se cambia por botones `[data-set-lang="en|es"]`; no hay API global expuesta (`window.setLang` no existe a propósito).

### 4.2 Contrato del cotizador

- Entradas: `input[name="service"]` (`software|infrastructure|both`), `#budget` (10.000–250.000, paso 5.000), `input[name="timeline"]` (`1-3|3-6|6-12|12+`).
- Salida: bloque `#estimateContent` dentro de `#estimate` con `aria-live="polite"`.
- Error de entrada: `#estimateHint` visible, foco al primer radio de servicio.
- Reset: limpia resultado, conserva el idioma y resincroniza el slider.

### 4.3 Contrato del formulario

- IDs y reglas acoplados: `name`, `company`, `phone`, `email`, `service`, `message`.
- Salida: `mailto:contacto@noxusfactory.com` con asunto `Noxus Factory · <servicio>` y cuerpo etiquetado en el idioma activo.
- Estado visible en `#contactStatus` (`is-success` / `is-error`).

---

## 5. Reglas de negocio y seguridad aplicadas

- **Sin secretos:** no hay claves, tokens ni credenciales en el repositorio.
- **XSS:** todo texto interpolado en el resultado del cotizador pasa por `escapeHtml` (`main.js:518`); el único `innerHTML` con contenido variable es el del cotizador y usa cadenas ya escapadas.
- **Validación:** doble barrera en cliente (patrón de email y teléfono) con mensajes por campo; el sitio es estático, no hay servidor que confiar.
- **Integridad de terceros:** Bootstrap 5.3.3 con `integrity` SRI verificado contra el archivo real servido por jsDelivr.
- **Accesibilidad:** contraste AA en 30 pares texto/fondo medidos (mínimo 4.56:1), foco visible de 2 px, `skip-link`, `aria-pressed` en idioma, `aria-invalid` + `aria-describedby` en errores, `prefers-reduced-motion` respetado.
- **Honestidad funcional:** el sitio no envía correos ni guarda datos; no se afirma lo contrario en la interfaz.

---

## 6. Pruebas realizadas (comandos exactos)

| # | Comando | Resultado real |
|---|---|---|
| 1 | `node --check main.js` | `main.js sintaxis OK` |
| 2 | `node check-noxus.js` (cobertura i18n + higiene) | `Claves usadas en HTML: 194` / `EN: 213 | ES: 213` / `Faltantes: ninguna` / `Estilos inline en HTML: 0` / `IDs duplicados: []` |
| 3 | `node sri.js` (hash real del CDN) | `CSS 200 sha384-QWTK…ALEwIH` · `JS 200 sha384-Yvpc…J6IeHz` — coinciden con los del HTML |
| 4 | `php -S 127.0.0.1:8090 -t .` + `curl` | `index.html 200 46939B` · `styles.css 200 36126B` · `main.js 200 44431B` |
| 5 | `python noxus_final.py` (Playwright, 5 anchos) | `RESULTADO: TODO OK` — desborde 0, texto cortado 0, consola sin errores en 320/390/834/1440/2560 |
| 6 | `python noxus_layout.py` (contraste calculado) | 30/30 pares pasan AA; mínimo 4.56:1 en `specs dt` |
| 7 | `python noxus_nojs.py` | Sin JS: 7 secciones renderizadas, `html_len` 47.225; con JS: 20 `.reveal` y 0 ocultos tras recorrer la página |
| 8 | `python scroll.py` | `total_reveal: 20`, `ocultos_al_final: 0`, `opacidad_primera_seccion: 1` |
| 9 | `pwsh validar-estilo.ps1 -Ruta .` (guardián de estilo) | `0 error(es), 0 aviso(s), 0 nota(s)` sobre los 3 archivos |

**Flujos funcionales comprobados en navegador:**
- Idioma: EN inicial → ES (`html lang="es"`, H1 y botón traducidos, `aria-pressed="true"`, `localStorage=es`) → recarga mantiene ES.
- Cotizador software / 90.000 / 1–3 meses → `$56.500 – $119.000`, `6–10 semanas`, `3–5 especialistas`, cobertura 76 %, badge "ajustable" (aritmética correcta: 45.000×1,25 y 95.000×1,25).
- Reset oculta el resultado; envío sin servicio muestra el aviso.
- Formulario vacío → 4 campos inválidos, foco en `name`, `aria-invalid="true"`, `aria-describedby="error-name"`.
- Email `ana@sinpunto` → 1 campo inválido, mensaje "Ingrese un correo válido.", foco en `email`.
- 0 anclas internas rotas; 0 errores JS; 0 peticiones fallidas.

**No verificado (limitación real):** este modelo no procesa imágenes, así que no se emitió juicio estético sobre capturas. La revisión visual se sustituyó por métricas calculadas (jerarquía tipográfica 36,8/28/19,2 px en mobile y 65,6/43,2/19,2 en desktop, alturas de tarjetas iguales por fila, ausencia de solapamientos y de desbordes), que **no** equivalen a una aprobación de diseño.

---

## 7. Decisiones y alternativas descartadas

| Decisión | Alternativa descartada | Motivo |
|---|---|---|
| i18n por atributos + diccionario único | Archivos `.json` por idioma con `fetch` | Evita una petición más y funciona también con `file://`, requisito de GitHub Pages |
| Script inline mínimo en `<head>` | Traducir sólo al final del body | Evita el flash de inglés en visitantes en español |
| Cotizador con modelo explícito y rango | Números "decorativos" | Un rango con factores declarados es defendible ante un cliente |
| `mailto:` en el formulario | Formulario falso que "envía" | El sitio es estático; simular un envío sería engañoso |
| Bootstrap sólo para grid y offcanvas | CSS propio para el menú móvil | Menos JS propio que mantener; el offcanvas ya resuelve foco y teclado |
| `border-radius: 0 !important` global | Regla por componente | Cumple el requisito con una sola fuente de verdad |
| Iconografía SVG inline | Librería de iconos | Cero dependencias extra y trazo cuadrado coherente |

---

## 8. Deuda y riesgos pendientes

1. **Datos de contacto ficticios:** `+1 (305) 555-0123` es un número de reserva y `contacto@noxusfactory.com` debe confirmarse antes de publicar. Dirección `Miami, FL 33137` y métricas (`120+`, `18 ingenieros`, `2016`) son placeholders de maqueta.
2. **Sin commit:** los tres archivos están sin versionar (`?? index.html`, `?? main.js`, `?? styles.css`). No hay historial ni posibilidad de revertir.
3. **Formulario sin backend:** depende del cliente de correo del visitante; en móviles sin app configurada el mensaje no sale. Si se necesita envío real, hace falta un endpoint (Formspree, Cloudflare Worker) y aviso de privacidad.
4. **Dependencia de CDN:** Bootstrap y Google Fonts se cargan de terceros. Si se exige funcionamiento offline, hay que alojarlos localmente y recalcular SRI.
5. **Enlaces legales vacíos:** "Aviso legal" y "Privacidad" apuntan a `#` (`index.html:715-716`). Publicar con enlaces muertos es un riesgo de cumplimiento.
6. **Redes sociales:** los iconos de LinkedIn y X apuntan a `#`.
7. **Sin `graphify-out/`:** no se ejecutó `graphify update` porque el proyecto no lo tiene.
8. **Revisión estética humana pendiente:** las métricas no sustituyen la mirada de diseño sobre las capturas.
9. **Deuda de estilo declarada:** las 21 funciones de `main.js` usan banner de una línea en lugar de la forma compacta de la skill, y los identificadores del sitio están en inglés (sección 7 de `estilo-codigo`). Corregirlo implica renombrar el contrato HTML↔JS↔CSS y re-verificar; se dejó fuera por riesgo/beneficio y quedó registrado en el handoff.

---

## 9. Cómo reproducir

```powershell
# 1. Servir el sitio
cd C:\xampp\htdocs\NoxusFactory
php -S 127.0.0.1:8090 -t .

# 2. Verificación de sintaxis y cobertura i18n
node --check main.js

# 3. Verificación en navegador (requiere playwright instalado)
python C:\Users\DELL\AppData\Local\Temp\opencode\noxus_final.py
```

En producción (GitHub Pages) basta con publicar `index.html`, `styles.css` y `main.js` en la raíz; no hay build ni variables de entorno.

---

*Documento generado a partir del código final y de la salida real de las pruebas. Donde no hubo verificación, se indica explícitamente.*
