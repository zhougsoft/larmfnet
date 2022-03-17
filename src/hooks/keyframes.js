import { keyframes } from 'styled-components'

// --- BOUNCE
export const bounceInner = keyframes`
    from {
        transform: scaleX(0.95);
        transform: scaleY(0.93);
    }

    50% {
        transform: scaleX(1);
        transform: scaleY(1);
    }

    to {
        transform: scaleX(0.95);
        transform: scaleY(0.93);
    }
`
export const bounceOuter = keyframes`
    from {
        margin-top: 5%;
    }

    50% {
        margin-top: 0%;
    }

    to {
        margin-top: 5%;
    }
`

// --- DANCE
export const danceInner = keyframes`
    from {
        transform: scaleX(0.95);
        transform: scaleY(0.95);
    }
    
    75% {
        transform: scaleX(1);
        transform: scaleY(0.98);
        transform: skewX(2deg);
    }
    
    50% {
        transform: scaleX(0.95);
        transform: scaleY(0.95);
        
    }
    
    25% {
        transform: scaleX(1);
        transform: scaleY(0.98);
        transform: skewX(-2deg); 
    }
    
    to {
        transform: scaleX(0.95);
        transform: scaleY(0.95);    
    }
`
export const danceOuter = keyframes`
    from {
        margin-top: 2%;
    }
    
    50% {
        margin-top: 1%;
    }
    
    to {
        margin-top: 2%; 
    }
`

// --- WIGGLE
export const wiggleInner = keyframes`
    from {
        transform: rotate(1deg);
        transform: skewX(1deg);
        transform: skewY(1deg);
    }
    
    50% {
        transform: rotate(-0.5deg);
        transform: skewX(1deg);
        transform: translate(1px, 1px);
    }
    
    to {
        transform: rotate(1deg);
        transform: skewX(1deg);
        transform: skewY(1deg);
    }
`
