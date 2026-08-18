<div align="center">

<img src="assets/banner-es.jpg" alt="akinator — Motor de lectura de mente y cero carga cognitiva para asistentes de código" width="100%">

Deja de pelear con la parálisis del prompt. Cuando estés cansado, saturado o simplemente tengas cero ganas de escribir ("hueva"), Akinator lee el contexto de tu repositorio, ejecuta un triaje estilo Typeform en 2 clics y empieza a construir de inmediato.

[![License: MIT](https://img.shields.io/badge/Licencia-MIT-black.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Plugin-black)](https://code.claude.com/docs)
[![Antigravity](https://img.shields.io/badge/Antigravity-Skill-black)](https://antigravity.google)
[![Estilo Typeform](https://img.shields.io/badge/UI-Est%C3%A9tica%20Typeform-black)](#-la-experiencia-typeform)

[English](README.md) · Español · [中文](README.zh-CN.md)

</div>

---

## El problema

Todo desarrollador conoce ese estado de **fatiga cognitiva extrema** — coloquialmente conocido como *"tener hueva"*: te sientas frente a la terminal tras horas de context switching, sabes que hay trabajo pendiente, pero redactar un prompt de 500 palabras explicando el estado del código resulta agotador.

Cuando le das a un asistente de IA genérico un comando vago como *"¿qué hago ahora?"* o *"continúa"*, suelen ocurrir dos desastres:
1. **La trampa del interrogatorio:** El modelo responde con una lista abrumadora de 10 puntos y te hace 5 preguntas abiertas.
2. **La alucinación desorientada:** El modelo se engancha con archivos temporales, logs en caché o dependencias y se pone a modificar código irrelevante.

**Akinator resuelve esto cambiando por completo la interacción.**

---

## Cómo funciona

Akinator convierte la deducción de intenciones en un flujo limpio y sin fricción:

- **Pre-escaneo profundo de contexto:** Lee `git status`, los últimos commits (`git log -n 5`), diffs activos y notas de seguimiento (`TODO.md`, `ROADMAP.md`, `ESTADO.md`).
- **Filtro estricto de ruido:** Ignora automáticamente basura temporal (`.cache`, `tmp`, `node_modules`, `dist`, `build`, lockfiles) antes de analizar qué hacer.
- **Triaje progresivo estilo Typeform en 2 clics:** Sintetiza el estado en tarjetas visuales limpias y espaciadas (`[ 1 ]`, `[ 2 ]`, `[ 3 ]`). Solo respondes con un solo número.
- **Ejecución autónoma inmediata:** Al recibir tu opción (`1`, `2` o `3`), Akinator se salta rodeos y preámbulos conversacionales e inicia el trabajo técnico de inmediato.

---

## 🎨 La experiencia Typeform

En lugar de textos amontonados y saturados, Akinator entrega tarjetas con alto whitespace diseñadas para eliminar la carga mental:

```markdown
✨  **AKINATOR**  •  Pregunta 1 de 2


### ¿En qué área trabajaremos hoy?

---


   [ 1 ]   Trabajo de Feature Principal
           Implementar endpoints de API pendientes, flujos de usuario o componentes.




   [ 2 ]   Refactorización y Calidad
           Limpiar deuda técnica, mejorar tipos de TypeScript o simplificar módulos complejos.




   [ 3 ]   Testing, Infraestructura y CI/CD
           Corregir tests rotos, verificar pipelines de despliegue u optimizar builds.


---

👉 *Responde solo `1`, `2` o `3`*
```

Tras tu respuesta de un solo carácter (ej. `1`), Akinator presenta hipótesis concretas:

```markdown
✨  **AKINATOR**  •  Pregunta 2 de 2


### Con base en tus diffs recientes, esto es lo que toca resolver:

---


   [ 1 ]   Completar Middleware de Autenticación
           Finalizar el handler de verificación JWT iniciado en `src/auth/guard.ts`.




   [ 2 ]   Corregir Validación de Firma en Webhook
           Resolver la discrepancia de firmas en el endpoint de Stripe.




   [ 3 ]   Ejecutar Suite de Migraciones e Integración
           Aplicar cambios al schema de base de datos y validar contra los tests.


---

👉 *Responde `1`, `2` o `3` para arrancar de inmediato*
```

---

## Comparativa

| Característica | Akinator | Asistente Estándar | Prompting Manual |
|---|---|---|---|
| **Esfuerzo cognitivo** | **Cero (2 teclas)** | Alto (Leer muros de texto) | Máximo (Escribir todo el contexto) |
| **Fricción de respuesta** | `1`, `2` o `3` | Párrafos de ida y vuelta | Redactar prompts largos |
| **Filtro de ruido** | Elimina artefactos temporales/cache | Se desvía con logs y caches | Selección manual |
| **Gatillo de ejecución** | **Inmediato tras el clic 2** | Pide confirmaciones extra | Requiere prompts de seguimiento |
| **Formato visual** | Tarjetas limpias estilo Typeform | Listas saturadas | Texto plano sin formato |

---

## Instalación

### Método 1: Plugin para Claude Code (Recomendado)

```
/plugin marketplace add obeskay/akinator
```
```
/plugin install akinator@akinator
```

> [!NOTE]
> Envía ambos comandos como dos prompts separados. Abre una sesión nueva después de instalar para que Claude cargue el plugin.

---

### Método 2: Instalación directa de Skill

Copia o clona `skills/akinator/` en tu directorio de skills:

**Para Claude Code:**
```bash
git clone https://github.com/obeskay/akinator.git ~/.claude/skills/akinator
```

**Para Antigravity (AGY):**
```bash
git clone https://github.com/obeskay/akinator.git ~/.gemini/config/skills/akinator
```

**Para Codex / Entornos de Agentes:**
```bash
mkdir -p .agents/skills && cp -r /ruta/a/akinator/skills/akinator .agents/skills/
```

---

## Triggers y Uso

No necesitas memorizar sintaxis compleja. Simplemente escribe de forma natural cuando no tengas ganas de redactar:

```
tengo hueva
```
```
léceme la mente
```
```
no sé qué hacer, dime qué sigue
```
```
estoy cansado, toma el control
```
```
/akinator
```

---

## Arquitectura

```
  ┌───────────────────────────────────────────────────────────┐
  │  Desarrollador: "tengo hueva" / "qué sigue" / "/akinator" │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  1. Pre-escaneo profundo de contexto                      │
  │     • git status -s y git log -n 5                        │
  │     • diffs activos y trabajo sin commitear               │
  │     • TODO.md / ROADMAP.md / notas de estado              │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  2. Filtro estricto de ruido                              │
  │     • Ignorar: tmp/, .cache/, node_modules/, dist/, build │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  3. Triaje progresivo en 2 clics (Estilo Typeform)        │
  │     • Clic 1: Dominio Macro ([ 1 ], [ 2 ], [ 3 ])         │
  │     • Clic 2: Hipótesis de acción concreta                │
  └─────────────────────────────┬─────────────────────────────┘
                                │ (Usuario responde '1', '2' o '3')
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  4. Ejecución autónoma inmediata                          │
  │     • Cero preámbulos conversacionales                    │
  │     • Implementación técnica completa y verificada        │
  └───────────────────────────────────────────────────────────┘
```

---

## Contribuciones

Son bienvenidos los Pull Requests, reportes de bugs y sugerencias de diseño. Se agradece mantener el principio fundacional: **cero carga cognitiva, fricción mínima y estética impecable.**

---

## Licencia

[MIT](LICENSE) © [obeskay](https://github.com/obeskay)
