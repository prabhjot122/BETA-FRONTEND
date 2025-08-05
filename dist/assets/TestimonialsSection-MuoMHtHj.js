import{r as t,t as c,g as a,u as b,S as T,j as e}from"./index-DaYK-Gyh.js";a.registerPlugin(T);const D=()=>{const[n,x]=t.useState(0),[d,g]=t.useState(0),[h,N]=t.useState(!1),f=t.useRef(!1),r=t.useRef(null),m=t.useRef(null),l=t.useCallback(()=>{r.current&&clearInterval(r.current),r.current=setInterval(()=>{p(1)},15e3)},[]),u=t.useCallback(()=>{m.current&&clearInterval(m.current);const o=c[n];o.testimonials.length<=1||(m.current=setInterval(()=>{_(s=>(s+1)%o.testimonials.length)},7e3))},[n]),p=t.useCallback(o=>{if(h)return;N(!0),l();const s=(n+o+c.length)%c.length;a.timeline({onComplete:()=>N(!1)}).to([".homepage__testimonials-person-info",".homepage__testimonials-quote-box",".testimonialimage",".homepage__testimonials-quote-dots",".homepage__testimonials-nav-container"],{opacity:0,y:-20,duration:.4,ease:"power2.in",stagger:.05}).call(()=>{x(s),g(0)}).fromTo([".homepage__testimonials-person-info",".homepage__testimonials-quote-box",".testimonialimage",".homepage__testimonials-quote-dots",".homepage__testimonials-nav-container"],{opacity:0,y:20},{opacity:1,y:0,duration:.5,ease:"power2.out",stagger:.1,delay:.1})},[n,h,l]),_=o=>{u(),a.to(".homepage__testimonials-quote-text",{opacity:0,y:-15,duration:.3,ease:"power2.in",onComplete:()=>{g(o),a.fromTo(".homepage__testimonials-quote-text",{opacity:0,y:15},{opacity:1,y:0,duration:.4,ease:"power2.out"})}})};t.useEffect(()=>(l(),()=>{r.current&&clearInterval(r.current)}),[l]),t.useEffect(()=>(u(),()=>{m.current&&clearInterval(m.current)}),[n,u]),b(()=>{a.set([".testimonialimage",".homepage__testimonials-title",".homepage__testimonials-person-info",".homepage__testimonials-quote-box",".homepage__testimonials-nav-button"],{opacity:0});const o=a.timeline({paused:!0});o.to(".homepage__testimonials-title",{duration:.4,opacity:1,y:0,ease:"power2.out"}).to(".testimonialimage",{duration:.8,opacity:1,scale:1,ease:"power2.out"},"-=0.3").to(".homepage__testimonials-person-info",{duration:.4,opacity:1,y:0,ease:"power2.out"},"-=0.6").to(".homepage__testimonials-quote-box",{duration:.4,opacity:1,y:0,ease:"power2.out"},"-=0.4").to(".homepage__testimonials-nav-button",{duration:.3,opacity:1,ease:"power2.out"},"-=0.2"),T.create({trigger:".homepage4",start:"top 75%",onEnter:()=>{f.current||(o.play(),f.current=!0)}})},[]);const i=c[n];return e.jsxDEV("div",{id:"testimonials",className:"homepage4",children:[e.jsxDEV("style",{children:`
        #testimonials.homepage4 {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 2rem;
          padding: 4rem 2rem;
          background-color: #FDFBF4;
          overflow: hidden;
          min-height: 100vh;
        }
        .homepage__testimonials-content {
          flex: 1;
          max-width: 45%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: #333;
          font-family: 'Source Sans Pro', sans-serif;
        }
        .homepage__testimonials-header {
          text-align: left;
        }
        .homepage__testimonials-title {
          font-family: 'Baskerville Old Face', serif;
          font-size: 2.5rem;
          color: #966f33;
          margin-bottom: 1rem;
        }
        .homepage__testimonials-person-info {
          text-align: left;
        }
        .homepage__testimonials-person-name {
          font-family: 'Battambang', serif;
          font-size: 1.75rem;
          font-weight: bold;
        }
        .homepage__testimonials-person-credentials {
          font-size: 1rem;
          color: #666;
          margin-top: 0.25rem;
        }
        .homepage__testimonials-quote-box {
          background-color: #FFF8E4;
          padding: 2rem;
          border-left: 5px solid #966f33;
          position: relative;
          min-height: 150px;
        }
        .homepage__testimonials-quote-text {
          font-family: 'Kalam', cursive;
          font-size: 1.2rem;
          line-height: 1.6;
        }
        .homepage__hero2 {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 45%;
        }
        .testimonialimage {
          width: 450px;
          height: 450px;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .homepage__subhero {
          display: none;
        }
        .homepage__testimonials-nav-container {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          justify-content: flex-start;
        }
        .homepage__testimonials-nav-button {
          background-color: #966f33;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .homepage__testimonials-nav-button:hover {
          background-color: #7a5a2a;
          transform: translateY(-2px);
        }
        .homepage__testimonials-quote-dots {
          text-align: left;
          margin-top: 1rem;
        }
        .quote-dot {
          background-color: #ccc;
          border: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          padding: 0;
        }
        .quote-dot.active {
          background-color: #966F33;
        }

        @media (max-width: 768px) {
          #testimonials.homepage4 {
            flex-direction: column;
            padding: 2rem 1rem;
            height: auto;
          }
          .homepage__testimonials-content {
            max-width: 100%;
            order: 2;
            text-align: center;
          }
          .homepage__testimonials-header, .homepage__testimonials-person-info, .homepage__testimonials-quote-dots {
            text-align: center;
          }
          .homepage__hero2 {
            max-width: 100%;
            order: 1;
            margin-bottom: 2rem;
          }
          .testimonialimage {
            width: 250px;
            height: 250px;
          }
          .homepage__testimonials-nav-container {
            justify-content: center;
          }
        }
      `},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:120,columnNumber:7},void 0),e.jsxDEV("div",{className:"homepage__testimonials-content",children:[e.jsxDEV("div",{className:"homepage__testimonials-header",children:e.jsxDEV("div",{className:"homepage__testimonials-title",children:"What problems We are targetting?"},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:264,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:263,columnNumber:9},void 0),e.jsxDEV("div",{className:"homepage__testimonials-person-info",children:[e.jsxDEV("div",{className:"homepage__testimonials-person-name",children:i.name},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:267,columnNumber:11},void 0),e.jsxDEV("div",{className:"homepage__testimonials-person-credentials",children:i.credentials},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:268,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:266,columnNumber:9},void 0),e.jsxDEV("div",{className:"homepage__testimonials-quote-box",children:e.jsxDEV("div",{className:"homepage__testimonials-quote-text",children:i.testimonials[d]},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:271,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:270,columnNumber:9},void 0),i.testimonials.length>1&&e.jsxDEV("div",{className:"homepage__testimonials-quote-dots",children:i.testimonials.map((o,s)=>e.jsxDEV("button",{className:`quote-dot ${s===d?"active":""}`,onClick:()=>_(s)},s,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:276,columnNumber:15},void 0))},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:274,columnNumber:11},void 0),e.jsxDEV("div",{className:"homepage__testimonials-nav-container",children:[e.jsxDEV("button",{className:"homepage__testimonials-nav-button prev",onClick:()=>p(-1),children:"Previous"},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:285,columnNumber:11},void 0),e.jsxDEV("button",{className:"homepage__testimonials-nav-button next",onClick:()=>p(1),children:"See Next"},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:286,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:284,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:262,columnNumber:7},void 0),e.jsxDEV("div",{className:"homepage__hero2",children:[e.jsxDEV("div",{className:"testimonialimage",style:{backgroundImage:`url(${i.image})`}},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:290,columnNumber:9},void 0),e.jsxDEV("div",{className:"homepage__subhero"},void 0,!1,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:295,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:289,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Asus/Desktop/TESTING/BETA-FRONTEND/src/components/homepage/TestimonialsSection.tsx",lineNumber:119,columnNumber:5},void 0)};export{D as default};
