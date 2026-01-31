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
      // background:
      //   `radial-gradient(
      //     circle at 40% 30%,
      //     rgba(255,255,255,0.06) 0%,
      //     rgba(10,14,20,0.9) 35%,
      //     #05070a 70%
      //   )`,
      overflow: 'hidden',
    });


    const noise = this.renderer.createElement('div');
    this.apply(noise, {
      position: 'absolute',
      inset: '0',
      // backgroundImage:
      //   "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")',
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
      left: '325px',
      top: '18%',
      width: '30%',
      maxWidth: '260px',
      minWidth: '150px',
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
    this.renderer.setAttribute(grad, 'r', '70%'); // plus serré = ombre plus fine sur les bords

    [
      // 👉 CENTRE QUASI TRANSPARENT
      ['0%', '0'],
      // 👉 ZONE TRÈS FAIBLE AVANT LES BORDS
      ['70%', '0.05'],
      // 👉 DÉBUT DE L’OMBRE INTÉRIEURE
      ['85%', '0.18'],
      // 👉 BORDS INTÉRIEURS PLUS VISIBLES
      ['100%', '0.35'],
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

  //  Ajout elements
  private addBackgroundDecorations(container: HTMLElement, primary: string) {
    const svgNS = "http://www.w3.org/2000/svg";

    // === POSITIONS FIXES (calquées sur ton image) ===
    const lines = [
      // Grande diagonale haute gauche
      { left: "0",  top: "17%", width: "1400px", height: "2px" },

      // Diagonale centrale (passe sous le rectangle)
      { left: "23%", top: "44%", width: "1500px", height: "2px" },

      // Diagonale basse droite
      { left: "22%", top: "79%", width: "1200px", height: "2px" },

      // Ligne verticale fine à gauche
      { left: "270px", top: "0%",  width: "2px", height: "900px" },

      // Ligne horizontale droite
      { left: "58%", top: "32%", width: "900px", height: "2px" }
    ];

    lines.forEach((pos, i) => {
      const microSvg = this.renderer.createElement('svg', svgNS);

      this.apply(microSvg, {
        position: 'absolute',
        left: pos.left,
        top: pos.top,
        width: pos.width,
        height: pos.height,
        transform: 'skewX(-15deg)',
        zIndex: '1',
        overflow: 'visible',
        animation: 'slowDrift 12s ease-in-out infinite'
      });

      const line = this.renderer.createElement('line', svgNS);

      if (pos.width === "2px") {
        this.renderer.setAttribute(line, 'x1', '0');
        this.renderer.setAttribute(line, 'y1', '0');
        this.renderer.setAttribute(line, 'x2', '0');
        this.renderer.setAttribute(line, 'y2', pos.height.replace('px', ''));
      } else {
        this.renderer.setAttribute(line, 'x1', '0');
        this.renderer.setAttribute(line, 'y1', '0');
        this.renderer.setAttribute(line, 'x2', pos.width.replace('px', ''));
        this.renderer.setAttribute(line, 'y2', '0');
      }

      // Alternance : couleur team / rouge comme sur l’image
      const color = i % 2 === 0 ? primary : "#ff1a1a99";

      this.renderer.setAttribute(line, 'stroke', color);
      this.renderer.setAttribute(line, 'stroke-width', '1');
      this.renderer.setStyle(
        line,
        'filter',
        `drop-shadow(0 0 10px ${color})`
      );

      this.renderer.addClass(line, 'bg-line-fixed');

      this.renderer.appendChild(microSvg, line);
      this.renderer.appendChild(container, microSvg);
    });

    // === AJOUT DES PETITS POINTS LUMINEUX (COMME SUR L'IMAGE) ===
    const dots = [
      { left: "18%", top: "22%" },
      { left: "42%", top: "55%" },
      { left: "63%", top: "28%" },
      { left: "75%", top: "70%" },
      { left: "28%", top: "80%" }
    ];

    dots.forEach((pos, i) => {
      const dot = this.renderer.createElement('div');

      this.apply(dot, {
        position: 'absolute',
        left: pos.left,
        top: pos.top,
        width: '4px',
        height: '4px',
        backgroundColor: i % 2 === 0 ? primary : '#ff1a1a',
        borderRadius: '50%',
        boxShadow: `0 0 12px ${i % 2 === 0 ? primary : '#ff1a1a'}`,
        zIndex: '2'
      });

      this.renderer.addClass(dot, 'bg-dot');

      container.appendChild(dot);
    });
  }




}