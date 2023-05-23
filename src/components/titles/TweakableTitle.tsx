/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';

export type TweakableTitleProps = {
  text: string;
  angleScale: number;
  className: string;
  titleClassName: string;
} & React.ComponentPropsWithRef<'div'>;

const TweakableTitle = React.forwardRef<HTMLAnchorElement, TweakableTitleProps>(
  ({ text, angleScale, className, titleClassName }) => {
    const [angle, setAngle] = React.useState(0);
    const [fontSize] = React.useState(7);

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.max(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        200
      );
      const normalizedAngle = Math.min((distance * 10) / 200 - 10, 10);

      setAngle(deltaX > 0 ? normalizedAngle : -normalizedAngle);
    };

    React.useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, [angleScale]);

    return (
      <div
        css={css`
          transform: rotate(${angle}deg);
        `}
        className={className}
      >
        <h1
          className={titleClassName}
          css={css`
            font-size: ${fontSize}rem;
            letter-spacing: 0.5rem;
            text-shadow: 0 0 0.6rem rgba(255, 255, 255, 0.8);
          `}
        >
          {text}
        </h1>
      </div>
    );
  }
);

export default TweakableTitle;
