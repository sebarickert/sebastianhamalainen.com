interface LogoProps {
  size?: number;
  version?: 'black' | 'white';
}

const defaultSize = 32;

export const Logo = ({ size = defaultSize, version = 'black' }: LogoProps): JSX.Element => {
  if (version === 'white') {
    return (
      <svg viewBox="0 0 93 82.09" width={size} height={size} fill="white">
        <path
          className="cls-1"
          d="M74.52,0V31.8h-27a44.93,44.93,0,0,1,6.65,2.46,28.62,28.62,0,0,1,7.65,5.11,20,20,0,0,1,4.71,6.84,21.22,21.22,0,0,1,1.21,4.08h6.81v31.8H93V0Z"
        />
        <path
          className="cls-1"
          d="M58.79,42.37a28.62,28.62,0,0,0-7.65-5.11,48.91,48.91,0,0,0-10.49-3.44l-6.87-1.56a39.16,39.16,0,0,1-4.92-1.37,16.4,16.4,0,0,1-3.73-1.82,7.31,7.31,0,0,1-2.34-2.4,5.51,5.51,0,0,1-.72-3.16,6.59,6.59,0,0,1,1.28-3.89A8.28,8.28,0,0,1,27.1,17a17.33,17.33,0,0,1,6.25-1q5.67,0,8.73,2.4a9.19,9.19,0,0,1,3.46,6.7H64.05A23.55,23.55,0,0,0,60.18,12,25,25,0,0,0,49.54,3.14,38.52,38.52,0,0,0,33.39,0,40,40,0,0,0,17.18,3.12,26.53,26.53,0,0,0,6.05,11.83a21.47,21.47,0,0,0-4,13Q2,33.93,8,39.27T24.37,47l8.36,2a46.41,46.41,0,0,1,7.2,2.21A10.88,10.88,0,0,1,44.13,54a6,6,0,0,1,1.41,3.89A6.94,6.94,0,0,1,44,62.13a9.63,9.63,0,0,1-4.23,2.93,18.54,18.54,0,0,1-6.66,1.06,19.62,19.62,0,0,1-7.48-1.33,11.35,11.35,0,0,1-5.06-3.91,12.16,12.16,0,0,1-2.07-6.44H0q.12,9.38,4.26,15.5a24.66,24.66,0,0,0,11.6,9.14,46.47,46.47,0,0,0,17.49,3A45.19,45.19,0,0,0,50.44,79.2a23.78,23.78,0,0,0,10.87-8.32,22.35,22.35,0,0,0,3.83-13,22.93,22.93,0,0,0-1.64-8.67A20,20,0,0,0,58.79,42.37Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 93 82.09" width={size} height={size}>
      <path d="M74.52,0V31.8h-27a44.93,44.93,0,0,1,6.65,2.46,28.62,28.62,0,0,1,7.65,5.11,20,20,0,0,1,4.71,6.84,21.22,21.22,0,0,1,1.21,4.08h6.81v31.8H93V0Z" />
      <path d="M58.79,42.37a28.62,28.62,0,0,0-7.65-5.11,48.91,48.91,0,0,0-10.49-3.44l-6.87-1.56a39.16,39.16,0,0,1-4.92-1.37,16.4,16.4,0,0,1-3.73-1.82,7.31,7.31,0,0,1-2.34-2.4,5.51,5.51,0,0,1-.72-3.16,6.59,6.59,0,0,1,1.28-3.89A8.28,8.28,0,0,1,27.1,17a17.33,17.33,0,0,1,6.25-1q5.67,0,8.73,2.4a9.19,9.19,0,0,1,3.46,6.7H64.05A23.55,23.55,0,0,0,60.18,12,25,25,0,0,0,49.54,3.14,38.52,38.52,0,0,0,33.39,0,40,40,0,0,0,17.18,3.12,26.53,26.53,0,0,0,6.05,11.83a21.47,21.47,0,0,0-4,13Q2,33.93,8,39.27T24.37,47l8.36,2a46.41,46.41,0,0,1,7.2,2.21A10.88,10.88,0,0,1,44.13,54a6,6,0,0,1,1.41,3.89A6.94,6.94,0,0,1,44,62.13a9.63,9.63,0,0,1-4.23,2.93,18.54,18.54,0,0,1-6.66,1.06,19.62,19.62,0,0,1-7.48-1.33,11.35,11.35,0,0,1-5.06-3.91,12.16,12.16,0,0,1-2.07-6.44H0q.12,9.38,4.26,15.5a24.66,24.66,0,0,0,11.6,9.14,46.47,46.47,0,0,0,17.49,3A45.19,45.19,0,0,0,50.44,79.2a23.78,23.78,0,0,0,10.87-8.32,22.35,22.35,0,0,0,3.83-13,22.93,22.93,0,0,0-1.64-8.67A20,20,0,0,0,58.79,42.37Z" />
    </svg>
  );
};