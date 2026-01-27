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

  host.innerHTML = '';

  const container = this.renderer.createElement('div');
  this.apply(container, {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#05070a',
    overflow: 'hidden'
  });

  // --- COUCHE 1 : MOTIF DE NUMÉROS RÉPÉTÉS
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

  // --- COUCHE 2 : LE GRAND NUMÉRO FOCUS
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

    // On passe la couleur de la team au CSS pour l'animation
  host.style.setProperty('--neon-color', primaryColor);


  // --- COUCHE 3 : RECTANGLE NÉON SVG ---
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = this.renderer.createElement('svg', svgNS);
  this.renderer.addClass(svg, 'neon-svg');

  this.apply(svg, {
    position: 'absolute',
    left: '30%',
    top: '20%',
    width: '30%',
    height: '60%',
    transform: 'skewX(-15deg)',
    zIndex: '2'
  });

  // Le tracé du rectangle (on utilise rect pour la précision)
  const rect = this.renderer.createElement('rect', svgNS);
  this.renderer.setAttribute(rect, 'x', '2');
  this.renderer.setAttribute(rect, 'y', '2');
  this.renderer.setAttribute(rect, 'width', '98%');
  this.renderer.setAttribute(rect, 'height', '98%');
  this.renderer.setAttribute(rect, 'rx', '4'); 

  // Style du néon qui circule
  this.renderer.addClass(rect, 'neon-path-glow');
  this.apply(rect, {
    stroke: primaryColor,
    filter: `drop-shadow(0 0 8px ${primaryColor})`
  });

  // On ajoute un fond au rectangle pour le relief
  const bgRect = rect.cloneNode() as HTMLElement;
  this.renderer.removeClass(bgRect, 'neon-path-glow');
  this.apply(bgRect, {
    fill: `${primaryColor}11`,
    stroke: `${primaryColor}33`,
    strokeWidth: '1'
  });

  this.renderer.appendChild(svg, bgRect);
  this.renderer.appendChild(svg, rect);
  this.renderer.appendChild(host, svg);
}

  private apply(el: HTMLElement, styles: any) {
    Object.entries(styles).forEach(([key, value]) => {
      this.renderer.setStyle(el, key, value);
    });
  }
}