import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimatedBackgroundService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  create( host: HTMLElement, options?: { number?: string; primaryColor?: string }, ) {
    if (!host) return;
    const { number = '37', primaryColor = '#3cf2ff' } = options || {};

    host.innerHTML = '';

    const container = this.renderer.createElement('div');
    this.apply(container, {
      position: 'relative',
      width: '100%',
      height: '100%',
      // backgroundColor: '#05070a',
      backgroundColor: 'radial-gradient(circle at top,#2a2f35 0%, #0b0f14 60% ), linear-gradient( 180deg, #111 0%, #000 100% )',
      overflow: 'hidden',
    });

    this.renderer.appendChild(host, container);

    // On passe la couleur de la team au CSS pour l'animation
    host.style.setProperty('--neon-color', primaryColor);

    // --- COUCHE 3 : RECTANGLE NÉON SVG ---
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = this.renderer.createElement('svg', svgNS);
    this.renderer.addClass(svg, 'neon-svg');

    this.apply(svg, {
      position: 'absolute',
      left: '30%',
      top: '20%',
      width: '30%',
      maxWidth: '300px',
      height: '60%',
      transform: 'skewX(-15deg)',
      zIndex: '2',
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
      filter: `drop-shadow(0 0 8px ${primaryColor})`,
    });

    //*TODO à désactiver pour gerre le fond  // On ajoute un fond au rectangle pour le relief
    const bgRect = rect.cloneNode() as HTMLElement;
    this.renderer.removeClass(bgRect, 'neon-path-glow');
    this.apply(bgRect, {
      fill: `${primaryColor}11`,
      stroke: `${primaryColor}33`,
      strokeWidth: '1',
      stopOpacity: '0.5'
    });


    // *TODO A activer pour gerer le fond  --- fond dégradé (centre transparent, bords plus denses)
    // const svgEl = svg as SVGElement;
    // let defs = svgEl.querySelector('defs');
    // if (!defs) {
    //   defs = this.renderer.createElement('defs', svgNS);
    //   this.renderer.appendChild(svgEl, defs);
    // }

    // const gradId = `bg-grad-${Math.random().toString(36).slice(2, 7)}`;
    // const grad = this.renderer.createElement('radialGradient', svgNS);
    // this.renderer.setAttribute(grad, 'id', gradId);
    // this.renderer.setAttribute(grad, 'gradientUnits', 'userSpaceOnUse');
    // this.renderer.setAttribute(grad, 'cx', '50%');
    // this.renderer.setAttribute(grad, 'cy', '50%');
    // this.renderer.setAttribute(grad, 'r', '70%');

    // [
    //   ['0%', '0'],
    //   ['55%', '0.15'],
    //   ['100%', '0.45'],
    // ].forEach(([offset, opacity]) => {
    //   const stop = this.renderer.createElement('stop', svgNS);
    //   this.renderer.setAttribute(stop, 'offset', offset);
    //   this.renderer.setAttribute(stop, 'stop-color', primaryColor);
    //   this.renderer.setAttribute(stop, 'stop-opacity', opacity);
    //   this.renderer.appendChild(grad, stop);
    // });

    // this.renderer.appendChild(defs, grad);

    // // Rectangle de fond
    // const bgRect = rect.cloneNode() as HTMLElement;
    // this.renderer.removeClass(bgRect, 'neon-path-glow');
    // this.apply(bgRect, {
    //   fill: `url(#${gradId})`,
    //   stroke: `${primaryColor}33`,
    //   strokeWidth: '1',
    // });


    this.renderer.appendChild(svg, bgRect);
    this.renderer.appendChild(svg, rect);
    this.renderer.appendChild(host, svg);
    this.addBackgroundDecorations(container, primaryColor);
  }

  private apply(el: HTMLElement, styles: any) {
    Object.entries(styles).forEach(([key, value]) => {
      this.renderer.setStyle(el, key, value);
    });
  }

  private addBackgroundDecorations(container: HTMLElement, color: string) {
    const svgNS = "http://www.w3.org/2000/svg";
    
    for (let i = 0; i < 15; i++) {
      const isVertical = Math.random() > 0.7; // 30% de chances d'être vertical
      const width = isVertical ? 40 : Math.random() * 120 + 40;
      const height = isVertical ? Math.random() * 120 + 40 : 40; 
      
      const microSvg = this.renderer.createElement('svg', svgNS);
      this.apply(microSvg, {
        position: 'absolute',
        left: `${Math.random() * 95}%`,
        top: `${Math.random() * 95}%`,
        width: `${width}px`,
        height: `${height}px`,
        transform: 'skewX(-15deg)',
        zIndex: '1',
        overflow: 'visible'
      });

      const line = this.renderer.createElement('line', svgNS);
      
      if (isVertical) {
        this.renderer.setAttribute(line, 'x1', '20');
        this.renderer.setAttribute(line, 'y1', '0');
        this.renderer.setAttribute(line, 'x2', '20');
        this.renderer.setAttribute(line, 'y2', height.toString());
        this.renderer.addClass(line, 'micro-neon-vertical');
      } else {
        this.renderer.setAttribute(line, 'x1', '0');
        this.renderer.setAttribute(line, 'y1', '20');
        this.renderer.setAttribute(line, 'x2', width.toString());
        this.renderer.setAttribute(line, 'y2', '20');
        this.renderer.addClass(line, Math.random() > 0.5 ? 'micro-neon' : 'micro-neon-fast');
      }

      this.renderer.setAttribute(line, 'stroke', color);
      this.renderer.setAttribute(line, 'stroke-width', (Math.random() + 0.5).toString());
      this.renderer.setStyle(line, 'filter', `drop-shadow(0 0 3px ${color})`);
      this.renderer.setStyle(line, 'animation-delay', `${Math.random() * 5}s`);

      this.renderer.appendChild(microSvg, line);
      this.renderer.appendChild(container, microSvg);
    }
  }
}

//! // --- COUCHE 1 : MOTIF DE NUMÉROS RÉPÉTÉS
//   const pattern = this.renderer.createElement('div');
//   this.apply(pattern, {
//     position: 'absolute',
//     inset: '-10%',
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
//     gap: '20px',
//     opacity: '0.03', // Très subtil
//     transform: 'rotate(-15deg)',
//     userSelect: 'none'
//   });

//   for (let i = 0; i < 40; i++) {
//     const n = this.renderer.createElement('span');
//     n.innerText = number;
//     this.apply(n, {
//       fontSize: '5rem',
//       fontWeight: '900',
//       color: 'white',
//       fontFamily: 'sans-serif'
//     });
//     this.renderer.appendChild(pattern, n);
//   }

//! // --- COUCHE 2 : LE GRAND NUMÉRO FOCUS
//   const mainNumber = this.renderer.createElement('div');
//   mainNumber.innerText = number;
//   this.apply(mainNumber, {
//     position: 'absolute',
//     right: '5%',
//     bottom: '5%',
//     fontSize: '40vw',
//     fontWeight: '950',
//     color: 'transparent',
//     opacity: '0.15',
//     lineHeight: '0.8',
//     pointerEvents: 'none'
//   });

//   // Effet néon subtil sur le grand numéro
//   this.renderer.setStyle(mainNumber, '-webkit-text-stroke', `2px ${primaryColor}`);

//   this.renderer.appendChild(container, mainNumber);
