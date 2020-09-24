import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

// Default color is ?
const DEFAULT_COLOR = '#F78DA4';

const generateSparkle = color => {
    const sparkle = {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        color,
        size: random(10, 30),
        style: {
            // Random spot in the available space
            top: random(0, 100) + '%',
            left: random(0, 100) + '%',
            zIndex: 999,
        },
    };
    return sparkle;
};

// Prefers reduced motion... people with vestibular motion disorders.
const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';
const getInitialState = () => {
    // We don't know if the user prefers a reduced motion. The value will
    // be overwritten on the client side, before any sparkle occurs.
    return isRenderingOnServer
        ? true
        : !window.matchMedia(QUERY).matches;
};

function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);
    useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);
        const listener = event => {
        setPrefersReducedMotion(!event.matches);
        };
        mediaQueryList.addListener(listener);
        return () => {
        mediaQueryList.removeListener(listener);
        };
    }, []);
    return prefersReducedMotion;
};

// Creates the random variable for placement, id, and size of sparkel
const random = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

// Helper for random number generation 
const useRandomInterval = (callback, minDelay, maxDelay) => {
    const timeoutId = useRef(null);
    const savedCallback = useRef(callback);
    useEffect(() => {
        savedCallback.current = callback;
    });
    useEffect(() => {
        let isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = random(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current();
                    handleTick();
                }, nextTickAt);
            };
            handleTick();
        }
        return () => window.clearTimeout(timeoutId.current);
    }, [minDelay, maxDelay]);

    const cancel = useCallback(function() {
        window.clearTimeout(timeoutId.current);
    }, []);
    return cancel;
};

const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
};


// Component
const Sparkles = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
    const [sparkles, setSparkles] = useState(() => {
        return range(3).map(() => generateSparkle(color));
    });

    const prefersReducedMotion = usePrefersReducedMotion();

    useRandomInterval(() => {
        
        // Creates a new sparkle
        const sparkle = generateSparkle(color);
        const now = Date.now();

        // Removes old sparkles
        const nextSparkles = sparkles.filter(sp => {
            const delta = now - sp.createdAt;
            return delta < 750;
        });

        // Adds new sparkle
        nextSparkles.push(sparkle);

        // Makes sparkle appear
        setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
    );

    return (
        <Wrapper {...delegated}>
            {sparkles.map(sparkle => (
                <Sparkle
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
            <ChildWrapper>{children}</ChildWrapper>
        </Wrapper>
    );
};

const Sparkle = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
  
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`;

const SparkleSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 2;
  font-weight: bold;
`;


export default Sparkles;

