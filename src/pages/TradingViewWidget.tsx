import React, {useEffect, useRef} from 'react';

// Define type for the script loading promise
let tvScriptLoadingPromise: Promise<void> | null = null;

const TradingViewWidget: React.FC = () => {
  const onLoadScriptRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise(resolve => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = () => resolve();

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current(),
    );

    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget() {
      if (
        document.getElementById('tradingview_c9ebb') &&
        'TradingView' in window
      ) {
        // Explicitly cast window to any to access TradingView
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: 'MIL:JUVE',
          interval: 'D',
          timezone: 'Asia/Seoul',
          theme: 'light',
          style: '3',
          locale: 'en',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_c9ebb',
        });
      }
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{height: '100%', width: '100%'}}>
      <div id="tradingview_c9ebb" style={{height: '100%', width: '100%'}} />
    </div>
  );
};

export default TradingViewWidget;
