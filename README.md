# Brújula Patria Grande & Plan de Educación Humana Integral — La Martí

Aplicación web estática (HTML + CSS + JS puro, sin dependencias ni build) pensada para actividades de formación en profesorados e instituciones de formación docente de **La Martí / Patria Grande**.

## Qué incluye

1. **12 Axes — Mapa interno de Patria Grande**: 24 afirmaciones que miden 6 tensiones estratégicas (12 polos) propias del campo nacional, popular y latinoamericano, y calculan tu afinidad con 16 referentes, próceres, movimientos históricos e hitos vinculados al PDHI (Grabois, Hagman, Martí, Belgrano, Cooke, Perón, Evita, Cristina, Azurduy, Jauretche, Freire, Independentistas, Tendencia Revolucionaria, Movimientos por la Vivienda / Tierra, Techo y Trabajo, Planes Quinquenales y *Laudato Si'* / PDHI).
2. **Desafío PDHI**: Juego de 10 escenarios reales basados en *Perspectivas estratégicas para el desarrollo humano integral de la Argentina* (Fundación DHI - CLACSO, 2026).
3. **Diagnóstico y Propuestas Educativas**: Síntesis visual de los datos y propuestas de *Política educativa* (Cap. 16) y *FDHI.00.26 Educación CABA* (junio 2026).
4. **12 Ejes para un Plan de Educación Humana Integral**: Propuesta de 12 ejes divididos en 4 grupos de taller, con descripción, justificación político-ideológica, problemática real, preguntas disparadoras y bloc de notas exportable para la relatoría.

## Cómo probarlo en tu computadora

Podés abrir `index.html` directamente en el navegador o levantar un servidor local con Python:

```bash
python -m http.server 8000
```

Y abrir `http://localhost:8000`.

## Cómo subirlo a GitHub / Vercel

1. Inicializá el repositorio y subilo a GitHub:
   ```bash
   git init
   git add .
   git commit -m "App formación La Martí - 12 Axes y Plan de Educación"
   git branch -M main
   git remote add origin <URL_DE_TU_REPO>
   git push -u origin main
   ```
2. **En Vercel**: importá el repositorio desde [vercel.com](https://vercel.com), dejá Framework Preset en **Other** (sin build command, output directory `.`) y hacé clic en **Deploy**.
3. **En GitHub Pages**: en el repositorio andá a **Settings → Pages → Deploy from a branch (`main` / `/ (root)`)**.
