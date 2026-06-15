# Davide's Cocktail Bar

An animated landing page built as part of the JavaScript Mastery GSAP course, focused on mastering advanced scroll-driven interactions and animation patterns in a real React environment.

<img width="1706" height="957" alt="Screenshot 2026-06-15 at 12 55 10" src="https://github.com/user-attachments/assets/a6e551b5-4ae8-4e8f-894f-ce12b7c0a497" />


## Overview

Davide's Cocktail Bar is a fictional bartender landing page featuring a collection of advanced GSAP techniques, including video scrubbing, pinned sections, SplitText animations, circular mask reveals, and scroll-synchronized storytelling.

The goal of the project was not to build a production product, but to explore how GSAP and React can work together to create immersive, performance-conscious web experiences.

## Tech Stack

* React 19
* Vite 7
* GSAP 3.13
* GSAP ScrollTrigger
* GSAP SplitText
* @gsap/react
* Tailwind CSS v4
* react-responsive

## Features

### Scroll-driven Video Scrubbing

Synchronizes a video's `currentTime` with scroll progress using GSAP ScrollTrigger and custom update callbacks.

### Circular Mask Reveal

Animated reveal effect built by manipulating CSS masking properties such as:

* `mask-size`
* `mask-position`

through GSAP timelines.

### Pinned Storytelling Sections

Multi-step sections that remain fixed while content transitions based on scroll progress.

### SplitText Animations

Character-by-character and word-by-word entrance animations using GSAP SplitText with staggered timing.

### Responsive Scroll Navigation

Scroll-aware navigation with dynamic behavior across screen sizes.

## Key Learnings

This project helped me develop a deeper understanding of:

* Advanced ScrollTrigger configuration
* Scroll-linked animation architecture
* Video scrubbing techniques
* React and GSAP integration patterns
* Animation cleanup and lifecycle management with `useGSAP`
* Building complex animation sequences synchronized with user interaction

## Technical Highlights

### React + GSAP Lifecycle

Using `useGSAP()` to properly scope animations and ensure automatic cleanup when components unmount.

### ScrollTrigger Pinning

Creating multi-stage narrative sections using pinned containers and carefully calibrated start/end trigger points.

### Video Timeline Synchronization

Replacing traditional playback controls with direct scroll-based control over video progression.

### CSS Mask Animation

Animating non-traditional CSS properties to create immersive reveal effects without relying on WebGL.

## What I Would Improve

If I were extending this project further, I would explore:

* Reduced-motion accessibility support
* Lazy-loading animation assets
* Performance profiling on low-end devices
* Reusable animation hooks and abstractions
* Content management integration

## Credits

Built while following the JavaScript Mastery GSAP course, with additional experimentation and implementation details developed independently.

## Live Demo

🔗 [View Live Demo](https://your-demo-url.com)

## License

This project is intended for educational and portfolio purposes.
