interface IProps {
    active?: boolean;
  }
  
  const GameIcon: React.FC<IProps> = ({ active = false }) => {
    return (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2580_22278)">
          <path
            d="M1.3 12C1.3 8.57583 4.07583 5.8 7.5 5.8H17.5C20.9242 5.8 23.7 8.57583 23.7 12C23.7 15.4242 20.9242 18.2 17.5 18.2H7.5C4.07584 18.2 1.3 15.4242 1.3 12Z"
            stroke={active ? "#FFFFFF" : "#A6A6A6"}
            stroke-width="1.6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.99999 4.6H17C19.6177 4.6 21.8003 6.46258 22.2949 8.93475C22.7466 9.86049 23 10.9006 23 12C23 12.7269 22.8892 13.4279 22.6836 14.0871C23.512 12.9371 24 11.5255 24 10C24 6.13401 20.866 3 17 3H8.99999C5.86089 3 3.20439 5.06628 2.31641 7.91292C3.34104 6.49055 4.88645 5.46833 6.67336 5.12554C7.37792 4.78864 8.16692 4.6 8.99999 4.6Z"
            fill={active ? "#FFFFFF" : "#A6A6A6"}
          />
          <path
            d="M7.5 10C7.5 9.72386 7.72386 9.5 8 9.5C8.27614 9.5 8.5 9.72386 8.5 10V14C8.5 14.2761 8.27614 14.5 8 14.5C7.72386 14.5 7.5 14.2761 7.5 14V10Z"
            fill={active ? "#FFFFFF" : "#A6A6A6"}
          />
          <path
            d="M5.5 12C5.5 11.7239 5.72386 11.5 6 11.5H10C10.2761 11.5 10.5 11.7239 10.5 12C10.5 12.2761 10.2761 12.5 10 12.5H6C5.72386 12.5 5.5 12.2761 5.5 12Z"
            fill={active ? "#FFFFFF" : "#A6A6A6"}
          />
          <circle cx="15.5" cy="13" r="1" fill={active ? "#FFFFFF" : "#A6A6A6"} />
          <circle cx="17.5" cy="11" r="1" fill={active ? "#FFFFFF" : "#A6A6A6"} />
        </g>
        <defs>
          <clipPath id="clip0_2580_22278">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };
  
  export default GameIcon;
  