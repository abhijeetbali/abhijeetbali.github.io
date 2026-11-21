# Abhijeet Bali | Personal Portfolio

A modern personal portfolio built with **React**, **Vite**, and **Tailwind CSS**, live at https://abhijeet955.github.io. Designed with a focus on typography, smooth transitions, and a developer-friendly "Content-as-Data" workflow.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Launch development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠 Project Structure & Configuration

This project uses a "Jekyll-style" workflow where the UI is driven by Markdown files. You can update your bio, social links, and project details without touching the source code.

### 1. Profile & About
Modify **`src/content/about.md`** to update:
- **Hero Text**: Headline and rotating subheadings.
- **Current role** badge (`current`), **résumé** link (`resume`), hero **stats** and **certifications**.
- **Social Links**: GitHub, LinkedIn, Twitter, Steam, Hugging Face, etc. (leave a link out to hide it).
- **Achievements**: Images and captions for the "Awards" slider on the About page.
- **Contact Form**: Set your **Formspree ID** directly in the YAML front-matter.

### 2. Projects & Writing
Update **`src/projects/`** or **`src/posts/`**:
- Each `.md` file represents a project or post.
- Uses front-matter for metadata (title, date, category, tags).
- Projects: `metric` + `metricLabel` set the headline number on the generated cover (e.g. `"+95%"` / `"product redemptions"`). Set `imageUrl` to use your own image instead, `link` to add a "View Project" button, and `role` for your role.
- The Writing section and its menu item appear automatically once there is at least one post in `src/posts/`.

### 3. Experience
Edit the `experiences` list at the top of **`src/components/Experience.tsx`**.

### 4. Résumé
Replace **`public/Abhijeet_Bali_Resume.pdf`** with a new file of the same name.

## 📬 Contact Form Setup

The contact form is powered by **Formspree**. To make it functional:
1. Create a form at [Formspree](https://formspree.io/).
2. Copy your unique Form ID (or the full endpoint URL).
3. Paste it in `src/content/about.md` under the `contact` key (until then, the Contact section shows direct email / LinkedIn / résumé buttons):
   ```yaml
   contact:
     formspreeId: "your_id_here"
   ```

## 📊 Analytics

To enable Google Analytics tracking, add your Measurement ID in `src/content/about.md`:
```yaml
contact:
  googleAnalyticsId: "G-XXXXXXXXXX"
```

## 🎨 Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS v4** (compiled at build time via `@tailwindcss/vite`)
- **Lucide React** for iconography
- **React Markdown** for content rendering
- **Front-matter** for Jekyll-style data management
