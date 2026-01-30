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
      // backgroundColor: 'radial-gradient(circle at top,#2a2f35 0%, #0b0f14 60% ), linear-gradient( 180deg, #111 0%, #000 100% )',
      backgroundColor: 'radial-gradient( circle at 40% 30%, rgba(255,255,255,0.06) 0%, rgba(10,14,20,0.9) 35%, #05070a 70%',
      overflow: 'hidden',
    });

    const noise = this.renderer.createElement('div');
    this.apply(noise, {
      position: 'absolute',
      inset: '0',
      backgroundImage:
        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'120\' height=\'120\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
      mixBlendMode: 'overlay',
      pointerEvents: 'none',
    });
    this.renderer.appendChild(container, noise);

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

    //  fond dégradé (centre transparent, bords plus denses)
    const svgEl = svg as SVGElement;
    let defs = svgEl.querySelector('defs');
    if (!defs) {
      defs = this.renderer.createElement('defs', svgNS);
      this.renderer.appendChild(svgEl, defs);
    }

    const gradId = `bg-grad-${Math.random().toString(36).slice(2, 7)}`;
    const grad = this.renderer.createElement('radialGradient', svgNS);
    this.renderer.setAttribute(grad, 'id', gradId);
    this.renderer.setAttribute(grad, 'gradientUnits', 'userSpaceOnUse');
    this.renderer.setAttribute(grad, 'cx', '50%');
    this.renderer.setAttribute(grad, 'cy', '50%');
    this.renderer.setAttribute(grad, 'r', '400%');

    [
      ['0%', '0'],
      ['55%', '0.15'],
      ['100%', '0.45'],
    ].forEach(([offset, opacity]) => {
      const stop = this.renderer.createElement('stop', svgNS);
      this.renderer.setAttribute(stop, 'offset', offset);
      this.renderer.setAttribute(stop, 'stop-color', primaryColor);
      this.renderer.setAttribute(stop, 'stop-opacity', opacity);
      this.renderer.appendChild(grad, stop);
    });

    this.renderer.appendChild(defs, grad);

    // Rectangle de fond
    const bgRect = rect.cloneNode() as HTMLElement;
    this.renderer.removeClass(bgRect, 'neon-path-glow');
    this.apply(bgRect, {
      fill: `url(#${gradId})`,
      stroke: `transparent`,
      strokeWidth: '1',
    });


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
    const svgNS = 'http://www.w3.org/2000/svg';
    const linesCount = Math.floor(Math.random() * 3) + 6;

    for (let i = 0; i < 7; i++) {
      const isVertical = Math.random() > 0.6;

      const length = Math.random() * 900 + 300; // 🔥 300–700px
      const thickness = Math.random() * 1.5 + 1.5; // 1.5–3px

      const palette = [color, '#da0021', '#000000'];
      const strokeColor = palette[Math.floor(Math.random() * palette.length)];

      const microSvg = this.renderer.createElement('svg', svgNS);
      this.apply(microSvg, {
        position: 'absolute',
        left: isVertical? `${Math.random() * 30}%`: `${60 + Math.random() * 35}%`,
        top: `${Math.random() * 90}%`,
        width: isVertical ? `80px` : `${length}px`,
        height: isVertical ? `${length}px` : `80px`,
        transform: 'skewX(-15deg)',
        zIndex: '1',
        overflow: 'visible',
        opacity: '0.6',
      });

      const line = this.renderer.createElement('line', svgNS);

      if (isVertical) {
        this.renderer.setAttribute(line, 'x1', '0');
        this.renderer.setAttribute(line, 'y1', '0');
        this.renderer.setAttribute(line, 'x2', '0');
        this.renderer.setAttribute(line, 'y2', length.toString());
      } else {
        this.renderer.setAttribute(line, 'x1', '0');
        this.renderer.setAttribute(line, 'y1', '0');
        this.renderer.setAttribute(line, 'x2', length.toString());
        this.renderer.setAttribute(line, 'y2', '0');
      }


      this.renderer.addClass(line, 'bg-line');

      if (isVertical) this.renderer.addClass(line, 'vertical');
      if (Math.random() > 0.6) this.renderer.addClass(line, 'fast');
      this.renderer.setAttribute(line, 'stroke', `${strokeColor}99`);
      this.renderer.setAttribute(line, 'stroke-width', thickness.toString());
      this.renderer.setStyle(
        line,
        'filter',
        `drop-shadow(0 0 12px ${strokeColor}55)`
      );
      this.renderer.setStyle(line, 'animation-delay', `${Math.random() * 4}s`);

      this.renderer.appendChild(microSvg, line);
      this.renderer.appendChild(container, microSvg);
    }

  }
}