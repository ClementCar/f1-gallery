import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimatedBackgroundService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  create(host: HTMLElement, options?: { number?: string; primaryColor?: string; accentColor?: string }) {
    const { number = '37', primaryColor = '#3cf2ff', accentColor = '#ff003c' } = options || {};

    // Nettoyage au cas où (pour éviter les doublons au refresh)
    host.innerHTML = '';

    const container = this.renderer.createElement('div');
    this.apply(container, {
      position: 'absolute',
      inset: '0',
      overflow: 'hidden',
      backgroundColor: '#05070a',
      zIndex: '-1'
    });

    // Numéro décuplé en fond (Correction : utilisation de Flexbox pour remplir l'espace)
    const backgroundLayer = this.renderer.createElement('div');
    this.apply(backgroundLayer, {
      position: 'absolute',
      inset: '0',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      opacity: '0.03',
      transform: 'rotate(-10deg) scale(1.2)',
      pointerEvents: 'none'
    });

    for (let i = 0; i < 15; i++) {
      const span = this.renderer.createElement('span');
      span.innerText = number;
      this.apply(span, {
        fontSize: '10rem',
        fontWeight: '900',
        color: 'white'
      });
      this.renderer.appendChild(backgroundLayer, span);
    }

    // Grand numéro central (Outline moderne)
    const mainNumber = this.renderer.createElement('div');
    mainNumber.innerText = number;
    this.apply(mainNumber, {
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '35vw',
      fontWeight: '900',
      color: 'transparent',
      lineHeight: '1'
    });
    
    // Astuce pour le Webkit stroke
    this.renderer.setStyle(mainNumber, '-webkit-text-stroke', `2px ${primaryColor}66`);

    this.renderer.appendChild(container, backgroundLayer);
    this.renderer.appendChild(container, mainNumber);
    this.renderer.appendChild(host, container);
  }

  private apply(el: HTMLElement, styles: any) {
    Object.entries(styles).forEach(([key, value]) => {
      this.renderer.setStyle(el, key, value);
    });
  }
}