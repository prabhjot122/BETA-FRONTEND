import { useEffect, useRef, useState } from 'react';

// Import CSS

interface MarketData {
  label: string;
  current: number;
  projected: number;
  unit: string;
  color: string;
}

const AnimatedNumber = ({ value, unit, isVisible, delay = 0 }: { value: number; unit: string; isVisible: boolean; delay?: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        if (isVisible && !started.current) {
            setTimeout(() => {
                started.current = true;
                const start = 0;
                const end = value;
                const duration = 1500;
                let startTime: number | null = null;

                const animate = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const percentage = Math.min(progress / duration, 1);
                    const animatedValue = start + (end - start) * percentage;
                    setDisplayValue(animatedValue);

                    if (percentage < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
            }, delay);
        }
    }, [isVisible, value, delay]);

    if (!isVisible) {
        return <span>$0{unit}</span>;
    }

    return <span>${displayValue.toFixed(1)}{unit}</span>;
};


export default function MarketGrowth(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const marketData: MarketData[] = [
    {
      label: "Legal Tech Market",
      current: 31.6,
      projected: 63.6,
      unit: "B",
      color: "#966f33"
    },
    {
      label: "Creator Economy", 
      current: 191.6,
      projected: 528.4,
      unit: "B",
      color: "#b99c6d"
    },
    {
      label: "Online Education",
      current: 49.0,
      projected: 325.0,
      unit: "B", 
      color: "#d4b896"
    },
    {
      label: "India Legal Services",
      current: 2.5,
      projected: 3.4,
      unit: "B",
      color: "#e5cca4"
    },
   
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const maxValue = Math.max(...marketData.map(d => d.projected));

  return (
    <>
      <style>{`
        .market-growth__bar {
          transition: width 1.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
      `}</style>
      <div ref={sectionRef} className="market-growth">
        <div className="market-growth__content">
          <div className="market-growth__text">
            {/* Mobile heading */}
            <h2 className="market-growth__title market-growth__title--mobile">
              Market Growth &<br />Revenue Projections
            </h2>
            {/* Desktop heading */}
            <h2 className="market-growth__title market-growth__title--desktop">
              Market <br />Growth &<br />Revenue<br /> Projections
            </h2>
            <p className="market-growth__description hide-on-mobile">
              LawVriksh is positioned at the intersection of rapidly expanding markets. 
              The legal technology sector is experiencing unprecedented growth, while the 
              creator economy and online education markets are reshaping how professionals 
              monetize their expertise. Our platform captures value across these converging 
              trillion-dollar opportunities.
            </p>
          </div>
        </div>
        
        <div className="market-growth__chart">
          <div className="market-growth__chart-container">
            <h3 className="market-growth__chart-title">Market Size by 2030</h3>
            <div className="market-growth__bars">
              {marketData.map((data, index) => {
                const currentWidth = (data.current / maxValue) * 100;
                const projectedWidth = (data.projected / maxValue) * 100;
                
                const initialCurrentWidth = currentWidth * 0.3;
                const initialProjectedWidth = projectedWidth * 0.3;

                return (
                  <div key={index} className="market-growth__bar-group">
                    <div className="market-growth__bar-label">{data.label}</div>
                    <div className="market-growth__bar-container">
                      <div className="market-growth__bar-track">
                        {data.current > 0 && (
                          <div 
                            className="market-growth__bar market-growth__bar-current"
                            style={{ 
                              backgroundColor: data.color,
                              width: isVisible ? `${currentWidth}%` : `${initialCurrentWidth}%`,
                              transitionDelay: `${index * 0.15}s`
                            }}
                          />
                        )}
                        <div 
                          className="market-growth__bar market-growth__bar-projected"
                          style={{ 
                            backgroundColor: data.color, 
                            opacity: 0.7,
                            width: isVisible ? `${projectedWidth}%` : `${initialProjectedWidth}%`,
                            transitionDelay: `${index * 0.15 + (data.current > 0 ? 0.2 : 0)}s`
                          }}
                        />
                      </div>
                      <div className="market-growth__values">
                        {data.current > 0 && (
                          <span className="market-growth__value market-growth__value-current">
                            <AnimatedNumber value={data.current} unit={data.unit} isVisible={isVisible} delay={index * 150} />
                          </span>
                        )}
                        <span className="market-growth__value market-growth__value-projected">
                           <AnimatedNumber value={data.projected} unit={data.unit} isVisible={isVisible} delay={index * 150 + (data.current > 0 ? 200 : 0)} />
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="market-growth__legend">
              <div className="market-growth__legend-item">
                <div className="market-growth__legend-color" style={{ backgroundColor: '#966f33' }}></div>
                <span>Current Market Size</span>
              </div>
              <div className="market-growth__legend-item">
                <div className="market-growth__legend-color" style={{ backgroundColor: '#966f33', opacity: 0.7 }}></div>
                <span>Projected by 2030</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}