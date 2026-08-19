"use client";

import { useEffect, useState } from "react";

const photos = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85", alt: "新人在户外婚礼上相拥", tall: true },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85", alt: "婚礼戒指与花束" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85", alt: "婚礼现场的幸福时刻" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85", alt: "新人牵手漫步", tall: true },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85", alt: "布置优雅的婚礼长桌" },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85", alt: "玫瑰花束上的金色婚戒" },
];

export default function Home() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <main>
      <header className="nav">
        <a className="monogram" href="#top" aria-label="返回首页">L <span>&</span> Y</a>
        <nav aria-label="页面导航">
          <a href="#story">我们的故事</a><a href="#gallery">照片</a><a href="#day">这一天</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img src={photos[0].src} alt={photos[0].alt} />
        <div className="heroShade" />
        <div className="heroCopy">
          <p className="eyebrow">OUR WEDDING · 2026.05.20</p>
          <h1>林深时见你<br /><em>余生皆欢喜</em></h1>
          <p className="names">林屿 <span>♡</span> 言初</p>
        </div>
        <a className="scroll" href="#story"><span />向下翻阅</a>
      </section>

      <section className="story section" id="story">
        <div className="sectionNo">01</div>
        <div className="storyTitle">
          <p className="eyebrow dark">HOW IT BEGAN</p>
          <h2>我们，把平凡的日子<br />写成了诗。</h2>
        </div>
        <div className="storyText">
          <p>从第一次见面的怦然心动，到决定携手走过余生。那些一起看过的日落、走过的街巷，都成了今天最温柔的注脚。</p>
          <p>这一天，我们邀请最爱的人来到身边，见证一句简单却郑重的“我愿意”。</p>
          <span className="signature">Linyu & Yanchu</span>
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="galleryHead">
          <div><p className="eyebrow dark">MEMORIES IN FRAMES</p><h2>爱的剪影</h2></div>
          <p>每一帧，都是我们想珍藏一生的瞬间。</p>
        </div>
        <div className="photoGrid">
          {photos.slice(1).map((photo, i) => (
            <button className={photo.tall ? "photo tall" : "photo"} key={photo.src} onClick={() => setActive(i + 1)} aria-label={`放大查看：${photo.alt}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" /><span>VIEW</span>
            </button>
          ))}
        </div>
      </section>

      <section className="day" id="day">
        <div className="dayCard">
          <p className="eyebrow">THE DAY WE SAID YES</p><h2>五月二十日</h2>
          <div className="date"><span>星期三</span><strong>20</strong><span>二〇二六</span></div>
          <div className="rule" />
          <p>杭州 · 湖畔礼堂</p><p className="time">仪式 16:30 · 晚宴 18:00</p>
        </div>
      </section>

      <footer><p className="monogram">L <span>&</span> Y</p><p>谢谢你，成为我们故事的一部分。</p><small>MADE WITH LOVE · 2026</small></footer>

      {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="照片预览" onClick={() => setActive(null)}>
        <button aria-label="关闭照片预览" onClick={() => setActive(null)}>×</button>
        <img src={photos[active].src} alt={photos[active].alt} onClick={(e) => e.stopPropagation()} />
      </div>}
    </main>
  );
}
