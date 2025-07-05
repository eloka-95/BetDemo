export const getMarkup: any = (color: string) => {
    return {
        'more':`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10.5" y="3" width="3" height="3" rx="1" stroke="#626C7A" stroke-width="1.2"/>
            <rect x="10.5" y="10.5" width="3" height="3" rx="1" stroke="#626C7A" stroke-width="1.2"/>
            <rect x="10.5" y="18" width="3" height="3" rx="1" stroke="#626C7A" stroke-width="1.2"/>
        </svg>`,

        rigthArrow:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,

        arrowRight: `
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.42578 14.6004L6.85912 9.16706C7.50078 8.52539 7.50078 7.47539 6.85912 6.83372L1.42578 1.40039" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
        arrowRightWhite: `
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.42578 14.6004L6.85912 9.16706C7.50078 8.52539 7.50078 7.47539 6.85912 6.83372L1.42578 1.40039" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,

    'arrow-back': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,

     'arrow-left': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_3298_62962" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_3298_62962)">
        <path d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z" fill="#222222"/>
        </g>
        </svg>
        `,

     unitIncrease: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11.4286" stroke="#5755FF" stroke-width="1.14286"/>
        <line x1="6.85742" y1="12.0018" x2="17.1431" y2="12.0018" stroke="#5755FF" stroke-width="1.14286"/>
        <line x1="12.0011" y1="6.85841" x2="12.0009" y2="17.1441" stroke="#5755FF" stroke-width="1.14286"/>
        </svg>
        `,

    unitDecrease: `
        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.857422" y1="1.00181" x2="11.1431" y2="1.00181" stroke="#0E0E33" stroke-width="1.14286"/>
        </svg> `,

     userName:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,

        emailIcon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
        passwordIcon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.9965 16H16.0054" stroke="#221F1F" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9955 16H12.0045" stroke="#221F1F" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.99451 16H8.00349" stroke="#221F1F" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,

        closeEyeIcon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.53 9.46998L9.46998 14.53C8.81998 13.88 8.41998 12.99 8.41998 12C8.41998 10.02 10.02 8.41998 12 8.41998C12.99 8.41998 13.88 8.81998 14.53 9.46998Z" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.47003 3.72998 5.18003 5.80998 2.89003 9.40998C1.99003 10.82 1.99003 13.19 2.89003 14.6C3.68003 15.84 4.60003 16.91 5.60003 17.77" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.41998 19.53C9.55998 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39999C20.78 8.87999 20.42 8.38999 20.05 7.92999" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.51 12.7C15.25 14.11 14.1 15.26 12.69 15.52" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.47 14.53L2 22" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 2L14.53 9.47" stroke="#221F1F" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,

        checkIcon:`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
        <g fill="#fbfbfb" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M19.28125,5.28125l-10.28125,10.28125l-4.28125,-4.28125l-1.4375,1.4375l5,5l0.71875,0.6875l0.71875,-0.6875l11,-11z"></path></g></g>
        </svg>`,

        GoogleIcon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0002 10.2249C20.0002 9.56662 19.9406 8.94162 19.8384 8.33328H10.2173V12.0916H15.726C15.4791 13.325 14.7554 14.3666 13.6826 15.0749V17.5749H16.9691C18.8933 15.8333 20.0002 13.2666 20.0002 10.2249Z" fill="#4285F4"/>
            <path d="M10.2174 20C12.976 20 15.2834 19.1 16.9692 17.575L13.6827 15.075C12.7632 15.675 11.5967 16.0417 10.2174 16.0417C7.55244 16.0417 5.29616 14.2833 4.48731 11.9083H1.09863V14.4833C2.77594 17.75 6.22422 20 10.2174 20Z" fill="#34A853"/>
            <path d="M4.48702 11.9083C4.27416 11.3083 4.16347 10.6666 4.16347 9.99996C4.16347 9.3333 4.28267 8.69163 4.48702 8.09163V5.51663H1.09834C0.400169 6.86663 0 8.3833 0 9.99996C0 11.6166 0.400169 13.1333 1.09834 14.4833L4.48702 11.9083Z" fill="#FBBC05"/>
            <path d="M10.2173 3.95833C11.7243 3.95833 13.0696 4.46667 14.1338 5.45834L17.0457 2.60833C15.2833 0.991668 12.9759 0 10.2173 0C6.2241 0 2.77582 2.25 1.09851 5.51667L4.48719 8.09167C5.29604 5.71667 7.55232 3.95833 10.2173 3.95833Z" fill="#EA4335"/>
            </svg>`,

            BottomTabIcon:`
            <svg width="399" height="104" viewBox="0 0 399 104" fill="red" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_19_12873)">
            <path d="M12 18C12 12.4772 16.5117 7.99999 22.0346 8.00001C77.9068 8.00026 90.2774 
            8.00607 135.502 8.13583C139.183 8.14639 142.562 10.1929 144.386 
            13.3903C156.772 35.1041 171.691 51 199.5 51C227.081 51 243.674 35.7858 
            254.718 13.9052C256.505 10.3652 260.086 8.00003 264.051 8.00006C308.416 8.00042 321.628 8.00005
             376.967 8C382.489 8 387 12.4772 387 18V78C387 
            83.5228 382.523 88 377 88H22C16.4771 88 12 83.5228 12 78V18Z" fill="red"/>
            </g>
            <defs>
            <filter id="filter0_d_19_12873" x="0" y="0" width="399" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="6"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.06 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_12873"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_12873" result="shape"/>
            </filter>
            </defs>
            </svg>
            `,

            callender:`
           <svg fill="#f4f0f0" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" width="64px" height="64px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M490.6,43H381.1V11h-20.9v32H151.7V11h-20.9v32H21.4C15.2,43,11,47.2,11,53.6v436.7c0,6.4,4.2,10.7,10.4,10.7h469.1 c6.3,0,10.4-4.3,10.4-10.7V53.6C501,47.2,496.8,43,490.6,43z M480.1,479.7H31.9V64.3h99v32h20.9v-32h208.5v32h20.9v-32h99V479.7z"></path> <path d="m84,170.8c-6.3,0-10.4,4.3-10.4,10.7v245c0,6.4 4.2,10.7 10.4,10.7h344c6.3,0 10.4-4.3 10.4-10.7v-245c0-6.4-4.2-10.7-10.4-10.7h-344zm333.6,245h-323.2v-223.7h323.2v223.7z"></path> <rect width="20.9" x="214.3" y="232.6" height="21.3"></rect> <rect width="20.9" x="276.9" y="232.6" height="21.3"></rect> <rect width="20.9" x="339.4" y="232.6" height="21.3"></rect> <rect width="20.9" x="151.7" y="293.3" height="21.3"></rect> <rect width="20.9" x="214.3" y="293.3" height="21.3"></rect> <rect width="20.9" x="276.9" y="293.3" height="21.3"></rect> <rect width="20.9" x="339.4" y="293.3" height="21.3"></rect> <rect width="20.9" x="151.7" y="355.1" height="21.3"></rect> <rect width="20.9" x="214.3" y="355.1" 
           height="21.3"></rect> <rect width="20.9" x="276.9" y="355.1" height="21.3"></rect> <rect width="20.9" x="339.4" y="355.1" height="21.3"></rect> </g> </g> </g></svg>
            `,

            smallArrowDown: `
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29922 3.73047L5.58255 6.44714C5.26172 6.76797 4.73672 6.76797 4.41589 6.44714L1.69922 3.73047" stroke="#ffff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            `,
    };

    
};
