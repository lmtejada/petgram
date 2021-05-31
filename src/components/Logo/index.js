import * as React from 'react'
import { Svg } from './styles'

export const Logo = (props) => {
  return (
    <Svg
      width={387.922}
      height={122.021}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='56.039 13.989 387.922 122.021'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-gradow-gradient'
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#b500b5' />
          <stop offset={1} stopColor='#ff8c00' />
        </linearGradient>
        <filter
          id='prefix__editing-gradow-filter'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feFlood floodColor='rgba(0%,0%,0%,0)' result='flood' />
          <feComposite
            operator='in'
            in2='SourceAlpha'
            in='flood'
            result='shadow'
          />
          <feOffset dx={-4} dy={-4} in='SourceGraphic' result='offset-1' />
          <feOffset dx={4} dy={4} in='shadow' result='offset-2' />
          <feMerge>
            <feMergeNode in='offset-2' />
            <feMergeNode in='offset-1' />
          </feMerge>
        </filter>
      </defs>
      <g filter='url(#prefix__editing-gradow-filter)'>
        <path
          d='M30.91-4.38q-2.69 2.72-6.37 4.19-3.68 1.47-7.32 1.47-3.65 0-4.93-.64L10.3 11.52-2.69 12.8l8.83-45.44 10.44-1.09-.84 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54Q33.6-7.1 30.91-4.38zM16.45-22.34L13.06-3.58q1.34 1.15 3 1.15 1.67 0 2.63-.64t1.66-1.92q1.92-3.46 3.46-13.95.45-3.08.45-6.08 0-3.01-.68-3.97-.67-.96-1.95-.96-3.9 0-5.18 7.61zM66.3-10.82q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zM75.46-6.4q0-1.73.89-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h5l-.58 2.88h-4.93l-3.26 17.28q-.83 3.97-.83 5.31 0 3.07 2.68 3.71Q90.3-1.28 88 0q-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63zm26.36-20.35q2.18-3.07 5.48-5.12 3.29-2.05 7.32-2.05 4.04 0 5.96 1.28l12.54-1.28-4.35 24.58q-2.24 12.54-6.98 17.47-4.54 4.67-13.37 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.98-4.13 1.98-1.51 5.06-1.51 2.68 0 4.73 1.22 1.22.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.71-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.16-2.17-2.63-2.18-2.63-7.3 0-3.2 1.09-6.81 1.09-3.62 3.26-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.27-16.44q-.32-.07-.64-.2-.64-.25-1.48-.25-3.9 0-6.2 6.4-1.8 4.99-1.8 11.13zm45.51-4.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02L147.33 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.71 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.6 6.43-2.59 2.49-7 2.49-1.92 0-2.69-.76zm16.09 16.06q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67zm69.98 29.18q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.54 2.2-2.24 6.62L239.23 0l-12.48 1.28 3.46-17.41q.57-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L220.16 0l-12.61 1.28 6.72-33.92 10.43-1.28-1.08 6.46q1.66-3.45 4.73-4.96 3.07-1.5 7.87-1.5 2.76 0 4.55 1.34 1.79 1.35 2.37 3.52 1.08-2.24 3.87-3.55 2.78-1.31 6.21-1.31 3.42 0 5.12.74 1.69.73 2.72 1.95 1.72 2.24 1.72 6.33 0 4.04-1.72 12.42-.9 4.1-.9 5.6t.86 2.4q.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28z'
          fill='url(#prefix__editing-gradow-gradient)'
          transform='translate(117.994 101.202)'
        />
      </g>
      <style />
    </Svg>
  )
}
