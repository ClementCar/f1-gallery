import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimatedBackgroundService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  create(host: HTMLElement, options?: { number?: string; primaryColor?: string }) {
  if (!host) return;
  const { number = '37', primaryColor = '#3cf2ff' } = options || {};

  host.innerHTML = ''; // Ici tu peux nettoyer car le container est dédié au fond

  const container = this.renderer.createElement('div');
  this.apply(container, {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#05070a',
    overflow: 'hidden'
  });

  // --- COUCHE 1 : MOTIF DE NUMÉROS RÉPÉTÉS (Le "décuplé") ---
  const pattern = this.renderer.createElement('div');
  this.apply(pattern, {
    position: 'absolute',
    inset: '-10%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px',
    opacity: '0.03', // Très subtil
    transform: 'rotate(-15deg)',
    userSelect: 'none'
  });

  for (let i = 0; i < 40; i++) {
    const n = this.renderer.createElement('span');
    n.innerText = number;
    this.apply(n, {
      fontSize: '5rem',
      fontWeight: '900',
      color: 'white',
      fontFamily: 'sans-serif'
    });
    this.renderer.appendChild(pattern, n);
  }

  // --- COUCHE 2 : LE GRAND NUMÉRO FOCUS ---
  const mainNumber = this.renderer.createElement('div');
  mainNumber.innerText = number;
  this.apply(mainNumber, {
    position: 'absolute',
    right: '5%',
    bottom: '5%',
    fontSize: '40vw',
    fontWeight: '950',
    color: 'transparent',
    opacity: '0.15',
    lineHeight: '0.8',
    pointerEvents: 'none'
  });
  // Effet néon subtil sur le grand numéro
  this.renderer.setStyle(mainNumber, '-webkit-text-stroke', `2px ${primaryColor}`);

  this.renderer.appendChild(container, pattern);
  this.renderer.appendChild(container, mainNumber);
  this.renderer.appendChild(host, container);
}

  private apply(el: HTMLElement, styles: any) {
    Object.entries(styles).forEach(([key, value]) => {
      this.renderer.setStyle(el, key, value);
    });
  }
}